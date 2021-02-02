import {ipcRenderer, remote} from "electron"
import React, {useState, useEffect} from "react"
import "../styles/versiondialog.less"

const VersionDialog: React.FunctionComponent = (props) => {
    let [version, setVersion] = useState(remote.app.getVersion())
    let [newVersion, setNewVersion] = useState(false)
    let [visible, setVisible] = useState(false)
    
    useEffect(() => {
        ipcRenderer.on("show-version-dialog", async (event, update) => {
            setVisible((prev) => !prev)
            if (update) {
                setVersion(update)
                setNewVersion(true)
            }
        })
        ipcRenderer.on("close-all-dialogs", async (event, ignore) => {
            if (ignore !== "version") setVisible(false)
        })
    }, [])

    const getText = () => {
        if (newVersion) {
            return `A new version (v${version}) is available! Would you like to download the update?`
        } else {
            return `No updates were found, you are currently on the latest version.`
        }
    }

    const click = (button: "accept" | "reject") => {
        if (newVersion && button === "accept") {
            ipcRenderer.invoke("install-update")
        }
        setVisible(false)
    }

    if (visible) return (
        <section className="version-dialog">
            <div className="version-dialog-box">
                <div className="version-container">
                    <p className="version-dialog-text">{getText()}</p>
                    <div className="version-button-container">
                        <button onClick={() => click("reject")} className="reject-button">{newVersion ? "No" : "Cancel"}</button>
                        <button onClick={() => click("accept")} className="accept-button">{newVersion ? "Yes" : "Ok"}</button>
                    </div>
                </div>
            </div>
        </section>
    )
    return null
}

export default VersionDialog
import React, {useEffect, useState} from "react"
import ReactDom from "react-dom"
import TitleBar from "./components/TitleBar"
import SearchBar from "./components/SearchBar"
import LogoBar from "./components/LogoBar"
import GroupAction from "./components/GroupAction"
import VersionDialog from "./components/VersionDialog"
import LoginDialog from "./components/LoginDialog"
import AdvancedSettings from "./components/AdvancedSettings"
import EpisodeContainerList from "./components/EpisodeContainerList"
import ContextMenu from "./components/ContextMenu"
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.less"

export const ClearAllContext = React.createContext<any>(null)
export const DeleteAllContext = React.createContext<any>(null)
export const StopAllContext = React.createContext<any>(null)

export const TypeContext = React.createContext<any>(null)
export const LanguageContext = React.createContext<any>(null)
export const FormatContext = React.createContext<any>(null)
export const QualityContext = React.createContext<any>(null)

export const VideoQualityContext = React.createContext<any>(null)
export const TemplateContext = React.createContext<any>(null)
export const QueueContext = React.createContext<any>(null)
export const EnglishDialectContext = React.createContext<any>(null)
export const SpanishDialectContext = React.createContext<any>(null)
export const PortugeuseDialectContext = React.createContext<any>(null)

const App: React.FunctionComponent = () => {
  const [clearAll, setClearAll] = useState(false)
  const [deleteAll, setDeleteAll] = useState(false)
  const [stopAll, setStopAll] = useState(false)
  const [videoQuality, setVideoQuality] = useState(16)
  const [template, setTemplate] = useState("{seasonTitle} {episodeNumber}")
  const [type, setType] = useState("sub")
  const [language, setLanguage] = useState("enUS")
  const [format, setFormat] = useState("mp4")
  const [quality, setQuality] = useState("1080")
  const [queue, setQueue] = useState(12)
  const [englishDialect, setEnglishDialect] = useState("US")
  const [spanishDialect, setSpanishDialect] = useState("LA")
  const [portugeuseDialect, setPortugeuseDialect] = useState("BR")
  const [region, setRegion] = useState("US")

  return (
    <PortugeuseDialectContext.Provider value={{portugeuseDialect, setPortugeuseDialect}}>
    <SpanishDialectContext.Provider value={{spanishDialect, setSpanishDialect}}>
    <EnglishDialectContext.Provider value={{englishDialect, setEnglishDialect}}>
    <QueueContext.Provider value={{queue, setQueue}}>
    <QualityContext.Provider value={{quality, setQuality}}>
    <FormatContext.Provider value={{format, setFormat}}>
    <LanguageContext.Provider value={{language, setLanguage}}>
    <TypeContext.Provider value={{type, setType}}>
    <VideoQualityContext.Provider value={{videoQuality, setVideoQuality}}>
    <TemplateContext.Provider value={{template, setTemplate}}>
    <StopAllContext.Provider value={{stopAll, setStopAll}}>
    <DeleteAllContext.Provider value={{deleteAll, setDeleteAll}}>
    <ClearAllContext.Provider value={{clearAll, setClearAll}}>
    <main className="app">
      <TitleBar/>
      <ContextMenu/>
      <VersionDialog/>
      <LoginDialog/>
      <AdvancedSettings/>
      <LogoBar/>
      <SearchBar/>
      <GroupAction/>
      <EpisodeContainerList/>
    </main>
    </ClearAllContext.Provider>
    </DeleteAllContext.Provider>
    </StopAllContext.Provider>
    </TemplateContext.Provider>
    </VideoQualityContext.Provider>
    </TypeContext.Provider>
    </LanguageContext.Provider>
    </FormatContext.Provider>
    </QualityContext.Provider>
    </QueueContext.Provider>
    </EnglishDialectContext.Provider>
    </SpanishDialectContext.Provider>
    </PortugeuseDialectContext.Provider>
  )
}

ReactDom.render(<App/>, document.getElementById("root"))

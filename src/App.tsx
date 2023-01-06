import React from 'react'
import './App.css'
import MobileShareButton from "./components/fab/ShareButton";
import {HomeGrid} from "./components/grid/HomeGrid";
import {HashRouter, Route, Routes} from "react-router-dom";
import {Navbar} from "./components/navbar/Navbar";
import {AppIFrame} from "./components/frame/AppIFrame";
import {useCards} from "./store/TileStore";
import {Tableau} from "./components/frame/Tableau";

// import DatabricksSvg from './assets/databricks.svg'


function App() {

    const {cards} = useCards()
    return (
        <HashRouter>
            <div className="App">
                <Navbar/>
                <Routes>
                    <Route path="/" element={<HomeGrid/>}/>
                    {cards.map((card) => {
                        if (card.iframeUrl) {
                            return <Route path={card.linkRoute}
                                   element={<AppIFrame
                                       src={card.iframeUrl}
                                       optionalHeight={card.iframeHeight}
                                   />}/>
                        } else if (card.tableauUrl) {
                            return <Route path={card.linkRoute}
                                   element={<Tableau
                                       src={card.tableauUrl}
                                   />}/>
                        } else {
                            return <></>
                        }
                    })}

                </Routes>
                <MobileShareButton/>
                {/*</div>*/}
            </div>
        </HashRouter>
    )
}

export default App

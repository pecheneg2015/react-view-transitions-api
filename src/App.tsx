import React, {Suspense} from 'react';
import './styles/index.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {CustomLink} from "./components/CustomLink/CustomLink";
import {RoutesList} from "constants/routes";
import { Header } from 'components';

const About = React.lazy(() => import('./pages').then(res=>({default:res.AboutPage})));
const Help =  React.lazy(() => import('./pages').then(res=>({default:res.HelpPage})));
const Main =  React.lazy(() => import('./pages').then(res=>({default:res.MainPage})));
const Counter =  React.lazy(() => import('./pages').then(res=>({default:res.CounterPage})));

function App() {
    return (
        <BrowserRouter>
            <Suspense fallback={null}>
                <div className='w-full min-h-full flex flex-col gap-6 md:bg-[#00C896]/10 pb-10'>
                   <Header/>
                    <div className='w-full md:w-[80%] grow bg-white md:rounded-xl py-8 px-12 mx-auto' >
                        <div id='main-content'>
                            <Routes>
                                <Route element={<Main/>} path={RoutesList.Main}></Route>
                                <Route element={<About/>} path={RoutesList.About}></Route>
                                <Route element={<Help/>} path={RoutesList.Help}></Route>
                                <Route element={<Counter/>} path={RoutesList.Counter}></Route>
                            </Routes>
                        </div>
                    </div>
                </div>
            </Suspense>


        </BrowserRouter>
    );
}

export default App;

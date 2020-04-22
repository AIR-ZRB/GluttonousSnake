import React from "react";


import { HashRouter, Route, NavLink, Redirect } from "react-router-dom";



// 路由导入模块

import slidingBlock from "./slidingBlock/slidingBlock";
import dropLump from "./dropLump/dropLump";
import waterWave from "./waterWave/waterWave";




export default class Index extends React.Component {



    render() {
        return (
            <HashRouter>
                
                <nav className="navbar navbar-light bg-light">
                    <a className="navbar-brand" href="#/">
                        <img src={process.env.PUBLIC_URL + "/logo512.png"} width="30" height="30" className="d-inline-block align-top" alt="" />
                        React-Props
                    </a>
                </nav>



               
                <div className="row">
                    {/* 左边导航区域 */}
                    <div className="col-3">
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item active"><NavLink to="/home" exact>Home</NavLink></li>
                            <li className="list-group-item"><NavLink to="/slidingBlock" exact>滑块</NavLink></li>
                            <li className="list-group-item"><NavLink to="/dropLump" exact>拖拽排序</NavLink></li>
                            <li className="list-group-item"><NavLink to="/waterWave" exact>跟随鼠标水波</NavLink></li>
                            <li className="list-group-item"><NavLink to="/waterWave" exact>跟随鼠标水波</NavLink></li>
                            <li className="list-group-item"><NavLink to="/waterWave" exact>跟随鼠标水波</NavLink></li>
                            <li className="list-group-item"><NavLink to="/waterWave" exact>跟随鼠标水波</NavLink></li>
                            <li className="list-group-item"><NavLink to="/waterWave" exact>跟随鼠标水波</NavLink></li>
                            <li className="list-group-item"><NavLink to="/waterWave" exact>跟随鼠标水波</NavLink></li>
                            <li className="list-group-item"><NavLink to="/waterWave" exact>跟随鼠标水波</NavLink></li>
                            <li className="list-group-item"><NavLink to="/waterWave" exact>跟随鼠标水波</NavLink></li>
                            <li className="list-group-item"><NavLink to="/waterWave" exact>跟随鼠标水波</NavLink></li>
                            <li className="list-group-item"><NavLink to="/waterWave" exact>跟随鼠标水波</NavLink></li>
                            <li className="list-group-item"><NavLink to="/waterWave" exact>跟随鼠标水波</NavLink></li>
                            <li className="list-group-item"><NavLink to="/waterWave" exact>跟随鼠标水波</NavLink></li>
                            <li className="list-group-item"><NavLink to="/waterWave" exact>跟随鼠标水波</NavLink></li>
                            <li className="list-group-item"><NavLink to="/waterWave" exact>跟随鼠标水波</NavLink></li>
                            
                        
                         
                        </ul>
                    </div>
               


                    {/* 右边内容区域 */}
                    <div className="col-9">
                        
                        {/* <Redirect path="/" to="/home" /> */}
                        <Redirect path="/" to="/waterWave" />
                        <Route path="/home" component={Home}></Route>
                        <Route path="/slidingBlock" component={slidingBlock}></Route>
                        <Route path="/dropLump" component={dropLump}></Route>   
                        <Route path="/waterWave" component={waterWave}></Route>
                    </div>
                </div>

            </HashRouter>
        )
    }
}



function Home() {
    return (
        <div className="home">
            Home
        </div>            
    )          
}
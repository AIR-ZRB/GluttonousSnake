import React from "react";
import { HashRouter, Route, NavLink, Redirect } from "react-router-dom";


// 路由导入模块

import slidingBlock from "./slidingBlock/slidingBlock";
import tictactoe from "./tictactoe/tictactoe";
import paging from "./paging/paging";

import "./index.scss";


export default class Index extends React.Component<any, any> {
    constructor(props: any) {
        super(props);

        this.state = {
            routerList: [
                {
                    id: "1",
                    name: "Home",
                    CNname: "首页",
                    active: true
                },
                {
                    id: "2",
                    name: "SlidingBlock",
                    CNname: "滑块",
                    active: false
                },
                {
                    id: "3",
                    name: "Tictactoe",
                    CNname: "井字棋",
                    active: false
                },
                {
                    id: "4",
                    name: "paging",
                    CNname: "分页",
                    active: false
                }
            ]
        }


    }




    // 路由被点击的高亮
    routerListClickActive = (event: any): void=> {
        event.persist();
        let clickActive = this.state.routerList.filter((item: any,index: number)=> item.CNname === event.target.innerHTML);

        clickActive = clickActive[0].id - 1;

        const routerList = JSON.parse(JSON.stringify(this.state.routerList));
        
        routerList.forEach((item: any)=>{ item.active = false});
        routerList[clickActive].active = true;



        this.setState({
            routerList
        })
    }

   


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
                    <div className="router-list">
                        <ul className="list-group list-group-flush" onClick={this.routerListClickActive}>
                            <RouterList routerList={this.state.routerList} />
                        </ul>
                    </div>



                    {/* 右边内容区域 */}
                    <div className="router-content">
                        {/* <Redirect path="/" to="/home" /> */}
                        <Redirect path="/" to="/paging" />
                        <Route path="/home" component={Home}></Route>
                        <Route path="/slidingBlock" component={slidingBlock}></Route>
                        <Route path="/tictactoe" component={tictactoe}></Route>
                        <Route path="/paging" component={paging}></Route>
                    </div>
                </div>
            </HashRouter>
        )
    }
}






function Home() {
    return (
        <div className="home">
            欢迎来到我的UI库
        </div>
    )
}


function RouterList(props: any) {
    return (
        <>
            {
                props.routerList.map((item: any)=> <li className={ item.active ? "list-group-item active" : "list-group-item" } key={item.name}><NavLink to={"/"+item.name} exact>{item.CNname}</NavLink></li>)
            }
        </>
    )
}
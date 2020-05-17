import React from "react";
import "./paging.scss";



export default function Paging(props: any) {

    props = {
        total: props.total || 5,
        defaultCurrent: props.defaultCurrent || 1,
    }


    console.log(props.total);


    return (
        <div className="paging">
            <div className="description">
                <h2>分页</h2>
                <p>采用分页的形式分隔长列表，每次只加载一个页面。</p>
            </div>

            <div className="code-demonstration">
                <h3>代码演示</h3>

                <section className="demonstration">

                    <div className="product">
                        <PagingBox total={props.total} />
                    </div>

                    <div className="product-code">

                    </div>

                </section>

            </div>


        </div>
    )
}


function PagingBox(props: any) {

    // 初始化页数
    let initPagingTotal = () => {
        let initPagingArray = [];
        for (let i = 0; i < props.total; i++) {
            initPagingArray.push(i + 1);
        }
        return initPagingArray;
    }

    // click事件
    let pagingclick = ()=> {
        
    }





    return (
        <div className="paging-box">
            <section>⬅</section>

            {initPagingTotal().map((item: any, index: number) => {
                return <section key={item}>{index + 1}</section>
            })}

            <section>➡</section>
        </div>
    )
}
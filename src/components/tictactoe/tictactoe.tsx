import React from "react";
import "./tictactoe.css";


export default class Tictactoe extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            factorial: 3,
            start: true,
            tictactoeData: []
        }
    }


    // 当组件加载时,生命周期会报错
    // UNSAFE_componentWillMount() {
    //     let arr = [];
    //     for (let i = 0; i < this.state.factorial * this.state.factorial; i++) {
    //         arr.push({
    //             index: i,
    //             content: ""
    //         })
    //     }

    //     this.setState({
    //         tictactoeData: arr
    //     })
    // }




    // 每个格子被click后触发
    clickActive = (event: any) => {

        let nowSelect = this.state.start ? "O" : "X";
        let getTictactoeData = JSON.parse(JSON.stringify(this.state.tictactoeData));
        getTictactoeData[event.target.dataset.index].content = nowSelect;
        


        this.setState((state: any,props: any)=>{
            return {
                tictactoeData:getTictactoeData,
                start: !state.start
            }
        })


        // console.log(parseInt(event.target.dataset.index) + 1)
        this.result(parseInt(event.target.dataset.index));
    }



    result = (index:number) => {

        // 索引从0开始，n表示是几阶
        // 竖排2（索引+1）+ 索引
        // index + n
        // 0 3 6
        // 1 4 7
        // 2 5 8
        // 超过8的content会报错



        // 横排根据n*n的n来判断几个
        
        // 斜着 索引*n + （索引+1）
       
        // console.log(this.state.factorial)
        // console.log(index);
        for(let i = 0;i < this.state.factorial; i++){
            
            // console.log( index + (this.state.factorial) * i);
            for(let j = 0;j < this.state.factorial; j++){
                let column = j + this.state.factorial * i;
                console.log(column)
            }
            
           
           
            // console.log(this.state.tictactoeData[column].content);
        //    if(i === index * i){

        //    }
        }
        // console.log("????????????")

    }








    render() {
        return (
            <div className="tictactoe">
                <div className="tictactoe-box" onClick={this.clickActive}>
                    <List factorial={this.state.tictactoeData} />
                </div>
            </div>
        )
    }
}


function List(props: any) {
    return (
        <ul>
            {props.factorial.map((item: any, index: any) => {
                return <li key={index} data-index={index}>{item.content}</li>
            })}
        </ul>
    )
}







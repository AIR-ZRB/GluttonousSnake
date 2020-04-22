import React from "react";
import "./dropLump.css";


export default class dropLump extends React.Component<any, any> {

    constructor(props: any) {
        super(props)
    }

    static defaultProps: Object = {
        listQuantity: 4,
        content: ["today first", "today two", "today three", "today four"]
    }



  



    render() {
            return (
                <Bar content={this.props.content} dropLump={dropLump} />
            )
        }
    }




function Bar(props: any) {



    function downLump(event: any): void {
        let target = event.target;
        target.classList.add("scaleBig");
        let index = 0;
        document.onmouseover = function (mouseEvent: any) {
            if (!index) {
                index = mouseEvent.clientY;
            }
            dropLump(target, mouseEvent, index);
        }
    }

    function upLump(event: any): void {
        event.target.classList.remove("scaleBig")
        document.onmouseover = null;
    }

    function dropLump(target: any, event: any, top: number): void {


        let y = event.clientY - top;
        console.log(y);




        target.style.transform = `translateY(${y}px)`
        // target.style.top = `${x}px`;
    }



    return <div className="lumpBox">
        {
            props.content.map((item: string, index: number) => {
                return <section key={index} onMouseDown={downLump} onMouseUp={upLump} >{item}</section>
            })
        }
    </div>

    

}
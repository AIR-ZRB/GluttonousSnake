
import React from "react";
import "./waterWave.css"
export default class waterWave extends React.Component<any, any> {


    constructor(props: any) {
        super(props);

        this.state = {
            length: 0,
            waveList: [],
            bgRef: React.createRef()
        }

       
    }


    componentDidMount() {
        this.waterWave()
    }


    waterWave() {



        this.state.bgRef.current.onmouseover = (event: any) => {
            console.log("offset"+event.offsetX,event.offsetY);
            console.log("client"+event.clientX,event.clientY);
            
            this.setState({
                length: this.state.waveList.push({ x: event.offsetX - 50, y: event.offsetY - 50 })
            })

            if (this.state.length >= 5) {
                this.setState({
                    length: this.state.waveList.splice(0, 1)
                })
            }

        }
    }


    render() {
        return (
            <div className="waterWaveBg" ref={this.state.bgRef}>
                {this.state.waveList.map((item: any, index: number) => {
                    return <div key={index} className="waterWave" style={{ top: `${item.y}px`, left: `${item.x}px` }}></div>
                })}
            </div>
        )
    }

}

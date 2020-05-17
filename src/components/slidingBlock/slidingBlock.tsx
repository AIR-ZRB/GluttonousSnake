import React from "react";
import "./slidingBlock.css";

export default class slidingBlock extends React.Component<any, any> {


    // 还未做传值优化

    constructor(props: any) {
        super(props);

        this.state = {
            flag: true
        }

    }


    toggle(): void {
        const slidingLump: any = this.refs.lump;



        console.log(slidingLump.getAttribute("class"));
        if(this.state.flag) {
            slidingLump.classList.remove("back");
            slidingLump.classList.add("go");
        }else {
            slidingLump.classList.remove("go");
            slidingLump.classList.add("back");
        }
        
        this.setState({
            flag :!this.state.flag
        })

       
    }

    render() {
        return (
            <div>

                <button type="button" className="btn btn-primary" onClick={this.toggle.bind(this)}>toggle</button>

                <div className="slidingBar">
                    <div className="slidingLump" ></div>
                </div>

            </div>
        )
    }
} 
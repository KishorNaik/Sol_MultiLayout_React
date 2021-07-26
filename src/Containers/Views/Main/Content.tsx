import React, { Component, MouseEvent } from "react";
import history from "../../../Routers/Common/History";

export default class Content extends Component{

    private GoToHomePageEventHandler=(event:MouseEvent):void=>{
        history.push("/home");
    }

    public render(){
        return (
            <React.Fragment>
                <h1>Content</h1>

                <button className="btn btn-primary" onClick={this.GoToHomePageEventHandler}>Go Home</button>
            </React.Fragment>
        )
    }
}
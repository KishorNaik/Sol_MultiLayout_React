import React, { Component } from "react";
import Footer from "./Common/Footer";
import Header from "./Common/Header";

export default class MainLayout extends Component{

    public render(){
        return (
            <React.Fragment>
                <Header></Header>
                {this.props.children}
                <Footer></Footer>
            </React.Fragment>
        )
    }
}
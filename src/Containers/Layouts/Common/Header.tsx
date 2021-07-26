import React, { Component } from "react";
import { Link } from 'react-router-dom';

export default class Header extends Component{

    public render(){
        return (
            <React.Fragment>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="#">Navbar</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav mb-2 mb-lg-0 ms-md-auto">
                                <li className="nav-item">
                                    {/* <a className="nav-link active" aria-current="page" href="#">Home</a> */}
                                    <Link className="nav-link active" to='/'>Home</Link>
                                </li>
                                
                                <li className="nav-item">
                                    {/* <a className="nav-link" href="#">Link</a> */}
                                    <Link className="nav-link" to='/about'>About</Link>
                                </li>
                                <li className="nav-item">
                                    {/* <a className="nav-link" href="#">Link</a> */}
                                    <Link className="nav-link" to='/contactus'>Contact Us</Link>
                                </li>
                                <li className="nav-item">
                                    {/* <a className="nav-link" href="#">Link</a> */}
                                    <Link className="nav-link" to='/content'>Content</Link>
                                </li>
                                <li className="nav-item">
                                    {/* <a className="nav-link" href="#">Link</a> */}
                                    <Link className="nav-link" to='/admin'>Admin</Link>
                                </li>
                                <li className="nav-item">
                                    {/* <a className="nav-link" href="#">Link</a> */}
                                    <Link className="nav-link" to='/admin/setting'>Admin Setting</Link>
                                </li>
                                
                                <li className="nav-item">
                                    {/* <a className="nav-link" href="#">Link</a> */}
                                    <Link className="nav-link" to='/login'>Login</Link>
                                </li>
                                
                            </ul>
                        
                        </div>
                    </div>
                </nav>
            </React.Fragment>
        )
    }
}
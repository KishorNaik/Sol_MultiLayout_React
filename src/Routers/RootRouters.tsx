import React, { Component } from "react";
import { Redirect, Route, Router, Switch } from "react-router-dom";
import AdminLayout from "../Containers/Layouts/AdminLayout";
import NotFound from "../Containers/Layouts/Common/NotFound";
import MainLayout from "../Containers/Layouts/MainLayout";
import Dashboard from "../Containers/Views/Admin/Dashboard";
import Settings from "../Containers/Views/Admin/Settings";
import Login from "../Containers/Views/Auth/Login";
import About from "../Containers/Views/Main/About";
import ContactUs from "../Containers/Views/Main/ContactUs";
import Content from "../Containers/Views/Main/Content";
import Home from "../Containers/Views/Main/Home";
import history from "./Common/History";

export default class RootRouters extends Component{
    
    public render(){
        return (
            <React.Fragment>
                <Router history={history}>
                    <Switch>
                        // Login
                        <Route path='/login' component={Login} />

                        // Admin
                        <Route path="/admin/:path?" exact>
                            <AdminLayout>
                                <Switch>
                                    <Route path="/admin" exact component={Dashboard}></Route>
                                    <Route path="/admin/setting" component={Settings}></Route>
                                </Switch>
                            </AdminLayout>
                        </Route>


                        // Main Layout
                        <Route path="/:path?" exact>
                            <MainLayout>
                                <Switch>
                                    <Route path="/" exact component={Home}></Route>
                                    <Route path="/home" component={Home}></Route>
                                    <Route path="/about" component={About}></Route>
                                    <Route path="/contactus" component={ContactUs}></Route>
                                    <Route path="/content" component={Content}></Route>
                                    <Route path="/404" component={NotFound}></Route>
                                    <Redirect to="/404"></Redirect>
                                </Switch>
                            </MainLayout>
                        </Route>

                        


                    </Switch>
                </Router>
            </React.Fragment>
        )
    }

}
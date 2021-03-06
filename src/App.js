import React,{Component} from "react"
import { Button, message } from 'antd'
import {BrowserRouter, Route, Switch} from 'react-router-dom'

import Login from './pages/login/login'
import Admin from './pages/admin/admin'
/*
应用的跟组件
 */

export default class App extends Component{


    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route path='/login' component={Login}></Route>
                    <Route path='/' component={Admin}></Route>
                </Switch>
            </BrowserRouter>
        )
    }
}
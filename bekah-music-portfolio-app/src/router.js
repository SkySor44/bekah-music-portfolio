import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'

export default (
    <Switch>
        <Route path = '/' component = {Home} exact/>
        <Route path = '/about' component = {About}/>
        <Route path = '/contact' component = {Contact}/>
    </Switch>
)
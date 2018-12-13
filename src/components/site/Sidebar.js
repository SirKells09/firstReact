import React from "react"

import {
    Route,
    Link, 
    Switch}from 'react-router-dom'

import Home from './Home'
import Resources from './Resources'
import FunctionalComponentDemo from '../concepts/FunctionalComponentDemo'
import JSXRules from '../concepts/JSXRules';
import ClassComponentDemo from "../ClassComponentDemo";
import PropsDemo from '../concepts/PropsDemo';
import LifeCycleDiagram from '../concepts/LifeCycleCodepen';
import TimePiecesApp from '../apps/Timer-Apps/TimePiecesApp';
import MovieSearchApp from '../apps/movie-search-app/MovieApp';
import NytApp from '../apps/nyt-app/NytApp'
import FriendListApp from '../apps/friendsListApp/FListApp'

const Sidebar = () => (

    <div className= "sidebar">
        <div className="sidebar-list-styling">
            <ul className="sidebar-list -list unstyled">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/rationale">Rationale</Link></li>
                <li><Link to="/functionalcomponent">Functional Component</Link></li>
                <li><Link to='/jsxrules'>JSX Rules</Link></li>
                <li><Link to ="/classcomponentdemo">Class Components</Link></li>
                <li><Link to ="/propsdemo">Props Demo</Link></li>
                <li><Link to ="/resources"> Resources</Link></li>
                <li><Link to ="/LifeCycleCodePen">LifeCycleDiagram</Link></li>
                <li><Link to ="/timer">Timers</Link></li>
                <li><Link to ="/movie">Movies</Link></li>
                <li><Link to ="/NytApp">N.Y.T</Link></li>
                <li><Link to ='/FriendListApp'>F.List</Link></li>

            </ul>
        </div>
         <div className="sidebar-route">
            <Switch>
                <Route exact path="/home"><Home /></Route>
                <Route exact path="/resources"><Resources /></Route>
                <Route exact path ="/functionalcomponent"><FunctionalComponentDemo /></Route>
                <Route exact path="/jsxrules"><JSXRules /></Route>
                <Route exact path="/classcomponentdemo"><ClassComponentDemo /></Route>
                <Route exact path="/propsdemo"><PropsDemo /></Route>
                <Route exact path='/lifecyclecodepen'><LifeCycleDiagram /></Route>
                <Route exact path="/timer"><TimePiecesApp /></Route>
                <Route exact path="/movie"><MovieSearchApp /></Route>
                <Route exact path='/NytApp'><NytApp /></Route>
                <Route exact path='/FriendListApp'><FriendListApp /></Route>
            </Switch>
            
        </div>
    </div>
)

export default Sidebar;
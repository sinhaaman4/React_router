import React from 'react';
import ReactDOM from 'react-dom';

import {BrowserRouter, Route,NavLink,Switch} from 'react-router-dom';


import Posts from './components/posts';
import Profile from './components/profile';
import PostItem from './components/post_items';

class App  extends React.Component{
    render(){
    return <div>home</div>
    }
}

ReactDOM.render(
    <BrowserRouter>
        <div>
            <header>
                <NavLink to ="/" activeStyle={{color:'red'}}>Home</NavLink><br/>
                <NavLink to ="/posts" activeStyle={{color:'red'}}>Posts</NavLink><br/>
                <NavLink to ="/profile" activeStyle={{color:'red'}}>Profile</NavLink><br/>
                <hr/>
            </header>
            <Switch>
                <Route exact path="/posts" component={Posts}></Route>
                <Route path="/posts/:id" component={PostItem}></Route>
                <Route path="/profile" component={Profile}></Route>
                <Route path="/" component={App}></Route>
            </Switch>
        </div>
    </BrowserRouter>
    ,document.querySelector('#root'))
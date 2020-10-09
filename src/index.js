import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import "bootstrap/dist/css/bootstrap.min.css"
import App from './App';
import CourseManagerComponent from "./components/CourseManagerComponent";
import * as serviceWorker from './serviceWorker';
import Login from "./components/Login";
import Register from "./components/Register";
import Profile from "./components/Profile";
import {BrowserRouter, Link, Route} from "react-router-dom";
import CourseEditorComponent from "./components/CourseEditorComponent";

ReactDOM.render(
    <BrowserRouter>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
      <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" rel="stylesheet"/>
      <div className="body_row">
        <Link to="/login">Login</Link> |
        <Link to="/register">Register</Link> |
        <Link to="/profile">Profile</Link> |
        <Link to="/courses">Courses</Link> |
        <Link to="/edit">Editor</Link>
        <Route path="/login" exact component={Login}/>
        <Route path="/register" exact component={Register}/>
        <Route path="/profile" exact component={Profile}/>
        <Route path="/courses" exact>
          <CourseManagerComponent/>
        </Route>
        <Route
            path="/edit/:courseId"
            exact
            component={CourseEditorComponent}/>
      </div>
    </BrowserRouter>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
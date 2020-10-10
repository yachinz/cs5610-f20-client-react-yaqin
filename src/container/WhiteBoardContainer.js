import React from "react";
import {Route} from "react-router-dom";
import Login from "../components/Login";
import Register from "../components/Register";
import Profile from "../components/Profile";
import CourseManagerComponent from "../components/CourseManagerComponent";
import CourseEditorComponent from "../components/CourseEditorComponent";
import NavComponent from "../components/NavComponent";

class WhiteBoardContainer extends React.Component {
  render() {
    return (
        <div>
          <Route path="/" exact component={NavComponent}/>
          <Route path="/login" exact component={Login}/>
          <Route path="/register" exact component={Register}/>
          <Route path="/profile" exact component={Profile}/>
          <Route path="/courses" render={() => <CourseManagerComponent/>}/>
          <Route
              path="/edit/:courseId"
              exact
              component={CourseEditorComponent}/>
        </div>
    )
  }
}

export default WhiteBoardContainer
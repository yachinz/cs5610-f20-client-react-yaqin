import React from "react";
import {Link} from "react-router-dom";

class NavComponent extends React.Component {
  render() {
    return (
        <div>
          <Link to="/login">Login</Link> |
          <Link to="/register">Register</Link> |
          <Link to="/profile">Profile</Link> |
          <Link to="/courses/table">Courses</Link> |
          <Link to="/edit">Editor</Link>
        </div>
    )
  }
}
export default NavComponent
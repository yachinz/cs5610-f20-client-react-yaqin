import React from "react";
import './CourseEditorStyle.css'

class LessonTabsComponent extends React.Component {

  render() {
    return (
        <div className={'row'}>
          <div className={'col'}>
        <ul className="navbar-nav flex-row wbdv-lesson-tabs d-none d-sm-flex">
          <li className="nav-item">
            <a className="nav-link">Build</a>
          </li>
          <li className="nav-item">
            <a className="nav-link">Pages</a>
          </li>
          <li className="nav-item">
            <a className="nav-link">Theme</a>
          </li>
          <li className="nav-item">
            <a className="nav-link">Store</a>
          </li>
          <li className="nav-item">
            <a className="nav-link">Apps</a>
          </li>
          <li className="nav-item">
            <a className="nav-link">Settings</a>
          </li>
        </ul>
          </div>
          <div className={'col'}>
        <i className="fa fa-plus pull-right fa-2x wbdv-lesson-add-btn"
       aria-hidden="true"/>
          </div>
        </div>
    )
  }
}

export default LessonTabsComponent
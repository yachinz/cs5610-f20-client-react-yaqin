import React from "react";

class CourseManagerNavComponent extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg wbdv-navbar">
        <i className="fa fa-bars wbdv-field wbdv-hamburger col-0"
    aria-hidden="true"/>
        <div className="wbdv-label wbdv-course-manager d-none d-sm-block">
          Course Manager
        </div>
        <label htmlFor="newCourseFld"/>
        <input className="form-control wbdv-field wbdv-new-course col-8"
               type="text"
               placeholder="New Course Title" id="newCourseFld"/>
        <i className="fa fa-plus pull-right fa-2x wbdv-button wbdv-add-course
wbdv-sticky-add-course" aria-hidden="true"
        onClick={() => this.props.addCourse("New Course Template")}/>
        <i className="fa fa-plus-circle pull-right fa-2x wbdv-button wbdv-add-course"
    aria-hidden="true"
           onClick={() => {
             this.props.addCourse(document.getElementById("newCourseFld").value)
             document.getElementById("newCourseFld").value = ''
           }
           }/>
      </nav>
    )
  }
}

export default CourseManagerNavComponent
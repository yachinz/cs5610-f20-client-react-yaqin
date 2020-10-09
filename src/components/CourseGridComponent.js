import React from "react";
import CourseCardComponent from "./CourseCardComponent";
import './CourseGridComponent.css'

class CourseGridComponent extends React.Component{
  render() {
    return (
        <div className={'container'}>
        <div className={'row'}>
          <div className={'col-4'}>
            Title
          </div>
          <div className={'col-4 text-right'}>
            Owned by me
          </div>
          <div className={'col-4 wbdv-icon-toggle'}>
            <i className="fa fa-sort-alpha-asc wbdv-header wbdv-sort"
                                      aria-hidden="true"/>
                          <i className="fa fa-th wbdv-button wbdv-grid-layout"
                                   aria-hidden="true" onClick={() => this.props.changeView()}/>


          </div>
        </div>
        <div className={'row'}>
          {
            this.props.courses.map(course =>
                <CourseCardComponent
                    deleteCourse={this.props.deleteCourse}
                    updateCourse={this.props.updateCourse}
                    course={course}
                    key={course._id}/>
            )
          }
        </div>
        </div>
    )
}}

export default CourseGridComponent
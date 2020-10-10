import React from "react";
import CourseRowComponent from "./CourseRowComponent";
import './CourseTableComponent.css'

class CourseTableComponent extends React.Component{
  state={
    selectedCourse: ''
  }

  selectACourse =(course) => {
    this.setState({
      selectedCourse: course._id,
    })
  }

  render() {
    return (
        <table className="table container wbdv-course-table table-hover">
          <thead>
          <tr>
            <th className="wbdv-header wbdv-title">Title</th>
            <th className="wbdv-header wbdv-owner d-none d-sm-table-cell">Owner</th>
            <th className="wbdv-header wbdv-last-modified d-none d-md-table-cell">Last Modified</th>
            <th className="wbdv-header">
              <i className="fa fa-sort-alpha-asc fa-pull-right wbdv-header wbdv-sort"
                 aria-hidden="true"/>
              <i className="fa fa-th-list fa-pull-right wbdv-button wbdv-list-layout"
                 aria-hidden="true" onClick={() => this.props.changeView()}/>
            </th>
          </tr>
          </thead>
          <tbody>
          {
            this.props.courses.map(course =>
                <CourseRowComponent
                    deleteCourse={this.props.deleteCourse}
                    updateCourse={this.props.updateCourse}
                    course={course}
                    key={course._id}
                selected={this.state.selectedCourse}
                selectACourse={this.selectACourse}/>
            )
          }
          </tbody>
        </table>

    );
  }
}

export default CourseTableComponent
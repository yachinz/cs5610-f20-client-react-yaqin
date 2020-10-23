import React from "react";
import './CourseManagerComponent.css'
import CourseManagerNavComponent from "./CourseManagerNavComponent";
import {findAllCourses, updateCourse, deleteCourse, createCourse} from "../services/CourseService";
import CourseTableComponent from "./CourseTableComponent";
import CourseGridComponent from "./CourseGridComponent";
import {Route} from "react-router-dom";

class CourseManagerComponent extends React.Component {

  state = {
    courses: [],
    tableView: true,
  }

  componentDidMount() {
    findAllCourses()
      .then(courses => {
        this.setState({
            courses: courses
          })
      })
  }


  deleteCourse = (course) => {
    deleteCourse(course._id)
      .then(status =>
      console.log(status),
          this.setState(prevState =>({
          courses: prevState.courses.filter(c => c._id !== course._id)
        })
      ))
      .catch(error => {
        console.log(error)
      })
  }

  addCourse = (newCourseName) => {
    const newCourse = {
      title: newCourseName,
      owner: "me",
      modified: (new Date()).toDateString()
    }

    createCourse(newCourse)
      .then(actualCourse => this.setState(prevState => ({
        courses: [
          ...prevState.courses, actualCourse
        ]
      })))
  }

  editCourse = (course) => {
    updateCourse(course._id, course).then(status=> {
      console.log(status)
      this.setState({
        courses: this.state.courses.map(c => {
          if(c._id === course._id) {
            return {
              ...c,
              title: course.title
            }
          } else {
            return {...c}
          }
        })
      },)
    })

  }

  // toggleView = () => {
  //   this.setState({
  //     tableView: !this.state.tableView
  //   })
  // }


  render() {
    return (
      <div className={'wbdv-course-manager-body'}>
        <CourseManagerNavComponent
        addCourse={this.addCourse}/>
           <Route path="/courses/table" exact>
              <CourseTableComponent
              deleteCourse={this.deleteCourse}
              updateCourse={this.editCourse}
              courses={this.state.courses}/>
          </Route>
          <Route path="/courses/grid" exact>
            <CourseGridComponent
                deleteCourse={this.deleteCourse}
                updateCourse={this.editCourse}
                courses={this.state.courses}/>
          </Route>
      </div>
    );
  }
}

export default CourseManagerComponent

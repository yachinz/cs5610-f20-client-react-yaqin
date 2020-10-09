import React from "react";
import {findCourseById} from "../services/CourseService";
import {Link} from "react-router-dom";
import LessonTabsComponent from "./LessonTabsComponent";
import './CourseEditorStyle.css'
import ModuleListComponent from "./ModuleListComponent";
import TopicPillsComponent from "./TopicPillsComponent";
import WidgetListComponent from "./WidgetListComponent";

export default class CourseEditorComponent extends React.Component {

  state = {
    course: {
      // _id: "",
      // title: ""
    }
  }

  componentDidMount() {
    console.log(this.props)
    findCourseById(this.props.match.params.courseId)
      .then(actualCourse => this.setState({
        course: actualCourse
      }))
  }

  render() {
    return(
      <div className={'wbdv-course-editor-body'}>
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark sticky-top">
          <Link to="/courses"><i className="fa fa-times wbdv-course-editor wbdv-close"/></Link>

          <div className="wbdv-course-title">{this.state.course.title}</div>
          <LessonTabsComponent/>
        </nav>

        <div className={'container-fluid'}>
          <div className={'row fillscreen'}>
            <ModuleListComponent/>
            <div className={'col-sm-9 right-field'}>
            <TopicPillsComponent/>
            <WidgetListComponent/>
          </div>
          </div>

        </div>
      </div>
    )
  }
}

import React from "react";
import {Link} from "react-router-dom";
import NavTabsComponent from "./NavTabsComponent";
import './CourseEditorStyle.css'
import ModuleListComponent from "./ModuleListComponent";
import TopicPillsComponent from "./TopicPillsComponent";
import WidgetListComponent from "./WidgetListComponent";

import {findCourseById} from "../services/CourseService";
import {connect} from "react-redux";
import LessonTabsComponent from "./LessonTabsComponent";
import
{resetEditingModule,
  findModulesForCourse,
  resetSelectedModule,}
from "../actions/moduleActions"
import {
  findLessonsForModule,
  resetSelectedLesson,
} from "../actions/lessonActions"
import {findTopicsForLesson} from "../actions/topicActions"



class CourseEditorComponent extends React.Component {

  componentDidMount() {
    const courseId = this.props.match.params.courseId
    this.props.findCourseById(courseId)
    this.props.findModulesForCourse(courseId)
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (this.props.selectedModuleID !== prevProps.selectedModuleID &&
        this.props.selectedModuleID !== "") {
      this.props.findLessonsForModule(this.props.selectedModuleID);
      this.props.resetSelectedLessonID();
    }
    if (this.props.selectedLessonID !== prevProps.selectedLessonID &&
        this.props.selectedLessonID !== "") {
      this.props.findTopicsForLesson(this.props.selectedLessonID)
    }
  }

  render() {
    return(
      <div className={'wbdv-course-editor-body'}>
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark sticky-top">
          <Link to="/courses/table" onClick={() => {
            this.props.resetSelectedModuleID();
            this.props.resetSelectedLessonID();
            this.props.resetEditingModule();
          }}><i className="fa fa-times wbdv-course-editor wbdv-close"/></Link>

          <div className="wbdv-course-title">{this.props.course.title}</div>
          <NavTabsComponent/>
        </nav>

        <div className={'container-fluid'}>
          <div className={'row fillscreen'}>
            <ModuleListComponent/>
            <div className={'col-sm-9 right-field'}>
              <LessonTabsComponent/>
              <TopicPillsComponent/>
              <WidgetListComponent/>
          </div>
          </div>

        </div>
      </div>
    )
  }
}


const stateToPropertyMapper = (state) => ({
  course: state.courseReducer.course,
  selectedModuleID : state.moduleReducer.selectingID,
  selectedLessonID : state.lessonReducer.selectingID,
  selectedTopicID: state.topicReducer.selectingID,
})

const propertyToDispatchMapper = (dispatch) => ({
  resetEditingModule: () => resetEditingModule(dispatch),

  findCourseById: (courseId) => findCourseById(courseId)
  .then(actualCourse => dispatch({
    type: "SET_COURSES",
    course: actualCourse
  })),

  findModulesForCourse: (courseId) => findModulesForCourse(dispatch, courseId),

  findLessonsForModule: (moduleId) => findLessonsForModule(dispatch, moduleId),

  resetSelectedModuleID : () => resetSelectedModule(dispatch),

  resetSelectedLessonID : () => resetSelectedLesson(dispatch),
  findTopicsForLesson: (lessonId) => findTopicsForLesson(dispatch, lessonId)
})

export default connect
(stateToPropertyMapper, propertyToDispatchMapper)
(CourseEditorComponent)


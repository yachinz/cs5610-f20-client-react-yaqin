import React from "react";
import {Link} from "react-router-dom";
import NavTabsComponent from "./NavTabsComponent";
import './CourseEditorStyle.css'
import ModuleListComponent from "./ModuleListComponent";
import TopicPillsComponent from "./TopicPillsComponent";
import WidgetListsComponent from "./WidgetListsComponent";

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
import {findWidgetsForTopic} from "../services/WidgetService"



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
    if (this.props.selectedTopicID !== prevProps.selectedTopicID &&
        this.props.selectedTopicID !== "empty") {
      this.props.findWidgetsForTopic(this.props.selectedTopicID)
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
            this.props.resetSelectedTopicId();
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
              <WidgetListsComponent/>
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

  resetSelectedTopicId: () => dispatch({
    type:"RESET_SELECTED_TOPIC",
  }),

  resetSelectedLessonID : () => resetSelectedLesson(dispatch),
  findTopicsForLesson: (lessonId) => findTopicsForLesson(dispatch, lessonId),

  findWidgetsForTopic: (topicId)=> {
    findWidgetsForTopic(topicId).then(widgets => {
      dispatch({
        type: "GET_WIDGETS_FOR_TOPIC",
        widgets: widgets.sort((a, b) => a.widgetOrder - b.widgetOrder)
      })
    })
  }
})

export default connect
(stateToPropertyMapper, propertyToDispatchMapper)
(CourseEditorComponent)


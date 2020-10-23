import React from "react";
import {connect} from "react-redux";
import './CourseEditorStyle.css'
import {
  resetSelectedLesson,
    resetEditingTopicID,
    selectALesson,
    editing,
    edit,
    updateLesson,
    deleteLesson,
    createLessonForModule,
} from "../actions/lessonActions"
import {resetSelectedTopic} from "../actions/topicActions";

const LessonTabsComponent = (
    {
      moduleID,
      lessons = [],
      editingID = "",
      selectingLessonID = "",
      selectingModuleID = "",
      resetEditingTopicID,
      selectALesson,
      createLessonForModule,
      deleteLesson,
      updateLesson,
      resetSelectedTopic,
      resetSelectedLesson,
      edit,
      editing
    }) =>
    <div className={"row"}>
      <ul className="nav nav-tabs">
        {
          (selectingModuleID !== "") && lessons.map(lesson =>
              <li key={lesson._id} className={
                selectingLessonID === lesson._id ? "nav-item wbdv-lesson-item-active" :
                "nav-item wbdv-lesson-item"}>
                <a className={"nav-link"}>
                  {
                    (editingID !== lesson._id) &&
                    <span onClick={() =>
                  {
                    if(lesson._id !== selectingLessonID) {
                    selectALesson(lesson);
                    resetEditingTopicID();
                  }
                    resetSelectedTopic()
                  }}>
                      {lesson.title}

                <i className="fa fa-pencil fa-pull-right" onClick={() =>
                    edit(lesson)
                }/>

                  </span>
                  }

                  {
                    (editingID === lesson._id) &&
                    <span>
                      <input
                          onChange={(event) =>
                              editing({
                                ...lesson,
                                title: event.target.value
                              })}
                          value={lesson.title}/>
                        <i className="fa fa-check fa-pull-right" onClick={() =>
                            updateLesson(lesson)}/>
                        <i className="fa fa-trash fa-pull-right" onClick={() =>
                        {deleteLesson(lesson._id);
                          resetSelectedLesson();
                          resetSelectedTopic()}

                        }/>



                  </span>
                  }
                </a>
              </li>
          )
        }

        {
          (selectingModuleID !== "") &&
          <i className={"fa fa-plus fa-2x pull-right"}
             onClick={() => createLessonForModule(moduleID)}/>
        }

      </ul>

    </div>

const stateToPropertyMapper = (state) => ({
  lessons: state.lessonReducer.lessons,
  editingID: state.lessonReducer.editingID,
  selectingLessonID: state.lessonReducer.selectingID,
  selectingModuleID: state.moduleReducer.selectingID,
  moduleID: state.lessonReducer.moduleId,
  courseID: state.courseReducer.course._id
})

const dispatchToPropertyMapper = (dispatch) => ({
  resetEditingTopicID: () => resetEditingTopicID(dispatch),

  selectALesson: (lesson) => selectALesson(dispatch, lesson),

  edit: (lesson) => edit(dispatch, lesson),

  editing: (lesson) => editing(dispatch, lesson),

  updateLesson: (newLesson) => updateLesson(dispatch, newLesson),

  deleteLesson: (lessonId) => deleteLesson(dispatch, lessonId),

  createLessonForModule: (moduleId) => createLessonForModule(dispatch, moduleId),

  resetSelectedTopic: () => resetSelectedTopic(dispatch),

  resetSelectedLesson: () => resetSelectedLesson(dispatch),
})

export default connect
(stateToPropertyMapper,
    dispatchToPropertyMapper)
(LessonTabsComponent)
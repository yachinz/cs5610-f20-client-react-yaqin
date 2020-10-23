import React from "react";
import './CourseEditorStyle.css'
import {connect} from "react-redux";
import {
  selectATopic,
    edit,
    editing,
    updateTopic,
    deleteTopic,
    createTopicForLesson
} from "../actions/topicActions"

const TopicPillsComponent = (
    {
      lessonID = "",
      topics = [],
      editingID = "",
      selectingTopicID = "",
      createTopicForLesson,
      deleteTopic,
      updateTopic,
      selectATopic,
      edit,
      editing
    })=>
    <div className="wbdv-row-topic row">
      {
        (lessonID !== "") && <ul className="nav nav-pills wbdv-topic-pill-list">
          {
            topics.map(
                topic =>
                <li key={topic._id} className= "nav-item"
                    onClick={() =>
                    selectATopic(topic)
                    }>
              <span>
                <a className={
                topic._id !== selectingTopicID ?
                    "nav-link wbdv-topic-pill" : "nav-link wbdv-topic-pill-active"
                }>
                  {
                    (editingID !== topic._id) && <span>
                    {topic.title}
                      <i className="fa fa-pencil" onClick={() =>
                          edit(topic)
                      }/>
                  </span>
                  }

                  {
                    (editingID === topic._id) && <span>
                      <input
                          onChange={(event) =>
                              editing({
                                ...topic,
                                title: event.target.value
                              })}
                          value={topic.title}/>
                          <i className="fa fa-check fa-pull-right" onClick={() =>
                              updateTopic(topic)}/>
                        <i className="fa fa-trash fa-pull-right"
                           onClick={() =>
                        {deleteTopic(topic._id);
                        }
                        }/>

                    </span>
                  }
                </a>
              </span>

                </li>
            )
          }

            <i className="fa fa-plus fa-2x fa-pull-right wbdv-pills-plus" aria-hidden="true"
               onClick={() => createTopicForLesson(lessonID)}/>
        </ul>

      }


    </div>

const stateToPropertyMapper = (state) => ({
  topics: state.topicReducer.topics,
  editingID: state.topicReducer.editingID,
  selectingTopicID: state.topicReducer.selectingID,
  lessonID: state.lessonReducer.selectingID
})


const dispatchToPropertyMapper = (dispatch) => ({
  selectATopic: (topic) => selectATopic(dispatch, topic),

  edit: (topic) => edit(dispatch, topic),

  editing: (topic) => editing(dispatch, topic),

  updateTopic: (newTopic) => updateTopic(dispatch, newTopic),

  deleteTopic: (topicId) => deleteTopic(dispatch, topicId),

  createTopicForLesson: (lessonID) => createTopicForLesson(dispatch, lessonID),

})


export default connect
(stateToPropertyMapper,
    dispatchToPropertyMapper)
(TopicPillsComponent)
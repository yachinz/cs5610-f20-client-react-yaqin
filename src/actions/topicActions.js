import topicService from "../services/TopicService";

export const RESET_SELECTED_TOPIC = "RESET_SELECTED_TOPIC"
export const SELECTED_TOPIC = "SELECTED_TOPIC"
export const EDIT_TOPIC = "EDIT_TOPIC"
export const EDITING_TOPIC = "EDITING_TOPIC"
export const UPDATE_TOPIC = "UPDATE_TOPIC"
export const DELETE_TOPIC = "DELETE_TOPIC"
export const CREATE_TOPIC_FOR_LESSON = "CREATE_TOPIC_FOR_LESSON"
export const FIND_TOPICS_FOR_LESSON = "FIND_TOPICS_FOR_LESSON"
export const RESET_TOPICS_ARR = "RESET_TOPICS_ARR"

export const resetTopicsArr = (dispatch) =>
    dispatch({
      type: "RESET_TOPICS_ARR"
    })

export const findTopicsForLesson = (dispatch, lessonId) =>
    topicService.findTopicsForLesson(lessonId)
    .then(topics => dispatch({
      type: "FIND_TOPICS_FOR_LESSON",
      topics,
      lessonId
    }))

export const resetSelectedTopic = (dispatch) =>
    dispatch({type: RESET_SELECTED_TOPIC})

export const selectATopic = (dispatch, topic) => dispatch({
  type: "SELECTED_TOPIC",
  topicID: topic._id
})

export const edit = (dispatch, topic) => dispatch({
  type: "EDIT_TOPIC",
  topic
})

export const editing = (dispatch, topic) => dispatch({
  type: "EDITING_TOPIC",
  topic
})
export const updateTopic = (dispatch, newTopic) =>
    topicService.updateTopic(newTopic)
    .then(actualTopic => dispatch({
      type: "UPDATE_TOPIC",
      topic: actualTopic
    }))

export const deleteTopic = (dispatch, topicId) =>
    topicService.deleteTopic(topicId)
    .then(status => dispatch({
      type: "DELETE_TOPIC",
      topicId
    }))

export const createTopicForLesson = (dispatch, lessonID) =>
    topicService.createTopic(
        lessonID, {
          title: "New topic",
        })
    .then(actualTopic => dispatch({
      type: "CREATE_TOPIC_FOR_LESSON",
      topic: actualTopic
    }))
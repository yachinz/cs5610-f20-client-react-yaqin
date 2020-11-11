const initialState = {
  topics: [],
  selectingID: "empty",
  editingID: "",
  lessonID: ""
}

const topicReducer = (state=initialState, action) => {
  switch (action.type) {
    case "RESET_TOPICS_ARR":
      return {
        ...state,
        topics: []
      }

    case "RESET_TOPIC_EDITING_ID":
      return {
        ...state,
        editingID: ""
      }
    case "RESET_SELECTED_TOPIC":
      return {
        ...state,
        selectingID: "empty"
      }

    case "SELECTED_TOPIC":
      return {
        ...state,
        selectingID: action.topicID
      }
    case "EDIT_TOPIC":
      return {
        ...state,
        editingID: action.topic._id
      }

    case "EDITING_TOPIC":
      return {
        ...state,
        topics: state.topics.map(topic => topic._id === action.topic._id?action.topic : topic)
      }

    case "UPDATE_TOPIC":
      return {
        ...state,
        topics: state.topics.map(topic => topic._id === action.topic._id?action.topic : topic),
        editingID: ""
      }
    case "DELETE_TOPIC":
      return {
        ...state,
        topics: state.topics.filter(topic => topic._id !== action.topicId)
      }

    case "FIND_TOPICS_FOR_LESSON":
      return {
        ...state,
        topics: action.topics,
        lessonID: action.lessonId
      }

    case "CREATE_TOPIC_FOR_LESSON":
      return {
        ...state,
        topics: [
          ...state.topics,
          action.topic
        ]
      }
    default:
      return state
  }
}

export default topicReducer
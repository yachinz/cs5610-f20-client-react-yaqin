const initialState = {
  lessons: [],
  selectingID: "",
  editingID: "",
}

const lessonReducer = (state=initialState, action) => {
  switch (action.type) {
    case "RESET_SELECTED_LESSON":
      return {
        ...state,
        selectingID: ""
      }

    case "SELECTED_LESSON":
      return {
        ...state,
        selectingID: action.lessonID
      }

    case "EDIT_LESSON":
      return {
        ...state,
        editingID: action.lesson._id
      }

    case "EDITING_LESSON":
      return {
        ...state,
        lessons: state.lessons.map(lesson => lesson._id === action.lesson._id?action.lesson : lesson)
      }

    case "UPDATE_LESSON":
      return {
        ...state,
        lessons: state.lessons.map(lesson => lesson._id === action.lesson._id?action.lesson : lesson),
        editingID: ""
      }
    case "DELETE_LESSON":
      return {
        ...state,
        lessons: state.lessons.filter(lesson => lesson._id !== action.lessonId),
        selectingID: action.lessonId === state.selectingID ? "" : ""
      }

    case "FIND_LESSONS_FOR_MODULE":
      return {
        ...state,
        lessons: action.lessons,
        moduleId: action.moduleId
      }

    case "CREATE_LESSON_FOR_MODULE":
      return {
        ...state,
        lessons: [
          ...state.lessons,
          action.lesson
        ]
      }
    default:
      return state
  }
}

export default lessonReducer
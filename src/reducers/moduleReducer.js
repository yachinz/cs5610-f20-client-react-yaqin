const initialState = {
  modules: [],
  selectingID: "",
  editingID: "",
}

const moduleReducer = (state=initialState, action) => {
  switch (action.type) {
    case "RESET_EDITING_MODULE":
      return {
        ...state,
        editingID: ""
      }

    case "RESET_SELECTED_MODULE":
      return {
        ...state,
        selectingID: ""
      }
    case "SELECT_MODULE":
      return {
        ...state,
        selectingID: action.moduleID
      }

    case "FIND_MODULES_FOR_COURSE":
      return {
        ...state,
        modules: action.modules
      }

    case "DELETE_MODULE":
      return {
        ...state,
        modules: state.modules.filter(module => module._id !== action.module._id)
      }

    case "EDIT_MODULE":
      return {
        ...state,
        editingID: action.editID,
      }

    case "CREATE_MODULE":
      return {
        ...state,
        modules: [
          ...state.modules,
          action.module
        ]
      }

    case "EDITING_MODULE":
      return {
        ...state,
        modules: state.modules.map(module => module._id === action.module._id ? action.module : module),
      }

    case "UPDATE_MODULE":
      return {
        ...state,
        modules: state.modules.map(module => module._id === action.module._id ? action.module : module),
        editingID: ""
      }
    default:
      return state
  }
}

export default moduleReducer
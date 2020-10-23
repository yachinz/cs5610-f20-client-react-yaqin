import moduleService from "../services/ModuleService";

export const SELECT_MODULE = "SELECT_MODULE"
export const UPDATE_MODULE = "UPDATE_MODULE"
export const EDIT_MODULE = "EDIT_MODULE"
export const EDITING_MODULE = "EDITING_MODULE"
export const DELETE_MODULE = "DELETE_MODULE"
export const CREATE_MODULE = "CREATE_MODULE"
export const RESET_SELECTED_MODULE = "RESET_SELECTED_MODULE"
export const RESET_EDITING_MODULE = "RESET_EDITING_MODULE"
export const FIND_MODULES_FOR_COURSE = "FIND_MODULES_FOR_COURSE"

export const findModulesForCourse = (dispatch, courseId) =>
    moduleService.findModulesForCourse(courseId)
    .then(actualModules => dispatch({
      type: "FIND_MODULES_FOR_COURSE",
      modules: actualModules
    }))

export const resetEditingModule = (dispatch) =>
    dispatch({
      type: RESET_EDITING_MODULE
    })


export const selectModule = (dispatch, module) =>
        dispatch({
  type: SELECT_MODULE,
  moduleID: module._id
})

export const updateModule = (dispatch, module) =>
    moduleService.updateModule(module._id, module).then(status =>
    dispatch({
      type: UPDATE_MODULE,
      module: module
    }))

export const edit = (dispatch, module) =>
        dispatch({type: EDIT_MODULE, editID: module._id
})

export const editing = (dispatch, module) =>
    dispatch({type: EDITING_MODULE, module: module})

export const deleteModule = (dispatch, module) =>
    moduleService.deleteModule(module._id)
    .then(status =>
    dispatch({type: DELETE_MODULE, module: module}))

export const createModule = (dispatch, course) =>
    moduleService.createModuleForCourse(course._id, {
      title: "New Module"
    }).then(actualModule => dispatch({
      type: "CREATE_MODULE",
      module: actualModule
    }))

export const resetSelectedModule = (dispatch) =>
    dispatch({type: RESET_SELECTED_MODULE})




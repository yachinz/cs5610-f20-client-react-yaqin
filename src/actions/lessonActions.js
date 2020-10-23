import lessonService from "../services/LessonService";

export const RESET_SELECTED_LESSON = "RESET_SELECTED_LESSON"
export const RESET_TOPIC_EDITING_ID = "RESET_TOPIC_EDITING_ID"
export const SELECTED_LESSON = "SELECTED_LESSON"
export const EDIT_LESSON = "EDIT_LESSON"
export const EDITING_LESSON = "EDITING_LESSON"
export const UPDATE_LESSON = "UPDATE_LESSON"
export const DELETE_LESSON = "DELETE_LESSON"
export const CREATE_LESSON_FOR_MODULE = "CREATE_LESSON_FOR_MODULE"
export const FIND_LESSONS_FOR_MODULE = "FIND_LESSONS_FOR_MODULE"

export const resetSelectedLesson = (dispatch) =>
    dispatch({type: RESET_SELECTED_LESSON})

export const findLessonsForModule = (dispatch, moduleId) =>
    lessonService.findLessonsForModule(moduleId)
    .then(lessons => dispatch({
      type: "FIND_LESSONS_FOR_MODULE",
      lessons,
      moduleId
    }))

export const resetEditingTopicID = (dispatch) => dispatch({
  type: RESET_TOPIC_EDITING_ID
})

export const selectALesson = (dispatch, lesson) =>
    dispatch({type: "SELECTED_LESSON", lessonID: lesson._id})

export const edit = (dispatch, lesson) =>
        dispatch({type: "EDIT_LESSON", lesson: lesson
})

export const editing = (dispatch, lesson) =>
    dispatch({type: "EDITING_LESSON", lesson: lesson})

export const updateLesson = (dispatch, newLesson) =>
    lessonService.updateLesson(newLesson)
    .then(actualLesson => dispatch({type: "UPDATE_LESSON", lesson: actualLesson}))

export const deleteLesson = (dispatch, lessonId) =>
    lessonService.deleteLesson(lessonId)
    .then(status => dispatch({
      type: "DELETE_LESSON",
      lessonId
    }))

export const createLessonForModule = (dispatch, moduleId) =>
    lessonService.createLessonForModule(
        moduleId, {
          title: "New Lesson"
        })
    .then(actualLesson => dispatch({
      type: "CREATE_LESSON_FOR_MODULE",
      lesson: actualLesson
    }))
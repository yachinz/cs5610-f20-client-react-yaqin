
export const EDITING_WIDGETS = "EDITING_WIDGETS"
export const PREVIEW_ALL_WIDGETS = "PREVIEW_ALL_WIDGETS"
export const DELETE_NEW_WIDGET = "DELETE_NEW_WIDGET"
export const DELETE_OLD_WIDGET = "DELETE_OLD_WIDGET"
export const CREATE_WIDGETS_FOR_TOPIC = "CREATE_WIDGETS_FOR_TOPIC"
export const WIDGET_UP = "WIDGET_UP"
export const WIDGET_DOWN = "WIDGET_DOWN"


export const editingWidget = (widget, dispatch) => {
  dispatch({
    type: EDITING_WIDGETS,
    widget
  })
}

export const previewMode = (dispatch) => {
  dispatch({
    type: PREVIEW_ALL_WIDGETS
  })
}

export const deleteNewWidget = (id, dispatch) => {
  dispatch({
    type: DELETE_NEW_WIDGET,
    id
  })

}

export const deleteOldWidget = (id, dispatch) => {
  dispatch({
    type: DELETE_OLD_WIDGET,
    id
  })
}

export const addNewWidget = (topicId, dummyId, order, dispatch) =>{
  dispatch({
    type: CREATE_WIDGETS_FOR_TOPIC,
    widget: {
      "name": "new Widget",
      "id": dummyId,
      "type": "HEADING",
      "widgetOrder": order,
      "text": "new heading",
      "size": "3",
      "topicId": topicId,
    }
  })
}


export const widgetUp = (order, up, down, dispatch) => {
  dispatch({
    type: WIDGET_UP,
    order,
    up,
    down
  })
}

export const widgetDown = (order, up, down, dispatch) => {
  dispatch({
    type: WIDGET_DOWN,
    order,
    up,
    down
  })
}
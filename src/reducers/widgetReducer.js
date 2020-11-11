const initialState = {
  widgets: [
    {
      "name": "test1",
      "id": "Widget_123456789012343",
      "type": "HEADING",
      "widgetOrder": 0,
      "text": "this is a heading",
      "size": "1",
      "topicId": "topic1"
    },
    {
      "name": "test2",
      "id": "Widget_23434235465768",
      "type": "PARAGRAPH",
      "widgetOrder": 1,
      "text": "this is a paragraph",
      "size": "-1",
      "topicId": "topic1"
    }
  ],
  deleteOldWidgets: [],
  newWidgets: [],
  editing: true,
  dummyID: 1
}

const widgetReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_WIDGETS_FOR_TOPIC":
      return {
        ...state,
        widgets: action.widgets
      }

    case "CREATE_WIDGETS_FOR_TOPIC":
      return {
        ...state,
        widgets:[...state.widgets, action.widget],
        newWidgets: [...state.newWidgets, action.widget.id],
        dummyID: state.dummyID + 1
      }
    case "RESET_WIDGETS":
      return {
        ...state,
        widgets: []
      }
    case "EDITING_WIDGETS":
      return {
        ...state,
        widgets: state.widgets.map(
            widget => widget.id === action.widget.id ? action.widget : widget)
      }

    case "PREVIEW_ALL_WIDGETS":
      return {
        ...state,
        editing: !state.editing
      }

    case "DELETE_NEW_WIDGET":
      return {
        ...state,
        widgets: state.widgets.filter(widget => widget.id !== action.id),
        newWidgets: state.newWidgets.filter(id => id !== action.id)
      }

    case "DELETE_OLD_WIDGET":
      return {
        ...state,
        widgets: state.widgets.filter(widget => widget.id !== action.id),
        deleteOldWidgets: [...state.deleteOldWidgets, action.id]
      }

    case "WIDGET_UP":
      return {
        ...state,
        widgets: state.widgets.map(
            widget => {
              if (widget.widgetOrder === action.order - 1) {
                return {
                  ...action.up,
                  widgetOrder: widget.widgetOrder
                }
              } else if (widget.widgetOrder === action.order) {
                return {
                  ...action.down,
                  widgetOrder: widget.widgetOrder
                }
              } else {return widget}
            }
        )
      }

    case "WIDGET_DOWN":
      return  {
        ...state,
        widgets: state.widgets.map(
            widget => {
              if (widget.widgetOrder === action.order + 1) {
                return {
                  ...action.down,
                  widgetOrder: widget.widgetOrder
                }
              } else if (widget.widgetOrder === action.order) {
                return {
                  ...action.up,
                  widgetOrder: widget.widgetOrder
                }
              } else {return widget}
            }
        )
      }

    default:
      return state
  }
}

export default widgetReducer
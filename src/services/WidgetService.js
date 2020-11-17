const widgetUrl = "http://localhost:8080/api/widgets"
const topicUrl = "http://localhost:8080/api/topics"


export const findWidgetsForTopic = (topicId) =>
    fetch(`${topicUrl}/${topicId}/widgets`)
    .then(response => response.json())

export const createWidgets = (widget) =>
    fetch(`${widgetUrl}`, {
      method: "POST",
      body: JSON.stringify(widget),
      headers: {
        "content-type": "application/json"
      }
    }).then(response => response.json())

export const updateWidget = (widget) =>
    fetch(`${widgetUrl}/${widget.id}`, {
      method: "PUT",
      body: JSON.stringify(widget),
      headers: {
        "content-type": "application/json"
      }
    }).then(response => response.json())


export const deleteWidget = widgetId =>
    fetch(`${widgetUrl}/${widgetId}`,{
      method: "DELETE"
    }).then(response => response.json())


export default {
  findWidgetsForTopic,
  createWidgets,
  updateWidget,
  deleteWidget
}
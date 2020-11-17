import React from "react";
import './CourseEditorStyle.css'
import {connect} from "react-redux";
import {deleteWidget,
  createWidgets,
updateWidget,} from "../services/WidgetService";
import {
  editingWidget,
previewMode,
deleteNewWidget,
deleteOldWidget,
addNewWidget,
widgetUp,
widgetDown} from "../actions/widgetActions"

const WidgetListsComponent = (
    { selectingTopicID = "empty",
      widgets = [],
      editingWidget,
      editing,
    previewMode,
      deleteNewWidget,
      deleteOldWidget,
      addNewWidget,
      dummyID,
      widgetUp,
      widgetDown,
      newWidgets,
      deleteOldWidgets}
) =>
    <div>
      {(selectingTopicID !== "empty") && <div className="row preview-save">
        <div className="col text-right">
          {editing &&
            <i className="fa fa-toggle-off float-right wbdv-toggle" aria-hidden="true" id={"previewOff"} onClick={
              () => previewMode()
            }/>
          }
          {editing && <label htmlFor={"previewOff"} className={"float-right"}> preview</label>}
          {!editing && <i className="fa fa-toggle-on float-right wbdv-toggle" id={"previewOn"} aria-hidden="true" onClick={
            () => previewMode()
          }/>}
          {!editing && <label htmlFor={"previewOn"} className={"float-right"}> preview</label>}
          <div className="btn btn-success btn-sm widget-save float-right" onClick={
            () => {
              let i;
              for (i = 0; i < deleteOldWidgets.length; i++) {
                deleteWidget(deleteOldWidgets[i]);
              }
              let j;
              for (j = 0; j < widgets.length; j++) {
                if (newWidgets.includes(widgets[j].id)) {
                  createWidgets(widgets[j]);
                } else {
                  updateWidget(widgets[j]);
                }
              }
            }
          }>save</div>

      </div>
      </div>}
      {
         <ul> {
           (selectingTopicID !== "empty") &&
          widgets.map(
              widget => {
                if (widget.type === "HEADING") return <li key={widget.id} className={"list-group-item"}>
                  <div className="content-box heading-widget wbdv-widget">
                    {editing &&
                    <div className="row">
                      <div className="col">
                        <h3>Heading widget</h3>
                      </div>
                      <div className="col text-right">
                        {widget.widgetOrder !== 0 &&
                        <div className="btn btn-warning btn-sm wbdv-btn-up"
                             onClick = {
                               () => {
                                 const down = widgets.filter(w => w.widgetOrder === widget.widgetOrder - 1);
                                 widgetUp(widget.widgetOrder, widget, down[0])
                               }
                             }>
                          <i className="fa fa-arrow-up" aria-hidden="true"/>
                        </div>
                        }

                        {widget.widgetOrder !== widgets.length - 1 &&
                        <div className="btn btn-warning btn-sm wbdv-btn-down"
                             onClick={
                               () => {
                                 const up = widgets.filter(w => w.widgetOrder === widget.widgetOrder + 1);
                                 widgetDown(widget.widgetOrder, up[0], widget)}
                             }>
                          <i className="fa fa-arrow-down" aria-hidden="true"/>
                        </div>
                        }
                        <label>
                          <select
                              className="form heading-widget-dropdown widget-dropdown"
                              value={widget.type}
                          onChange={event => {
                            if (event.target.value === "PARAGRAPH") {
                              editingWidget(
                                  {
                                    ...widget,
                                    "type": "PARAGRAPH",
                                    "text": "this is a paragraph",
                                  }
                              )
                            } else if (event.target.value === "LIST") {
                              editingWidget(
                                  {
                                    ...widget,
                                    "type": "LIST",
                                    "text": "sample list",
                                    "listOrder": "0",
                                  }
                              )
                            } else {
                              editingWidget(
                                  {
                                    ...widget,
                                    "type": "IMAGE",
                                    "src": "https://picsum.photos/300/200",
                                    "text": ""
                                  }
                              )
                            }

                          }}>
                            <option value="HEADING">heading</option>
                            <option value="PARAGRAPH">paragraph</option>
                            <option value="LIST">list</option>
                            <option value="IMAGE">image</option>
                          </select>
                        </label>
                        <button type="button" className="btn btn-danger btn-sm wbdv-btn-delete" onClick={
                          () => {
                            // The widgets need to change order number.
                            const wLst = widgets.filter(wid => wid.widgetOrder > widget.widgetOrder);
                            let i = 0;
                            while (i < wLst.length) {
                              const w = wLst[i];
                              editingWidget({
                                ...w,
                                widgetOrder: w.widgetOrder - 1,
                              })
                              i++;
                            }
                            if (widget.id < 0) {
                              deleteNewWidget(widget.id)
                            } else {
                              deleteOldWidget(widget.id)
                            }
                          }
                        }>
                          <i className="fa fa-times wbdv-module-item-delete-btn"/>
                        </button>
                      </div>
                    </div>
                    }

                    {editing && <div className="row form-group">
                      <label htmlFor="widget-heading-text"/>
                      <input className="form-control"
                             value= {widget.text}
                             onChange = {event => editingWidget({
                               ...widget,
                               text: event.target.value
                             })
                             }
                      />
                    </div>}

                    {editing &&
                    <div className="row form-group">
                      <label htmlFor="widget-heading-select"/>
                      <select className="form-control" onChange={(event) =>
                          editingWidget({
                            ...widget,
                            size: event.target.value
                          })} value= {widget.size}>
                        <option value="1">heading1</option>
                        <option value="2">heading2</option>
                        <option value="3">heading3</option>
                      </select>
                    </div>
                    }


                    {editing &&
                    <div className="row form-group">
                      <input className="form-control" placeholder={"Widget name"}
                             value= {widget.name} onChange = {event => editingWidget({
                        ...widget,
                        name: event.target.value
                      })
                      }/>
                    </div>
                    }

                    <div>

                      {editing &&
                      <h3>
                        Preview
                      </h3>
                      }
                      {
                        widget.size === "1" && <h1>
                          {widget.text}
                        </h1>
                      }
                      {
                        widget.size === "2" && <h2>
                          {widget.text}
                        </h2>
                      }
                      {
                        widget.size === "3" && <h3>
                          {widget.text}
                        </h3>
                      }
                    </div>
                  </div>
                </li>

                else if (widget.type === "PARAGRAPH") return <li key={widget.id} className={"list-group-item"}>
                  {editing &&
                  <div
                      className="content-box paragraph-widget wbdv-widget">
                    <div className="row">
                      <div className="col">
                        <h3>Paragraph widget</h3>
                      </div>
                      <div className="col text-right">
                        {
                          widget.widgetOrder !== 0 &&
                          <div className="btn btn-warning btn-sm wbdv-btn-up" onClick={() => {

                            const down = widgets.filter(w => w.widgetOrder === widget.widgetOrder - 1);
                            widgetUp(widget.widgetOrder, widget, down[0])
                          }
                          }>
                            <i className="fa fa-arrow-up" aria-hidden="true"/>
                          </div>
                        }
                        {
                          widget.widgetOrder !== widgets.length - 1 &&
                          <div className="btn btn-warning btn-sm wbdv-btn-down" onClick={
                            () => {
                              const up = widgets.filter(w => w.widgetOrder === widget.widgetOrder + 1);
                              widgetDown(widget.widgetOrder, up[0], widget)}
                          }>
                            <i className="fa fa-arrow-down"
                               aria-hidden="true"/>
                          </div>
                        }

                        <label>
                          <select
                              className="form paragraph-widget-dropdown widget-dropdown"
                              value={widget.type}
                              onChange={event => {
                                if (event.target.value === "HEADING") {
                                  editingWidget(
                                      {
                                        ...widget,
                                        "type": "HEADING",
                                        "text": "HEADING 1",
                                        "size": "3",
                                      }
                                  )
                                } else if (event.target.value === "LIST") {
                                  editingWidget(
                                      {
                                        ...widget,
                                        "type": "LIST",
                                        "text": "sample list",
                                        "listOrder": "0",
                                      }
                                  )
                                } else {
                                  editingWidget(
                                      {
                                        ...widget,
                                        "type": "IMAGE",
                                        "src": "https://picsum.photos/300/200",
                                        "text": "",
                                      }
                                  )
                                }
                              }}>
                            <option value="PARAGRAPH">paragraph</option>
                            <option value="HEADING">heading</option>
                            <option value="LIST">list</option>
                            <option value="IMAGE">image</option>
                          </select>
                        </label>
                        <button type="button" className="btn btn-danger btn-sm wbdv-btn-delete" onClick={
                          () => {
                            if (widget.id < 0) {
                              deleteNewWidget(widget.id)
                            } else {
                              deleteOldWidget(widget.id)
                            }
                          }
                        }>
                          <i className="fa fa-times wbdv-module-item-delete-btn"/>
                        </button>
                      </div>
                    </div>

                    <div className="row form-group">
                      <textarea className="form-control" name="text"
                                 onChange = {event => editingWidget({
                        ...widget,
                        text: event.target.value
                      })
                      }
                                value= {widget.text}/>
                    </div>

                    <div className="row form-group">
                      <input className="form-control" placeholder={"Widget name"}
                             value={widget.name}
                             onChange = {event => editingWidget({
                               ...widget,
                               name: event.target.value
                             })
                             }/>
                    </div>
                    <div>
                      <h3>
                        Preview
                      </h3>
                      {widget.text}
                    </div>
                  </div>
                  }

                  {!editing &&
                  <div
                      className="content-box paragraph-widget wbdv-widget">
                    <div>
                      {widget.text}
                    </div>
                  </div>
                  }
                </li>

                else if (widget.type === "LIST") return <li key={widget.id} className={"list-group-item"}>
                  <div className="content-box list-widget wbdv-widget">
                    {editing &&
                    <div className="row">
                      <div className="col">
                        <h3>List widget</h3>
                      </div>
                      <div className="col text-right">
                        {widget.widgetOrder !== 0 &&
                        <div className="btn btn-warning btn-sm wbdv-btn-up"
                             onClick = {
                               () => {
                                 const down = widgets.filter(w => w.widgetOrder === widget.widgetOrder - 1);
                                 widgetUp(widget.widgetOrder, widget, down[0])
                               }
                             }>
                          <i className="fa fa-arrow-up" aria-hidden="true"/>
                        </div>
                        }

                        {widget.widgetOrder !== widgets.length - 1 &&
                        <div className="btn btn-warning btn-sm wbdv-btn-down"
                             onClick={
                               () => {
                                 const up = widgets.filter(w => w.widgetOrder === widget.widgetOrder + 1);
                                 widgetDown(widget.widgetOrder, up[0], widget)}
                             }>
                          <i className="fa fa-arrow-down" aria-hidden="true"/>
                        </div>
                        }
                        <label>
                          <select
                              className="form list-widget-dropdown widget-dropdown"
                              value={widget.type}
                              onChange={event => {
                                if (event.target.value === "HEADING") {
                                  editingWidget(
                                      {
                                        ...widget,
                                        "type": "HEADING",
                                        "text": "HEADING 1",
                                        "size": "3",
                                        "listOrder": "0"
                                      }
                                  )
                                } else if (event.target.value === "PARAGRAPH") {
                                  editingWidget(
                                      {
                                        ...widget,
                                        "type": "PARAGRAPH",
                                        "text": "this is a paragraph",
                                        "listOrder": "0",
                                      }
                                  )
                                } else {
                                  editingWidget(
                                      {
                                        ...widget,
                                        "type": "IMAGE",
                                        "src": "https://picsum.photos/300/200",
                                        "listOrder": "0",
                                      }
                                  )
                                }
                              }}>
                            <option value="HEADING">heading</option>
                            <option value="PARAGRAPH">paragraph</option>
                            <option value="LIST">list</option>
                            <option value="IMAGE">image</option>
                          </select>
                        </label>

                        <button type="button" className="btn btn-danger btn-sm wbdv-btn-delete" onClick={
                          () => {
                            const wLst = widgets.filter(wid => wid.widgetOrder > widget.widgetOrder);
                            let i = 0;
                            while (i < wLst.length) {
                              const w = wLst[i];
                              editingWidget({
                                ...w,
                                widgetOrder: w.widgetOrder - 1,
                              })
                              i++;
                            }
                            if (widget.id < 0) {
                              deleteNewWidget(widget.id)
                            } else {
                              deleteOldWidget(widget.id)
                            }
                          }
                        }>
                          <i className="fa fa-times wbdv-module-item-delete-btn"/>
                        </button>
                      </div>
                    </div>
                    }

                    {editing && <div className="row form-group">
                      <textarea className="form-control" name="list-text"
                                onChange = {event => editingWidget({
                                  ...widget,
                                  text: event.target.value
                                })
                                }
                                value= {widget.text}/>
                    </div>}

                    {editing &&
                    <div className="row form-group">
                      <label htmlFor="widget-list-select"/>
                      <select className="form-control" onChange={(event) =>
                          editingWidget({
                            ...widget,
                            listOrder: event.target.value
                          })} value= {widget.listOrder}>
                        <option value="0">Unordered list</option>
                        <option value="1">Ordered list</option>
                      </select>
                    </div>
                    }


                    {editing &&
                    <div className="row form-group">
                      <input className="form-control" placeholder={"Widget name"}
                             value= {widget.name} onChange = {event => editingWidget({
                        ...widget,
                        name: event.target.value
                      })
                      }/>
                    </div>
                    }

                    <div>

                      {editing &&
                      <h3>
                        Preview
                      </h3>
                      }
                      {
                        widget.listOrder === "0" &&
                          <ul>
                            {
                              widget.text.split("\n").map( row =>
                                <li>
                                  {row}
                                </li>
                              )
                            }
                          </ul>
                      }
                      {
                        widget.listOrder === "1" &&
                        <ol>
                          {
                            widget.text.split("\n").map((row, index)=>
                                <li key={index}>
                                  {row}
                                </li>
                            )
                          }
                        </ol>
                      }
                    </div>
                  </div>
                </li>

                else return <li key={widget.id} className={"list-group-item"}>
                    <div className="content-box img-widget wbdv-widget">
                      {editing &&
                      <div className="row">
                        <div className="col">
                          <h3>Image widget</h3>
                        </div>
                        <div className="col text-right">
                          {widget.widgetOrder !== 0 &&
                          <div className="btn btn-warning btn-sm wbdv-btn-up"
                               onClick = {
                                 () => {
                                   const down = widgets.filter(w => w.widgetOrder === widget.widgetOrder - 1);
                                   widgetUp(widget.widgetOrder, widget, down[0])
                                 }
                               }>
                            <i className="fa fa-arrow-up" aria-hidden="true"/>
                          </div>
                          }

                          {widget.widgetOrder !== widgets.length - 1 &&
                          <div className="btn btn-warning btn-sm wbdv-btn-down"
                               onClick={
                                 () => {
                                   const up = widgets.filter(w => w.widgetOrder === widget.widgetOrder + 1);
                                   widgetDown(widget.widgetOrder, up[0], widget)}
                               }>
                            <i className="fa fa-arrow-down" aria-hidden="true"/>
                          </div>
                          }
                          <label>
                            <select
                                className="form list-widget-dropdown widget-dropdown"
                                value={widget.type}
                                onChange={event => {
                                  if (event.target.value === "HEADING") {
                                    editingWidget(
                                        {
                                          ...widget,
                                          "type": "HEADING",
                                          "text": "HEADING 1",
                                          "size": "3",
                                          "src": "",
                                        }
                                    )
                                  } else if (event.target.value === "PARAGRAPH") {
                                    editingWidget(
                                        {
                                          ...widget,
                                          "type": "PARAGRAPH",
                                          "text": "this is a paragraph",
                                          "src": "",
                                        }
                                    )
                                  } else {
                                    editingWidget(
                                        {
                                          ...widget,
                                          "type": "LIST",
                                          "text": "new list",
                                          "src": "",
                                        }
                                    )
                                  }
                                }}>
                              <option value="HEADING">heading</option>
                              <option value="PARAGRAPH">paragraph</option>
                              <option value="LIST">list</option>
                              <option value="IMAGE">image</option>
                            </select>
                          </label>

                          <button type="button" className="btn btn-danger btn-sm wbdv-btn-delete" onClick={
                            () => {
                              const wLst = widgets.filter(wid => wid.widgetOrder > widget.widgetOrder);
                              let i = 0;
                              while (i < wLst.length) {
                                const w = wLst[i];
                                editingWidget({
                                  ...w,
                                  widgetOrder: w.widgetOrder - 1,
                                })
                                i++;
                              }
                              if (widget.id < 0) {
                                deleteNewWidget(widget.id)
                              } else {
                                deleteOldWidget(widget.id)
                              }
                            }
                          }>
                            <i className="fa fa-times wbdv-module-item-delete-btn"/>
                          </button>
                        </div>
                      </div>
                      }

                      {editing && <div className="row form-group">
                        <label htmlFor="widget-img-text"/>
                        <input className="form-control" id = {"widget-img-text"} placeholder={"URL"}
                               value= {widget.src}
                               onChange = {event => editingWidget({
                                 ...widget,
                                 src: event.target.value
                               })
                               }
                        />
                      </div>}


                      {editing &&
                      <div className="row form-group">
                        <input className="form-control" placeholder={"Widget name"}
                               value= {widget.name} onChange = {event => editingWidget({
                          ...widget,
                          name: event.target.value
                        })
                        }/>
                      </div>
                      }

                      <div>

                        {editing &&
                        <h3>
                          Preview
                        </h3>
                        }
                        <img className="image-preview-widget"
                             src={widget.src} alt="test"/>
                      </div>
                    </div>
                  </li>
              }
          )
         }
           {selectingTopicID !== "empty" && editing === true &&
           <i className="fa fa-plus fa-2x wbdv-widget-item-add-btn pull-right"
              aria-hidden="true" onClick={
             () => {
               addNewWidget(selectingTopicID, dummyID, widgets.length)}
           }/>
           }

        </ul>
      }

    </div>

const stateToPropertyMapper = (state) => ({
  editing: state.widgetReducer.editing,
  selectingTopicID: state.topicReducer.selectingID,
  widgets: state.widgetReducer.widgets,
  dummyID: state.widgetReducer.dummyID,
  deleteOldWidgets: state.widgetReducer.deleteOldWidgets,
  newWidgets: state.widgetReducer.newWidgets
})

const dispatchToPropertyMapper = (dispatch) => ({

  editingWidget: (widget) => editingWidget(widget, dispatch),
  previewMode: () => previewMode(dispatch),

  deleteNewWidget:(id) => deleteNewWidget(id, dispatch),

  deleteOldWidget: (id) => deleteOldWidget(id, dispatch),

  addNewWidget: (topicId, dummyId, order) => addNewWidget(topicId, dummyId, order, dispatch),

  widgetUp:(order, up, down) => widgetUp(order, up, down, dispatch),

  widgetDown:(order, up, down) => widgetDown(order, up, down, dispatch)
})

export default connect (stateToPropertyMapper, dispatchToPropertyMapper)(WidgetListsComponent)
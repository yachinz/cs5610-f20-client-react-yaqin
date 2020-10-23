import React from "react";
import './CourseEditorStyle.css'

class WidgetListComponent extends React.Component {
  render() {
    return (
        <div className={"d-none"}>
        <div className="row preview-save">
          <div className="col text-right">
            <button type="button" className="btn btn-success btn-sm">save
            </button>
            Preview
            <i className="fa fa-toggle-off wiget-toggle" aria-hidden="true"/>
          </div>
        </div>

    <div className="content-box heading-widget wbdv-widget">
      <div className="row">
        <div className="col">
          <h3>Heading widget</h3>
        </div>
        <div className="col text-right">
          <button type="button" className="btn btn-warning btn-sm">
            <i className="fa fa-arrow-up" aria-hidden="true"/></button>
          <button type="button" className="btn btn-warning btn-sm">
            <i className="fa fa-arrow-down" aria-hidden="true"/>
          </button>
          <label>
            <select className="form heading-widget-dropdown widget-dropdown">
              <option value="heading">heading</option>
              <option value="paragraph">paragraph</option>
              <option value="list">list</option>
              <option value="image">image</option>
            </select>
          </label>
          <button type="button" className="btn btn-danger btn-sm">
            <i className="fa fa-times wbdv-module-item-delete-btn"/>
          </button>
        </div>
      </div>

      <div className="row form-group">
        <label htmlFor="wiget-heading-text" className="d-none"/>
        <input className="form-control"
               value="Heading text" id="wiget-heading-text"/>
      </div>
      <div className="row form-group">
        <label htmlFor="widget-heading-select" className="d-none"/>
        <select className="form-control" id="widget-heading-select">
          <option value="heading1">heading1</option>
          <option value="heading2">heading2</option>
          <option value="heading3">heading3</option>
        </select>
      </div>

      <div className="row form-group">
        <label htmlFor="wiget-name" className="d-none"/>
        <input className="form-control" id="wiget-name" value="Widget name"/>
      </div>
      <div>
        <h3>
          Preview
        </h3>
        <h1>
          Heading text
        </h1>
      </div>

    </div>
        </div>
    )
  }
}

export default WidgetListComponent
import React from "react";
import './CourseEditorStyle.css'

class ModuleListComponent extends React.Component{
  render() {
    return (
        <div className="col-3 d-none d-sm-block">
          <ul className="list-group wbdv-module-list">
            <li className="list-group-item wbdv-module-item">
              <a href="#" className="wbdv-module-item-title">Module 1-jQuery</a>
              <i className="fa fa-times pull-right wbdv-module-item-delete-btn"/>
            </li>
            <li className="list-group-item wbdv-module-item">
              <a href="#" className="wbdv-module-item-title">Module 2-React</a>
              <i className="fa fa-times pull-right wbdv-module-item-delete-btn"/>
            </li>
            <li className="list-group-item wbdv-module-item">
              <a href="#" className="wbdv-module-item-title">Module 3-Redux</a>
              <i className="fa fa-times pull-right wbdv-module-item-delete-btn"/>
            </li>
            <li className="list-group-item wbdv-module-item">
              <a href="#" className="wbdv-module-item-title">Module 4-Native</a>
              <i className="fa fa-times pull-right wbdv-module-item-delete-btn"/>
            </li>
            <li className="list-group-item wbdv-module-item">
              <a href="#" className="wbdv-module-item-title">Module
                5-Angular</a>
              <i className="fa fa-times pull-right wbdv-module-item-delete-btn"/>
            </li>
            <li className="list-group-item wbdv-module-item">
              <a href="#" className="wbdv-module-item-title">Module 6-Node</a>
              <i className="fa fa-times pull-right wbdv-module-item-delete-btn"/>
            </li>
            <li className="list-group-item wbdv-module-item">
              <a href="#" className="wbdv-module-item-title">Module 7-Mongo</a>
              <i className="fa fa-times pull-right wbdv-module-item-delete-btn"/>
            </li>
          </ul>
          <i className="fa fa-plus fa-2x wbdv-module-item-add-btn pull-right"
    aria-hidden="true"/>
        </div>
    )
  }
}

export default ModuleListComponent
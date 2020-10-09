import React from "react";
import './CourseEditorStyle.css'

class TopicPillsComponent extends React.Component {
  render() {
    return (
        <div className="wbdv-row-topic row">
          <ul className="nav nav-pills wbdv-topic-pill-list">
            <li className="nav-item">
              <a className="nav-link wbdv-topic-pill" href="#">Topic 1</a>
            </li>
            <li className="nav-item">
              <a className="nav-link wbdv-topic-pill active" href="#">Topic
                2</a>
            </li>
            <li className="nav-item">
              <a className="nav-link wbdv-topic-pill" href="#">Topic 3</a>
            </li>
            <li className="nav-item">
              <a className="nav-link wbdv-topic-pill" href="#">Topic 4</a>
            </li>
            <li className="nav-item">
              <a className="nav-link wbdv-topic-pill" href="#">Topic 5</a>
            </li>
          </ul>
          <button type="button"
                  className="btn btn-primary btn-sm wbdv-topic-add-btn">
            <i className="fa fa-plus" aria-hidden="true"/></button>
        </div>
    )
  }
}

export default TopicPillsComponent
import React from "react";
import './CourseCardComponent.css'
import {Link} from "react-router-dom";

class CourseCardComponent extends React.Component{
  state = {
    editing: false,
    course: this.props.course,
    active: true,
  }

  render() {
    return (
        <div className={'col-xs-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 wbdv-course-grid-card'}
             onClick={() => {
               // document.getElementById(this.props.key).classList.add("activeRow")
               this.setState({
                 active: true
               })
             }}>
          <div>
            {
              this.state.editing &&
              <input
                  className="form-control"
                  onChange={(event) => {
                    const newTitle = event.target.value
                    this.setState(prevState => ({
                      course: {...prevState.course, title: newTitle}
                    }))}
                  }
                  value={this.state.course.title}/>
            }
            {
              !this.state.editing &&
              <Link to={`/edit/${this.props.course._id}`}><i
                  className="fa fa-file-text-o wbdv-row wbdv-icon"
                  aria-hidden="true"/> {this.props.course.title}</Link>
            }
          </div>
          <div className={'wbdv-modified-card'}>{this.props.course.modified}</div>
          <div className={'wbdv-icon-course-card'}>
          {
            (this.state.active && !this.state.editing) && <i className="fa fa-trash pull-right wbdv-row wbdv-button wbdv-delete"
                                                             aria-hidden="true"
                                                             onClick={() => this.props.deleteCourse(this.props.course)}/>
          }
          { (this.state.active && !this.state.editing) && <i className="fa fa-pencil pull-right wbdv-edit"
                                                             onClick={() => this.setState({editing: true})}/>

          }
          {
            this.state.editing &&
            <i className="fa fa-check fa-pull-right wbdv-update"
               onClick={() => {
                 this.props.updateCourse(this.state.course)
                 this.setState({
                   editing: false,
                   active: false,})
               }
               }/>
          }
          </div>
        </div>
    )
  }
}

export default CourseCardComponent
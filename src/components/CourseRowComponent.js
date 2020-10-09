import React from "react";
import {Link} from "react-router-dom";
// import {updateCourse} from "../services/CourseService";

// const courseBeingEdited = false
// const editCourse = () => {}

export default class CourseRowComponent extends React.Component {
  state = {
    editing: false,
    course: this.props.course,
    active: true,
  }
  render() {
    return(
      <tr className={'courseListRow'}
          // onClick={() => {
          //   // document.getElementById(this.props.key).classList.add("activeRow")
          //   this.setState({
          //     active: true
          //   })
          // }}
        >
        <td>
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
        </td>
        <td className={'d-none d-sm-table-cell'}>{this.props.course.owner}</td>
        <td className={'d-none d-md-table-cell'}>{this.props.course.modified}</td>
        <td>
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

        </td>
      </tr>
    )
  }
}

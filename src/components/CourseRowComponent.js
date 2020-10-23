import React from "react";
import {Link} from "react-router-dom";
import './CourseRowComponent.css'


export default class CourseRowComponent extends React.Component {
  state = {
    editing: false,
    course: this.props.course,
  }
  render() {
    return(
      <tr className={
        this.props.selected === this.state.course._id? "courseListRow rowActive" : "courseListRow"}
          onClick={() => {
            this.props.selectACourse(this.state.course)
          }}
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
            <Link to={`/editor/${this.props.course._id}`}><i
    className="fa fa-file-text-o wbdv-row wbdv-icon"
    aria-hidden="true"/> {this.props.course.title}</Link>
          }
        </td>
        <td className={'d-none d-sm-table-cell'}>{this.props.course.owner}</td>
        <td className={'d-none d-md-table-cell'}>{this.props.course.modified}</td>
        <td>
          {
            ((this.props.selected === this.state.course._id) && !this.state.editing) && <i className="fa fa-trash pull-right wbdv-row wbdv-button wbdv-delete"
                                          aria-hidden="true"
                                    onClick={() => this.props.deleteCourse(this.props.course)}/>
          }
          { ((this.props.selected === this.state.course._id) && !this.state.editing) && <i className="fa fa-pencil pull-right wbdv-edit"
                                                                         onClick={() => this.setState({editing: true})}/>

          }
          {
            this.state.editing &&
            <i className="fa fa-check fa-pull-right wbdv-update"
            onClick={() => {
            this.props.updateCourse(this.state.course)
            this.setState({
              editing: false})
          }
          }/>
          }

        </td>
      </tr>
    )
  }
}

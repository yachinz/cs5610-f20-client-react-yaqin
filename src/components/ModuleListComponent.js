import React from "react";
import './CourseEditorStyle.css'
import {connect} from "react-redux";
import {
  selectModule,
    updateModule,
    edit,
    editing,
    deleteModule,
    createModule,
    resetSelectedModule
} from "../actions/moduleActions";
import {resetSelectedTopic, resetTopicsArr} from "../actions/topicActions";

import {resetSelectedLesson} from "../actions/lessonActions";

const ModuleListComponent = (
    {
      course={},
      modules=[],
      selectingID = "",
      editingID = "",
      deleteModule,
      createModule,
      updateModule,
      selectModule,
      resetSelectedLesson,
      resetSelectedTopic,
      resetSelectedModule,
      resetTopicsArr,
      edit,
      editing
    }
)=>
        <div className="col-3 d-none d-sm-block">
          <ul className="list-group wbdv-module-list">
            {
              modules.map(module =>
                  <li key={module._id} className={
                        selectingID === module._id? "list-group-item wbdv-module-item-active" : "list-group-item wbdv-module-item"}
                  >


                    {(editingID !== module._id) &&
                        <span className={"click-cursor"} onClick={() =>
                    { if(selectingID !== module._id) {
                      selectModule(module);

                    } resetSelectedLesson();
                      resetSelectedTopic();
                      resetTopicsArr();
                    }
                    }>
                        {module.title}
                      {/*    <Link to={`/editor/${course._id}/modules/${module._id}`}*/}
                      {/*    onClick={() =>*/}
                      {/*    { if(selectingID !== module._id) {*/}
                      {/*      selectModule(module);*/}

                      {/*    } resetSelectedLesson();*/}
                      {/*      resetSelectedTopic()*/}
                      {/*      }*/}
                      {/*    }>*/}
                      {/*  {module.title}*/}
                      {/*</Link>*/}
                      <i className="fa fa-pencil pull-right" onClick={() =>
                      { if(selectingID !== module._id) {
                        selectModule(module);

                      }
                        resetSelectedLesson();
                        resetSelectedTopic();
                        edit(module)
                      }

                          }/>
                        </span>
                    }


                    {(editingID === module._id) &&
                    <span>
                      <input
                          onChange={(event) =>
                              editing({
                            ...module,
                            title: event.target.value,
                          })}
                          value={module.title}/>
                        <i className="fa fa-check fa-pull-right" onClick={() => updateModule(module)}/>

                        <i className="fa fa-trash fa-pull-right" onClick={() =>
                        {deleteModule(module);
                          if(selectingID === module._id) {
                            resetSelectedModule();
                            resetSelectedLesson();
                            resetSelectedTopic();
                          }


                        }

                            }/>
                        </span>

                    }



                  </li>
              )
            }
          </ul>
          <i className="fa fa-plus fa-2x wbdv-module-item-add-btn pull-right"
    aria-hidden="true" onClick={() => createModule(course)}/>
        </div>


const stateToPropertyMapper = (state) => ({
  modules: state.moduleReducer.modules,
  course: state.courseReducer.course,
  selectingID: state.moduleReducer.selectingID,
  editingID: state.moduleReducer.editingID
})


const propertyToDispatchMapper = (dispatch) => ({
  selectModule: (module) => selectModule(dispatch, module),

  updateModule: (module) => updateModule(dispatch, module),

  edit: (module) => edit(dispatch, module),

  editing: (module) => editing(dispatch, module),

  deleteModule: (module) => deleteModule(dispatch, module),

  createModule: (course) => createModule(dispatch, course),

  resetSelectedModule: () => resetSelectedModule(dispatch),

  resetSelectedLesson: () => resetSelectedLesson(dispatch),

  resetSelectedTopic: () => resetSelectedTopic(dispatch),

  resetTopicsArr: () => resetTopicsArr(dispatch)

})

export default connect
( stateToPropertyMapper, propertyToDispatchMapper)
(ModuleListComponent)
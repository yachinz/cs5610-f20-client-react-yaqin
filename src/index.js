import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter} from "react-router-dom";
import WhiteBoardContainer from "./containers/WhiteBoardContainer";
import {combineReducers, createStore} from "redux";
import moduleReducer from "./reducers/moduleReducer";
import lessonReducer from "./reducers/lessonReducer";
import topicReducer from "./reducers/topicReducer";
import courseReducer from "./reducers/courseReducer";
import widgetReducer from "./reducers/widgetReducer";
import {Provider} from "react-redux";

const reducers = combineReducers({
  moduleReducer, lessonReducer, topicReducer,courseReducer, widgetReducer
})
const store = createStore(reducers)

ReactDOM.render(

    <Provider store={store}>
      <BrowserRouter>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
        <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" rel="stylesheet"/>
        <div className={'wbdv-board-container'}>
          <WhiteBoardContainer/>
        </div>
      </BrowserRouter>
    </Provider>,

    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
import React, { Component } from 'react';
import {createStore, applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import reducer from './reducers/index'
import promiseMiddleware from 'redux-promise-middleware';
import { BrowserRouter as Router, Route} from 'react-router-dom'
import Login from './components/Login'
import Home from './components/Home'
import Detail from './components/Detail'
import 'bootstrap-css-only'
import './signin.css'

const store = createStore(
  reducer,
  applyMiddleware(
    thunk, 
    logger,
    promiseMiddleware()
  )
)

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <Router>
            <div>
              <Route exact path='/' component={Login}/>
              <Route path='/home/:ts/:pv/:pb' component={Home}/>
              <Route path='/detail/:id/:ts/:pb' component={Detail}/>
            </div>
          </Router>
        </div>
      </Provider>
    );
  }
}

export default App;

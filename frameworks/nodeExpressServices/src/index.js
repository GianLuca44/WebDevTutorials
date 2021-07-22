import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import ReduxThunk from 'redux-thunk'
import reducer from './reducers/reducers'
import 'bootstrap/dist/css/bootstrap.min.css'
import App from './app/App'

const initialState = {
    qs: [],
    message: '',
    loading: false,
    error: false,
    config: null // null, damit der Null-Test beim Rendern funktioniert.
}

const store = createStore(reducer, initialState, applyMiddleware(ReduxThunk) )

ReactDOM.render(<Provider store={ store }><App /></Provider>, document.getElementById('app'))

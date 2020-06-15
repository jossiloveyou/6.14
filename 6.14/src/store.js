import { createStore, compose, combineReducers, applyMiddleware } from 'redux'
import promise from 'redux-promise'
import thunk from 'redux-thunk'


import hook from '@/reducer/hook'
import login from '@/reducer/login'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore( 
    combineReducers({hook,login}),
    composeEnhancers(applyMiddleware(promise,thunk))
)


export { store }

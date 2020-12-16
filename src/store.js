import { createStore, compose, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import rootReducer from './reducer'
import {
  sayHiOnDispatch,
  includeMeaningOfLife
} from './exampleAddons/enhancers'
import { 
  print1, 
  print2, 
  print3 
} from './exampleAddons/middleware'

// const middlewareEnhancer = applyMiddleware(print1, print2, print3)
// const composedEnhancer = compose(sayHiOnDispatch, includeMeaningOfLife, middlewareEnhancer)

// const composedEnhancer = composeWithDevTools(
//   // EXAMPLE: Add whatever middleware you actually want to use here
//   applyMiddleware(print1, print2, print3)
//   // other store enhancers if any
// )

const composedEnhancer = composeWithDevTools(applyMiddleware(thunkMiddleware))

const store = createStore(rootReducer, composedEnhancer)

export default store

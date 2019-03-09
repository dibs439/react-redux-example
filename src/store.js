
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const initialState = {};

const middleware = [thunk];

const store = createStore(
    rootReducer, 
    initialState, 
    applyMiddleware(...middleware),
    /*compose(
        applyMiddleware(...middleware),
        window.__REDUX_DEVTOOLS_EXTENSION___ && window.__REDUX_DEVTOOLS_EXTENSION___()
    )*/
    
)

export default store;
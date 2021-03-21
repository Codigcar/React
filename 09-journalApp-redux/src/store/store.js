import { createStore, combineReducers, applyMiddleware, compose  } from 'redux';
import thunk from 'redux-thunk';
import { authReducer } from '../reducers/authReducer';

// npm i redux-thunk



// para usar middlewares
// config para usar "actions" asyncronas en la applications
const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;


const reducers = combineReducers({
    auth: authReducer
})

export const store = createStore( 
    reducers,
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

// config para usar "actions" asyncronas en la applications
    composeEnhancers(
        applyMiddleware( thunk )
    )
);
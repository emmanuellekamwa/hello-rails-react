import { createStore, combineReducers, applyMiddleware} from "redux";
import thunk from 'react-thunk';
import greetingReducer from './greeting';

const rootReducer = combineReducers({
    greetingData: greetingReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';

const createNapAppStore = (reducer, initialState = {}) => createStore(reducer, initialState, applyMiddleware(thunk));

export default createNapAppStore;
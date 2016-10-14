

import {
    createStore,
    applyMiddleware,
    compose
} from 'redux';
import {
    devTools
} from 'redux-devtools';
import middleware from './middleware';
import reducer from './reducers';

let finalCreateStore;
if (__DEVELOPMENT__) {
    finalCreateStore = compose(
        applyMiddleware.apply(this, middleware),
        typeof window === 'object' && window.devToolsExtension && window.devToolsExtension() || devTools.instrument()
    )(createStore);
} else {
    finalCreateStore = compose(
        applyMiddleware.apply(this, middleware)
    )(createStore);
}

export const store = finalCreateStore(reducer);

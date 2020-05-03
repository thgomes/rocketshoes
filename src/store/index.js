import { createStore } from 'redux';

import rootReducer from './modules/rootReducer';

const enhancer =
  process.env.NODE_ENV === 'development'
    ? console.tron.createEnhancer()
    : undefined;

const store = createStore(rootReducer, enhancer);

export default store;

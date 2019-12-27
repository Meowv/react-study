import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import CommentApp from './containers/CommentApp';
import './index.css';
import commentsReducer from './reducers/comments';

const store = createStore(commentsReducer)

ReactDOM.render(<Provider store={store}><CommentApp /></Provider>, document.getElementById('root'));
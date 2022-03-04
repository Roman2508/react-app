import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { addPost, addComment, updateNewPostText, updateNewCommentText } from './redux/state';
import { BrowserRouter } from 'react-router-dom';

export const rerenderEntireTree = (state) => {
  ReactDOM.render(
    <React.StrictMode>
      <BrowserRouter>
        <App
          state={state}
          addPost={addPost}
          updateNewPostText={updateNewPostText}
          addComment={addComment}
          updateNewCommentText={updateNewCommentText}
        />
      </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root'),
  );
};

reportWebVitals();

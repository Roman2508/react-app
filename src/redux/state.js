import { rerenderEntireTree } from '../render';

const state = {
  profilePage: {
    posts: [
      { id: 1, message: "It's my first post", likesCounts: 10 },
      { id: 2, message: 'Hi, how are you?', likesCounts: 15 },
      { id: 3, message: 'Yo', likesCounts: 11 },
    ],
    newPostText: '',
  },
  messagesPage: {
    dialogs: [
      { name: 'Dimych', id: 1 },
      { name: 'Andrey', id: 2 },
      { name: 'Sveta', id: 3 },
      { name: 'Sasha', id: 4 },
      { name: 'Viktor', id: 5 },
      { name: 'Valera', id: 6 },
    ],
    messages: [
      { message: 'Hi', id: 1 },
      { message: 'How are you?', id: 2 },
      { message: 'Yo', id: 3 },
    ],
    newMessageText: '',
  },
  sidebar: {
    friends: [
      { name: 'Dimych', id: 1, ava: '#' },
      { name: 'Andery', id: 1, ava: '#' },
      { name: 'Sveta', id: 1, ava: '#' },
    ],
  },
};
/* add post */
export const addPost = () => {
  let newPost = {
    id: 4,
    message: state.profilePage.newPostText,
    likesCounts: 0,
  };

  state.profilePage.posts.push(newPost);
  state.profilePage.newPostText = '';
  rerenderEntireTree(state);
};

export const updateNewPostText = (newText) => {
  state.profilePage.newPostText = newText;
  rerenderEntireTree(state);
};
/* //add post */

/* Messages */
export const addComment = () => {
  let newComment = {
    message: state.messagesPage.newMessageText,
    id: 4,
  };
  state.messagesPage.messages.push(newComment);
  state.messagesPage.newMessageText = '';
  rerenderEntireTree(state);
};

export const updateNewCommentText = (newCommentText) => {
  state.messagesPage.newMessageText = newCommentText;
  rerenderEntireTree(state);
}

/* //Messages */

export default state;

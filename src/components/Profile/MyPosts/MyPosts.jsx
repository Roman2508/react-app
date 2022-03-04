import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';

function MyPosts(props) {
  let postsElements = props.posts.map((post) => (
    <Post message={post.message} likesCounts={post.likesCounts} />
  ));

  let newPostElement = React.createRef();

  let addPost = () => {
    props.addPost();
  };


  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.updateNewPostText(text);
  }

  return (
    <div>
      <h2 className={classes.posts__title}>My posts</h2>
      <div className={classes.posts__wrapper}>
        <textarea
          className={classes.posts__textarea}
          placeholder="you news..."
          ref={newPostElement}
          value={props.newPostText}
          onChange={onPostChange}
        />
        <button className={classes.posts__btn} onClick={addPost}>
          Send
        </button>
      </div>
      {/* компонента <Post /> */}
      {postsElements}
    </div>
  );
}

export default MyPosts;

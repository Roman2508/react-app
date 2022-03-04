import React from 'react';
import classes from './Post.module.css';

function Post(props) {
  return (
    <div className={classes.post}>
      <div className={classes.post__info}>
        <img
          className={classes.post__img}
          src="https://i.ucrazy.ru/files/i/2011.12.8/1323315895_0.jpg"
        />
        <div className={classes.post__text}>{props.message}</div>
      </div>
      <div className={classes.like}>
        <span>Likes </span>
        <span>{props.likesCounts}</span>
      </div>
    </div>
  );
}

export default Post;

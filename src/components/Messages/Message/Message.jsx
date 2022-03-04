import React from 'react';
import classes from './Message.module.css';

function Message(props) {
  return (
    <div className={classes.message}>
      <div className={`${classes.message__box} ${classes.message__user1}`}>
        <img
          className={classes.message__ava}
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAi72XPvjWoyop6FE-EWGt8ZqdFvsRN_koAQ&usqp=CAU"
        />
        <div className={classes.message__text}>{props.message}</div>
      </div>
      <div className={`${classes.message__box} ${classes.message__user2}`}>
        <div className={classes.message__text}>{props.message}</div>
        <img
          className={classes.message__ava}
          src="https://i.ucrazy.ru/files/i/2011.12.8/1323315895_0.jpg"
        />
      </div>
    </div>
  );
}

export default Message;

import React from 'react';
import classes from './Messages.module.css';
import DialogsItem from './DialogsItem/DialogsItem';
import Message from './Message/Message';

function Messages(props) {
  let dialogElements = props.messagesPage.dialogs.map((dialog) => (
    <DialogsItem name={dialog.name} id={dialog.id} />
  ));
  let messagsElements = props.messagesPage.messages.map((message) => (
    <Message message={message.message} id={message.id} />
  ));

  let newCommentElement = React.createRef();

  let addComment = () => {
    props.addComment();
  };

  let onCommentChange = () => {
    let text = newCommentElement.current.value;
    props.updateNewCommentText(text);
  };

  return (
    <div className={classes.dialogs}>
      <h2 className={classes.dialogs__title}>Dialogs</h2>
      <div className={classes.dialogs__col}>
        <div className={classes.dialogs__items}>{dialogElements}</div>
        <div>
          <div className={classes.messages}>{messagsElements}</div>
          <div className={classes.message__input}>
            <textarea
              className={classes.message__textarea}
              placeholder="you message..."
              ref={newCommentElement}
              value={props.messagesPage.newMessageText}
              onChange={onCommentChange}
            />
            <button className={classes.message__btn} onClick={addComment}>
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Messages;

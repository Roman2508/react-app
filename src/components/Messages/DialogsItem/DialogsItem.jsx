import React from 'react';
import classes from './DialogsItem.module.css';
import { NavLink } from 'react-router-dom';

function DialogsItem(props) {
  return (
    <div className={classes.dialog}>
      <NavLink
        className={(MessageData) => (MessageData.isActive ? classes.active : classes.dialos__link)}
        to={'/messages/' + props.id}>
          <img className={classes.dialogs__ava} src="https://i.ucrazy.ru/files/i/2011.12.8/1323315895_0.jpg"/>
          {props.name}
      </NavLink>
    </div>
  );
}

export default DialogsItem;
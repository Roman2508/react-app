import React from 'react';
import classes from './Navbar.module.css';
import { NavLink } from 'react-router-dom';

function Navbar(props) {
  return (
    <nav className={classes.nav}>
      <div className={classes.item}>
        <NavLink
          to="/profile"
          className={(NavData) => (NavData.isActive ? classes.active : classes.item__link)}>
          Profile
        </NavLink>
      </div>
      <div className={classes.item}>
        <NavLink
          to="/messages"
          className={(NavData) => (NavData.isActive ? classes.active : classes.item__link)}>
          Messages
        </NavLink>
      </div>
      <div className={classes.item}>
        <NavLink
          to="/news"
          className={(NavData) => (NavData.isActive ? classes.active : classes.item__link)}>
          News
        </NavLink>
      </div>
      <div className={classes.item}>
        <NavLink
          to="/music"
          className={(NavData) => (NavData.isActive ? classes.active : classes.item__link)}>
          Music
        </NavLink>
      </div>
      <div className={classes.item}>
        <NavLink
          to="/settings"
          className={(NavData) => (NavData.isActive ? classes.active : classes.item__link)}>
          Settings
        </NavLink>
      </div>

      <div className={classes.item}>
        <h4 className={classes.title}>Friends</h4>
        <div className={classes.friends__box}>
          <div className={classes.friends__item}>
            <img className={classes.friends__ava} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAi72XPvjWoyop6FE-EWGt8ZqdFvsRN_koAQ&usqp=CAU" /> 
            <div className={classes.friends__name}>{props.friends[0].name}</div>
          </div>
          <div className={classes.friends__item}>
            <img className={classes.friends__ava} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAi72XPvjWoyop6FE-EWGt8ZqdFvsRN_koAQ&usqp=CAU" />
            <div className={classes.friends__name}>{props.friends[1].name}</div>
          </div>
          <div className={classes.friends__item}>
            <img className={classes.friends__ava} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAi72XPvjWoyop6FE-EWGt8ZqdFvsRN_koAQ&usqp=CAU" />      
            <div className={classes.friends__name}>{props.friends[2].name}</div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

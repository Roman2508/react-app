import React from 'react';
import classes from './Header.module.css';

function Header(props) {
  return (
    <header className={classes.header}>
      <img
        className={classes.logo}
        src="https://cdn.dribbble.com/users/24078/screenshots/15522433/media/e92e58ec9d338a234945ae3d3ffd5be3.jpg?compress=1&resize=400x300"
      />
    </header>
  );
}

export default Header;

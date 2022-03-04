import React from 'react';
import classes from './ProfileInfo.module.css';

function ProfileInfo(props) {
  return (
    <div>
      <img
        className={classes.profile__bg}
        src="https://images.ctfassets.net/hrltx12pl8hq/7yQR5uJhwEkRfjwMFJ7bUK/dc52a0913e8ff8b5c276177890eb0129/offset_comp_772626-opt.jpg?fit=fill&w=800&h=300"
      />
      <div className={classes.profile__inner}>
        <img
          className={classes.profile__ava}
          src="https://www.meme-arsenal.com/memes/51fc6477aa6a8e8fdc86b46ad2d685ee.jpg"
        />
        <div className={classes.profile__info}>
          <h3 className={classes.username}>Dmitry K.</h3>
          <div className={classes.userinfo}>
            <div className={classes.dateOfBirth}>{'Date of Birth: ' + props.date}</div>
            <div className={classes.city}>{'City: ' + props.city}</div>
            <div className={classes.education}>{'Education: ' + props.education}</div>
            <div className={classes.website}>{'Web site: ' + props.website}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileInfo;

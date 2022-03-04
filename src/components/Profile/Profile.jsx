import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import classes from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';

function Profile(props) {
  return (
    <div className={classes.content}>
      <ProfileInfo
        date="2 january"
        city="Minsk"
        education="BSU'11"
        website="https://it-kamasutra.com"
      />
      <div className={classes.profile__post}>
        <MyPosts
          posts={props.profilePage.posts}
          addPost={props.addPost}
          newPostText={props.profilePage.newPostText}
          updateNewPostText={props.updateNewPostText}
        />
      </div>
    </div>
  );
}

export default Profile;

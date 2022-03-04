import './App.css';
import Header from './components/Header/Header';
import Messages from './components/Messages/Messages';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import { Routes, Route } from 'react-router-dom';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';

function App(props) {
  return (
    <div className="app-wrapper">
      <Header />
      <Navbar friends={props.state.sidebar.friends} />
      <div className="app-wrapper-content">
        <Routes>
          <Route
            path="/profile"
            element={
              <Profile
                profilePage={props.state.profilePage}
                addPost={props.addPost}
                updateNewPostText={props.updateNewPostText}
              />
            }
          />
          <Route
            path="/messages/*"
            element={
              <Messages
                messagesPage={props.state.messagesPage}
                addComment={props.addComment}
                updateNewCommentText={props.updateNewCommentText}
              />
            }
          />  
          <Route path="/news" element={<News />} />
          <Route path="/music" element={<Music />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;

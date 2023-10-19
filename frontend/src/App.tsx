import React from 'react';
import './App.css';
import Register from './components/Register';
import Login from './components/Login';
import TweetForm from './components/TweetForm';
import TweetsList from './components/TweetsList';


function App() {
  // 仮のツイートデータ
  const dummyTweets = [
    { id: 1, message: "Hello World!" },
    { id: 2, message: "I love React!" }
  ];

  return (
    <div className="App">
      <Register />
      <Login />
      <TweetForm />
      <TweetsList tweets={dummyTweets} />
    </div>
  );
}

export default App;

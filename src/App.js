import React from 'react';
import './App.scss';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import { useState, useEffect } from 'react';

import HomePage from './pages/homepage/HomePage';
import Shop from './pages/shop/Shop';
import Header from './components/Header/Header';
import SignInAndSignUp from './pages/sign-in-and-sign-up/SignInAndSignUp';
import { auth } from './firebase/firebase.utils';

const Hats = () => <h1>HATS PAGE</h1>;
const Jeans = () => <h1>Jeans PAGE</h1>;
const JeansOne = props => {
  return <h1>Jeans detail PAGE</h1>;
};

function App() {
  const [currentUser, setCurrentUser] = useState();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      setCurrentUser(user);
    });
    return unsubscribe;
  }, []);

  console.log(currentUser);
  return (
    <div>
      <Router>
        <Header currentUser={currentUser} />
        <Route exact path="/" component={HomePage} />
        <Route exact path="/shop" component={Shop} />
        <Route exact path="/shop/hats" component={Hats} />
        <Route exact path="/shop/sneakers" component={Jeans} />
        <Route exact path="/shop/sneakers/:topicId" component={JeansOne} />
        <Route exact path="/sign-in" component={SignInAndSignUp} />
      </Router>
    </div>
  );
}

export default App;

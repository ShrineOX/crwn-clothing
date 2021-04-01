import React from 'react';
import './App.scss';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import { useEffect } from 'react';

import { connect } from 'react-redux';
import { setCurrentUser } from './redux/user/user-action';

import HomePage from './pages/homepage/HomePage';
import Shop from './pages/shop/Shop';
import Header from './components/Header/Header';
import SignInAndSignUp from './pages/sign-in-and-sign-up/SignInAndSignUp';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';

const Hats = () => <h1>HATS PAGE</h1>;
const Jeans = () => <h1>Jeans PAGE</h1>;
const JeansOne = props => {
  return <h1>Jeans detail PAGE</h1>;
};

function App(props) {
  const { setCurrentUser } = props;
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async user => {
      //fire whenever user sign in or sign out
      // if user log out
      if (!user) {
        setCurrentUser(null);
        return;
      }
      // create user on firebase database
      const userRef = await createUserProfileDocument(user);

      // store user in app state
      userRef.onSnapshot(snapShot => setCurrentUser({ id: snapShot.id, ...snapShot.data() }));
    });

    return unsubscribe;
  }, []);

  return (
    <div>
      <Router>
        <Header />
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

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user)),
});

export default connect(null, mapDispatchToProps)(App);

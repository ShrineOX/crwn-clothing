import React from 'react';
import './App.scss';
import { Route, BrowserRouter as Router } from 'react-router-dom';

import HomePage from './pages/homepage/HomePage';
import Shop from './pages/shop/Shop';

const Hats = () => <h1>HATS PAGE</h1>;
const Jeans = () => <h1>Jeans PAGE</h1>;
const JeansOne = props => {
  return <h1>Jeans detail PAGE</h1>;
};

function App() {
  return (
    <div>
      <Router>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/shop" component={Shop} />
        <Route exact path="/shop/hats" component={Hats} />
        <Route exact path="/shop/sneakers" component={Jeans} />
        <Route exact path="/shop/sneakers/:topicId" component={JeansOne} />
      </Router>
    </div>
  );
}

export default App;

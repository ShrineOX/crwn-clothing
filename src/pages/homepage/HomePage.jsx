import './homePage.scss';
import { Link } from 'react-router-dom';

import Directory from '../../components/directory/Directory';

const HomePage = () => {
  return (
    <div className="homepage">
      <Link to="/shop">Go to Shop</Link>
      <Directory />
    </div>
  );
};

export default HomePage;

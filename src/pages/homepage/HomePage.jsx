import './homePage.scss';
import { Link } from 'react-router-dom';

import Directory from '../../components/directory/Directory';

const HomePage = () => {
  return (
    <div className="homepage">
      <Directory />
    </div>
  );
};

export default HomePage;

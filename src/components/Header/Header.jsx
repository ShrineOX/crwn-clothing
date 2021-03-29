import './Header.scss';

import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/crown.svg';

const Header = () => (
  <div className="header container">
    <Link to="/">
      <Logo className="header__logo" />
    </Link>

    <nav className="nav">
      <Link className="nav__link" to="/shop">
        Shop
      </Link>
      <Link className="nav__link" to="/contact">
        Contact
      </Link>
    </nav>
  </div>
);

export default Header;

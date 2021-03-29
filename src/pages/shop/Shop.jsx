import './Shop.scss';
import React from 'react';
import { Link } from 'react-router-dom';

import shopData from './shopData';
import CategoryList from '../../components/category-list/CategoryList';

class Shop extends React.Component {
  constructor(props) {
    super(props);
    this.state = { shopData };
  }

  renderCategory() {
    return this.state.shopData.map(cat => (
      <>
        <Link to={cat.routeName} key={cat.id} className="shop-heading">
          {cat.title}
        </Link>
        <CategoryList items={cat.items.slice(0, 4)} />
      </>
    ));
  }

  render() {
    return <div className="shop-page container">{this.renderCategory()}</div>;
  }
}

export default Shop;

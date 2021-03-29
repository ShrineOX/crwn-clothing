import './CategoryList.scss';

import CategoryItem from '../category-item/CategoryItem';

const CategoryList = ({ items }) => (
  <div className="list">
    {items.map(({ id, ...otherItemProps }) => (
      <CategoryItem key={id} {...otherItemProps} />
    ))}
  </div>
);

export default CategoryList;

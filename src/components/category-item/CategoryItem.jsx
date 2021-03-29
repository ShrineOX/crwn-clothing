import './CategoryItem.scss';

const CategoryItem = ({ name, imageUrl, price }) => (
  <div className="item">
    <img src={imageUrl} alt={name} className="item__img" />
    <h3 className="item__name">{name}</h3>
    <p className="item__price">{price}</p>
  </div>
);

export default CategoryItem;

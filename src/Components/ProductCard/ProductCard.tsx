import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ProductModel } from '../ProductModel';
import { activateByName } from '../redux/actions';
import './ProductCard.css';

const ProductCard = (product: ProductModel): JSX.Element => {
  const dispatch = useDispatch();
  const products = useSelector((state: any) => state.products);
  
  return (
    <div className='product-card'>
      <p>
        <b>Name: </b>
        {product.name}
      </p>
      <p>
        <b>Inspiration date: </b>
        {product.date.toString().slice(4, 15)}
      </p>
      <p>
        <b>Price: </b>
        {product.price}
      </p>
      <b>Availability: </b>
      <label className='switch'>
        <input
          type='checkbox'
          checked={product.available}
          onChange={() => {
            dispatch(activateByName(products, product.name));
          }}
        />
        <span className='slider round'></span>
      </label>
    </div>
  );
};

export default ProductCard;

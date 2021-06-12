/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ProductCard from '../ProductCard/ProductCard';
import { ProductModel } from '../ProductModel';
import { activateAll, getALLProducts } from '../redux/actions';
import './MainPage.css';

const products = [
  {
    name: 'apple',
    price: 50,
    date: new Date('1999-01-20'),
    available: false,
  },
  {
    name: 'peach',
    price: 150,
    date: new Date('2001-10-19'),
    available: true,
  },
  {
    name: 'banana',
    price: 250,
    date: new Date('2000-09-10'),
    available: false,
  },
  {
    name: 'ananas',
    price: 350,
    date: new Date('1991-04-13'),
    available: true,
  },
  {
    name: 'pear',
    price: 450,
    date: new Date('2008-05-08'),
    available: true,
  },
];

const MainPage = (): JSX.Element => {
  const dispatch = useDispatch();

  const [searchField, setSearchField] = useState(0);
  const [isOrderedByDate, setIsOrderedByDate] = useState(false);

  //Infinite loop
  // const products = useSelector((state: any) => state.products);


  useEffect(() => {
    dispatch(getALLProducts(products));
  }, []);

  let filteredProducts = products.filter(
    (product: any) => product.price >= +searchField
  );

  useEffect(() => {
    dispatch(getALLProducts(filteredProducts));
  }, [filteredProducts]);

  if (isOrderedByDate === true) {
    filteredProducts.sort((a: any, b: any) => (a.date > b.date ? 1 : -1));
    dispatch(getALLProducts(filteredProducts));
  }

  return (
    <>
      {' '}
      <input
        type='search'
        placeholder='Search by price:'
        onChange={(event) => {
          setSearchField(+event.target.value);
        }}
      />
      <div className='products-card-list'>
        {filteredProducts?.map(
          (product: ProductModel, index: number): JSX.Element => {
            return <ProductCard key={index} {...product} />;
          }
        )}
      </div>
      <label htmlFor='by-date'>Order by Date: </label>
      <input
        type='checkbox'
        id='by-date'
        onChange={() => {
          if (isOrderedByDate === true) {
            setIsOrderedByDate(false);
          } else {
            setIsOrderedByDate(true);
          }
        }}
      />
      <label htmlFor='by-date'>Activate all: </label>
      <input
        type='checkbox'
        id='activate-all'
        onChange={() => {
          dispatch(activateAll(products));
        }}
      />
    </>
  );
};

export default MainPage;

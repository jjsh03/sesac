import React from 'react';
import { productInfos } from './ProductList';
import { Link } from 'react-router-dom';

export default function ProductItem({ product }) {
  console.log(product);
  //   console.log(productInfos);

  const truncateText = (text, maxLength) => {
    if (text.length > maxLength) {
      return text.substring(0, maxLength) + '...';
    }
    return text;
  };

  return (
    <>
      <Link to={`/product/${product.id}`}>
        <ul>
          <li>상품명: {product.name}</li>
          <li>상세설명: {truncateText(product.body, 60)}</li>
        </ul>
      </Link>
      <hr />
    </>
  );
}

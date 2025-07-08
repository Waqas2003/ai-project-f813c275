import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // fetch products from API
    const products = [
      { id: 1, name: 'Product 1', price: 10.99 },
      { id: 2, name: 'Product 2', price: 9.99 },
      { id: 3, name: 'Product 3', price: 12.99 },
    ];
    setProducts(products);
  }, []);

  return (
    <div>
      <h1>Products</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <Link to={`/products/${product.id}`}>{product.name}</Link>
            <span>${product.price}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductList;
// src/components/SearchedProducts.js
import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MyContext } from '../../context/data/MyContext';

const SearchList = () => {
  const { filteredProducts, searchQuery, fetchSearchedProducts } = useContext(MyContext);

  useEffect(() => {
    if (searchQuery) {
      fetchSearchedProducts(searchQuery);
    }
  }, [searchQuery, fetchSearchedProducts]);

  return (
    <div>
      <h2>Searched Products</h2>
      <div>
        {filteredProducts.map(product => (
          <div key={product.id} style={{ border: '1px solid #ccc', margin: '10px', padding: '10px' }}>
            <img src={product.thumbnail} alt={product.title} style={{ width: '100px', height: '100px' }} />
            <p><strong>ID:</strong> {product.id}</p>
            <p><strong>Name:</strong> {product.title}</p>
            <p><strong>Category:</strong> {product.category}</p>
            <Link to={`/product/${product.id}`}>View Details</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchList;

// src/components/FilteredProducts.js
import React, { useContext, useEffect } from 'react';
import { MyContext } from '../../context/data/MyContext';

const FilteredList = () => {
  const { filteredProducts, selectedCategory, fetchProductsByCategory } = useContext(MyContext);

  useEffect(() => {
    if (selectedCategory && selectedCategory !== 'All') {
      fetchProductsByCategory(selectedCategory);
    }
  }, [selectedCategory, fetchProductsByCategory]);
   function showItem(){

   }

  return (
    <div>
      <h2>Filtered Products by Category</h2>
      <div>
        {filteredProducts.map(product => (
          <div key={product.id} style={{ border: '1px solid #ccc', margin: '10px', padding: '10px' }}>
            <img src={product.thumbnail} alt={product.title} style={{ width: '100px', height: '100px' }} />
            <p><strong>ID:</strong> {product.id}</p>
            <p><strong>Name:</strong> {product.title}</p>
            <p><strong>Category:</strong> {product.category}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FilteredList;

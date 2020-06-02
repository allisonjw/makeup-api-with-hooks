import React from 'react';
import Product from '../Product/Product';

export const Categories = ({ productType, type, allCategoriesArray }) => {
    
   if (type === 'shopall') {
    const allCategoriesArrayList = allCategoriesArray.map(product => <Product key={product.id} {...product} />);
    return (
      <section className='all_categories-section'>
        {allCategoriesArrayList}
      </section>
    )
   } else {
    const productList = productType.map(product => <Product key={product.id} {...product} />);
      return (
        <section className='all_categories-section'>
          {productList}
        </section>
      )
    };
  };  

export default Categories;
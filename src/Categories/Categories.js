import React from 'react';
import Product from '../Product/Product';
import { Link } from 'react-router-dom';

export const Categories = ({ productType, type, allCategoriesArray }) => {
    
   if (type === 'shopall') {
    const allCategoriesArrayList = allCategoriesArray.map(product => <Product key={product.id} {...product} />);
    return (
      <>
        <div className="back_btn-div">
          <Link to='/'>
            <button className='back_btn' >Back</button>
          </Link>
        </div>
        <section className='all_categories-section'>
          {allCategoriesArrayList}
        </section>
      </>
    )
   } else {
    const productList = productType.map(product => <Product key={product.id} {...product} />);
      return (
        <>
          <div className="back_btn-div">
            <Link to='/'>
              <button className='back_btn' >Back</button>
            </Link>
          </div>
          <section className='all_categories-section'>
            {productList}
          </section>
        </>
      )
    };
  };  

export default Categories;
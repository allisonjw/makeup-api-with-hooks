import React from 'react';
import { useSelector } from 'react-redux';
import { Link, useParams, Route } from 'react-router-dom';
import Product from '../Product/Product';

export const Categories = ({ match }) => {
    const allFoundations = useSelector(state => state.foundations)
    const allEyeShadows = useSelector(state => state.eyeShadows)
    const allBlushes = useSelector(state => state.blushes)
    const allBronzers = useSelector(state => state.bronzers)
    const allLipsticks = useSelector(state => state.lipsticks)
    const allMascaras = useSelector(state => state.mascaras)

    let allCategories = [...allFoundations, ...allEyeShadows, ...allBlushes, ...allBronzers, ...allLipsticks, ...allMascaras]
    
    const generateProduct = () => {
        return allCategories.map(product => 
            <Product 
             {...product} 
             key={product.id} 
            />
        )
    };        

  return (
    <>
    <section className="category_type-section">
      <Link to={`${match}/foundation}`}> 
        <button 
            className="foundation_btn"
            type="submit"
            name="foundation">
            FOUNDATION
        </button>
      </Link>
      <Link to={`${match}/blush}`}>
        <button 
            className="blush_btn"
            type="submit"
            name="blush">
            BLUSH
        </button>
      </Link>
      <Link to={`${match}/mascara}`}>
        <button 
            className="mascara_btn"
            type="submit"
            name="mascara">
            MASCARA
        </button>
      </Link>
      <Link to={`${match}/eyeshadow}`}>
        <button 
            className="eyeshadow_btn"
            type="submit"
            name="eyeshadow">
            EYESHADOW
        </button>
      </Link>
      <Link to={`${match}/lipstick}`}>
        <button 
            className="lipstick_btn"
            type="submit"
            name="lipstick">
            LIPSTICK
        </button>
      </Link>
      <Link to={`${match}/bronzer}`}>
        <button 
            className="bronzer_btn"
            type="submit"
            name="bronzer">
            BRONZERS
        </button>
      </Link>
    </section>
    <Route
        path={`${match}/:name`}
        render={({ match }) => (
          <div>
            {" "}
            <h3> {''} </h3>
          </div>
        )}
      />
    <section className="all_categories-section">
        {generateProduct()}
    </section>
    </>    
  )
}

export default Categories;
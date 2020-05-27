import React from 'react';
import { useSelector } from 'react-redux';
import Product from '../Product/Product';

export const Categories = () => {

    const allFoundations = useSelector(state => state.foundations)
    const allEyeShadows = useSelector(state => state.eyeShadows)
    const allBlushes = useSelector(state => state.blushes)
    const allBronzers = useSelector(state => state.bronzers)
    const allLipsticks = useSelector(state => state.lipsticks)
    const allMascaras = useSelector(state => state.mascaras)

    let allCategories = [...allFoundations, ...allEyeShadows, ...allBlushes, ...allBronzers, ...allLipsticks, ...allMascaras]

    const generateProduct = () => {
        return allCategories.map(product => {
          return (
            <Product 
             {...product} 
             key={product.id} 
            />
          )
        })
    }     

return (
    <section className="all_categories-section">
        {generateProduct()}
    </section>    
)

}

export default Categories;
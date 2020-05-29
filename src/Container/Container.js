import React from 'react';
import { useSelector } from 'react-redux';
import Product from '../Product/Product';
import './Container.scss';

const Container = ({productType, type, collection }) => {
    const allFoundations = useSelector(state => state.foundations)
    const allEyeShadows = useSelector(state => state.eyeShadows)
    const allBlushes = useSelector(state => state.blushes)
    const allBronzers = useSelector(state => state.bronzers)
    const allLipsticks = useSelector(state => state.lipsticks)
    const allMascaras = useSelector(state => state.mascaras)

    let allCategories = [...allFoundations, ...allEyeShadows, ...allBlushes, ...allBronzers, ...allLipsticks, ...allMascaras]

  if (type === 'collection') {
    let collectionList = collection.map(product => <Product key={product.id} product={product} /> );

    return (
      <main className='Container'>
        {collectionList}
      </main>
    )
  } else if (type === 'shopall') {
    let allCategoriesList = allCategories.map(product => <Product key={product.id} product={product} />);

    return (
      <main className='Container'>
        {allCategoriesList}
      </main>
    )
  } else {
    const productList = productType.map(product => <Product key={product.id}product={product} />);

    return (
      <main className = 'Container'>
        {productList}
      </main>
    )
  }
}

export default Container;

import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getProducts } from '../Util/apiCall';
import { addFoundations, addEyeShadows, addBlushes, addBronzers, addLipsticks, addMascaras, isLoading } from '../actions';
import './Container.scss';
import { Route } from 'react-router-dom';
import Categories from '../Categories/Categories';
import Nav from '../Nav/Nav';

export const Container = () => {
    const dispatch = useDispatch();
    const [foundation, setAllFoundations] = useState([]);
    const [eyeShadow, setAllEyeShadows] = useState([]);
    const [blush, setAllBlushes] = useState([]);
    const [bronzer, setAllBronzers] = useState([]);
    const [lipstick, setAllLipsticks] = useState([]);
    const [mascara, setAllMascaras] = useState([]);
    const [loading, isLoading] = useState(true);
  
    const fetchProducts = async () => {
        try {
            isLoading(loading);
            const foundations = await getProducts('foundation');
            setAllFoundations(foundations);
            dispatch(addFoundations(foundations));
  
            const eyeShadows = await getProducts('eyeshadow');
            setAllEyeShadows(eyeShadows);
            dispatch(addEyeShadows(eyeShadows));
  
            const blushes = await getProducts('blush');
            setAllBlushes(blushes);
            dispatch(addBlushes(blushes));
  
            const bronzers = await getProducts('bronzer');
            setAllBronzers(bronzers);
            dispatch(addBronzers(bronzers));
  
            const lipsticks = await getProducts('lipstick');
            setAllLipsticks(lipsticks);
            dispatch(addLipsticks(lipsticks));
  
            const mascaras = await getProducts('mascara');
            setAllMascaras(mascaras);
            dispatch(addMascaras(mascaras));
  
          } catch({ message }) {
              isLoading(false)
              console.log(message);
          }
    };
  
      useEffect(() => {
        fetchProducts();
      }, []);
  
    let allStates = {foundation, eyeShadow, blush, bronzer, lipstick, mascara};

    let allCategoriesArray = [...foundation, ...eyeShadow, ...blush, ...bronzer, ...lipstick, ...mascara];

    return (
      <>
        <Route exact path='/products/:type' render={({match}) => {
            let productType = Object.keys(allStates).find(type => type === match.params.type)
        return <> <Nav /> <Categories productType={allStates[productType]} /> </>}}/>  
        <Route exact path='/shopall' render={() => <><Nav /><Categories type='shopall' allCategoriesArray={allCategoriesArray} /> </>} />    
      </>
    )
  }

export default Container;

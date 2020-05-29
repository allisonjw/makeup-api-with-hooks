import React, { useState, useEffect } from 'react';
import { useDispatch  } from 'react-redux';
import './App.scss';
import { getProducts } from '../Util/apiCall';
import { addFoundations, addEyeShadows, addBlushes, addBronzers, addLipsticks, addMascaras, isLoading } from '../actions';
import Nav from '../Nav/Nav';
import Categories from '../Categories/Categories';
import Container from '../Container/Container';
// import { Product } from '../Product/Product';
import { Route, Switch } from 'react-router-dom';

export const App = () => {
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
          isLoading(true);
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

    const props = (foundation, mascara, eyeShadow, bronzer, blush, lipstick)
    return (
      <>
      <Switch >
        <Route exact path='/' render={() => <> <Nav /> <Categories /> </>} />
        {/* <Route path='/products' component={Product} /> */}
        <Route exact path='/products/:type' render={({match}) => {
            let productType = Object.keys(props).find(type => type === match.params.type)
          return <> <Nav /><Container productType={props[productType]} toggleCollection={this.toggleCollection} /> </>}}/>
     </Switch >
     </>
    );
};

export default App;
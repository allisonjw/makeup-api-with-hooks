// import React, { Component } from 'react';
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.scss';
import { getProducts } from '../Util/apiCall';
import { addFoundations, addEyeShadows, addBlushes, addBronzers, addLipsticks, addMascaras, isLoading } from '../actions';
import Nav from '../Nav/Nav';
// import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';

export const App = () => {
  const dispatch = useDispatch();
  const [foundation, setAllFoundations] = useState([]);
  const [eyeShadow, setAllEyeShadows] = useState([]);
  const [blush, setAllBlushes] = useState([]);
  const [bronzer, setAllBronzers] = useState([]);
  const [lipstick, setAllLipsticks] = useState([]);
  const [mascara, setAllMascaras] = useState([]);
  useSelector(state => state.foundations)
  useSelector(state => state.eyeShadows)
  useSelector(state => state.blushes)
  useSelector(state => state.bronzers)
  useSelector(state => state.lipsticks)
  useSelector(state => state.mascaras)

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
      isLoading(false)
  } catch({ message }) {
      isLoading(false)
      console.log(message);
  }
 };

    useEffect(() => {
      fetchProducts();
    }, []);
// }

// export class App extends Component {
//   componentDidMount = async() => {
//     const { addFoundations, addEyeShadows, addBlushes, addBronzers, addLipsticks, addMascaras } = this.props;
//     try {
//       isLoading(true);
//       const foundations = await getProducts('foundation');
//       addFoundations(foundations);
//       const eyeShadows = await getProducts('eyeshadow');
//       addEyeShadows(eyeShadows);
//       const blushes = await getProducts('blush');
//       addBlushes(blushes);
//       const bronzers = await getProducts('bronzer');
//       addBronzers(bronzers);
//       const lipsticks = await getProducts('lipstick');
//       addLipsticks(lipsticks);
//       const mascaras = await getProducts('mascara');
//       addMascaras(mascaras);
//       isLoading(false)
//     } catch({ message }) {
//       isLoading(false)
//       console.log(message);
//     }
//   }


  // render() {
    return (
      <main className="App">
        <p>
          Makeup Api.
        </p>
        <Nav />
     </main>
    );
  // };
};

export default App;

// export const mapStateToProps = state => ({
//   blushes: state.blushes,
//   bronzers: state.bronzers,
//   eyeShadows: state.eyeShadows,
//   foundations: state.foundations,
//   lipsticks: state.lipsticks,
//   mascaras: state.mascaras,
//   isLoading: state.isLoading
// });

// export const mapDispatchToProps = dispatch => {
//   return bindActionCreators({ addFoundations, addEyeShadows, addBlushes, addBronzers, addLipsticks, addMascaras, isLoading}, dispatch) 
// };

// export default connect(mapStateToProps, mapDispatchToProps)(App);

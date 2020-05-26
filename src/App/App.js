import React, { Component } from 'react';
// import React, { useState, useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
import './App.scss';
import { getProducts } from '../Util/apiCall';
import { addFoundations, addEyeShadows, addBlushes, addBronzers, addLipsticks, addMascaras, isLoading } from '../actions';
import Nav from '../Nav/Nav';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// export const App = () => {
//   const dispatch = useDispatch();
//   const [foundations, addFoundations] = useState([]);
//   const [eyeShadows, addEyeShadows] = useState([]);
//   const [blushes, addBlushes] = useState([]);
//   const [bronzers, addBronzers] = useState([]);
//   const [lipsticks, addLipsticks] = useState([]);
//   const [mascaras, addMascaras] = useState([]);
// }

export class App extends Component {
  componentDidMount = async() => {
    const { addFoundations, addEyeShadows, addBlushes, addBronzers, addLipsticks, addMascaras } = this.props;
    try {
      isLoading(true);
      const foundations = await getProducts('foundation');
      addFoundations(foundations);
      const eyeShadows = await getProducts('eyeshadow');
      addEyeShadows(eyeShadows);
      const blushes = await getProducts('blush');
      addBlushes(blushes);
      const bronzers = await getProducts('bronzer');
      addBronzers(bronzers);
      const lipsticks = await getProducts('lipstick');
      addLipsticks(lipsticks);
      const mascaras = await getProducts('mascara');
      addMascaras(mascaras);
      isLoading(false)
    } catch({ message }) {
      isLoading(false)
      console.log(message);
    }
  }


  render() {
    return (
      <main className="App">
        <p>
          Makeup Api.
        </p>
        <Nav />
     </main>
    );
  };
};

export const mapStateToProps = state => ({
  blushes: state.blushes,
  bronzers: state.bronzers,
  eyeShadows: state.eyeShadows,
  foundations: state.foundations,
  lipsticks: state.lipsticks,
  mascaras: state.mascaras,
  isLoading: state.isLoading
});

export const mapDispatchToProps = dispatch => {
  return bindActionCreators({ addFoundations, addEyeShadows, addBlushes, addBronzers, addLipsticks, addMascaras, isLoading}, dispatch) 
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

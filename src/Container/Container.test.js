import React from 'react';
import { render } from '@testing-library/react';
import Container from './Container';
import { shallow } from 'enzyme';
import { getProducts } from '../Util/apiCall';
import * as actions from '../actions/index';

jest.mock('../Util/apiCall');
jest.mock('../actions')

jest.mock("react-redux", () => ({
    useDispatch: () => jest.fn(),
    // useSelector: () => ({ projects : [{}, {}] })
}));

describe('Container', () => {
    let lipsticks = [{}, {}, {}]
    let mascaras = [{}, {}, {}]
    let foundations = [{}, {}, {}]
    let blushes = [{}, {}, {}]
    let eyeshadows = [{}, {}, {}]
    let bronzers=[{}, {}, {}]
    let wrapper = shallow(<Container 
      setAllLipsticks={actions.setAllLipsticks}
      setAllMascaras={actions.setAllMascaras}
      setAllFoundations={actions.setAllFoundations}
      setAllBlushes={actions.setAllBlushes}
      setAllEyeshadows={actions.setAllEyeshadows}
      isLoading={actions.isLoading}
      bronzers={bronzers}
      lipsticks={lipsticks}
      mascaras={mascaras}
      foundations={foundations}
      blushes={blushes}
      eyeshadows={eyeshadows}
    />);

  beforeEach(() => {
    wrapper = shallow(<Container />)
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
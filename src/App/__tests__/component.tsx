import * as React from 'react';
import toJson from 'enzyme-to-json';
import { shallow } from 'enzyme';
import App from '../';

describe('<App />', () => {
  it('Should render the app.', () => {
    expect(toJson(shallow(<App />))).toMatchSnapshot();
  });
});

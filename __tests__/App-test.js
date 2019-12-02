/**
 * @format
 */

import 'react-native';
import React from 'react';
import App from '../App';

import {render} from 'react-native-testing-library';

it('renders correctly', () => {
  const container = render(<App />).container;
  expect(container).toMatchSnapshot();
});

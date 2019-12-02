/**
 * @format
 */

import 'react-native';
import React from 'react';
import App from '../App';

// Note: test renderer must be required after react-native.
import {render} from 'react-native-testing-library';

it('renders correctly', () => {
  const container = render(<App />).container;
  expect(container).toMatchSnapshot();
});

import React from 'react';
import { render } from '@testing-library/react';

import SignUpFormContainer from '../containers/SignUpFormContainer';

test('renders learn react link', () => {
  const { getByText } = render(<SignUpFormContainer />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

import { add } from './math';

test('add numbers', () => {
  debugger;
  expect(add(1, 1)).toEqual(2);
  expect(add(2, 2)).toEqual(4);
});

/* test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText('learn');
  expect(linkElement).toBeInTheDocument();
});
 */
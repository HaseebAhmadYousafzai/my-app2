import React from 'react';
import { render, screen } from '@testing-library/react';
import ItemList from './Itemtest';

test('renders Banana in the list', () => {
  render(<ItemList />);
  const listItem = screen.getByText('Banana');
  expect(listItem).toBeInTheDocument();
});

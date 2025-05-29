// src/helloworld.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import Helloworld from './components/helloworld'; // Make sure the path is correct

test('renders Hello world heading', () => {
  render(<Helloworld />);
  const heading = screen.getByText(/hello world/i);
  expect(heading).toBeInTheDocument();
});

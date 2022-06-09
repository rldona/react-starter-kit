import {render} from '@testing-library/react';

import App from '.';

test('<App /> rendered', () => {
  const app = render(<App />);
  expect(app).toBeDefined();
});

test(' find text in App component', () => {
  const {getByText} = render(<App />);
  const linkElement = getByText(/React Starter Kit/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders StarterLogo', () => {
  const {getByTestId} = render(<App />);
  const linkElement = getByTestId('starter-logo');
  expect(linkElement).toBeInTheDocument();
});

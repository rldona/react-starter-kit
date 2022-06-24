import {render, screen} from '@testing-library/react';

import App from '.';

test('<App /> rendered', () => {
  render(<App />);
});

test(' find text in App component', () => {
  render(<App />);
  const linkElement = screen.getByText(/react starter kit/i);
  expect(linkElement).toBeInTheDocument();
});

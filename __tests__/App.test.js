import { render, screen } from '@testing-library/react';

import App from '../src/components/App';

test('Renders "react starter kit" title', () => {
  render(<App />);
  const title = screen.getByText(/react starter kit/i);
  expect(title).toBeInTheDocument();
});

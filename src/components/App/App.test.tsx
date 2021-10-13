import {render, screen} from '@testing-library/react';

import App from '.';

test('<App /> rendered', () => {
  const app = render(<App />);

  expect(app).toBeDefined();
});

test('Renders "react starter kit" title', () => {
  render(<App />);

  const title = screen.queryByText(/react starter kit/i);

  expect(title).toBeInTheDocument();
});

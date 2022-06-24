import {render, screen} from '@testing-library/react';
import {StarterLogo} from '.';

describe('StarterLogo', () => {
  it('should render', () => {
    render(<StarterLogo />);
    expect(screen.getByRole('img')).toBeInTheDocument();
  });
});

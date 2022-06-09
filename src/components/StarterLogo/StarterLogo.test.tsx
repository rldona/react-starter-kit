import {render} from '@testing-library/react';
import {StarterLogo} from '.';

describe('StarterLogo', () => {
  it('should render', () => {
    const {getByTestId} = render(<StarterLogo />);
    expect(getByTestId('starter-logo')).toBeInTheDocument();
  });
});

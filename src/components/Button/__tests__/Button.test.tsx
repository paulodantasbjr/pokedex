import { render, screen } from '@testing-library/react';

import { Button } from '../Button';

describe('Button', () => {
  it('should render correctly', () => {
    render(<Button />);
    expect(screen.getByRole('button')).toBeInTheDocument();
  });
});

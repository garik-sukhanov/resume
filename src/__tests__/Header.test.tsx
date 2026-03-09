import { render, screen } from '@testing-library/react';
import { Header } from '../components/Header';
import { describe, it, expect } from 'vitest';

describe('Header', () => {
  it('renders correctly', () => {
    render(<Header />);
    expect(screen.getByText('Resume')).toBeDefined();
  });

  it('contains theme toggle', () => {
    render(<Header />);
    const themeToggle = screen.getByLabelText('Toggle theme');
    expect(themeToggle).toBeDefined();
  });
});

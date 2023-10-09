// @vitest-environment jsdom

import { screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { render } from './test/utilities';
import Counter from '.';


test('it should render the component', () => {
  render(<Counter />);
});

test(
  'it should increment when the "Increment" button is pressed',
  async () => {
    // const user = userEvent.setup();
    const { user } = render(<Counter />);
    const currentCount = screen.getByTestId('current-count');
    expect(currentCount).toHaveTextContent('0');
    const button = screen.getByRole('button', { name: 'Increment' });
    // fireEvent.click(button);
    await user.click(button);
    expect(currentCount).toHaveTextContent('1');
  },
);

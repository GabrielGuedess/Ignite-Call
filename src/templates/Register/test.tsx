import { render } from '@testing-library/react';

import { Register } from '.';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const useRouter = jest.spyOn(require('next/router'), 'useRouter');

useRouter.mockImplementation(() => ({
  push: jest.fn(),
  query: { username: 'Gabriel' },
}));

describe('<Register />', () => {
  it('should render the register correctly', () => {
    const { container } = render(<Register />);

    expect(container.firstChild).toMatchSnapshot();
  });
});

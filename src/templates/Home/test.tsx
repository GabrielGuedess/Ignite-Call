import { render } from '@testing-library/react';

import { Home } from '.';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const useRouter = jest.spyOn(require('next/router'), 'useRouter');

useRouter.mockImplementation(() => ({
  push: jest.fn(),
}));

describe('<Home />', () => {
  it('should render the home correctly', () => {
    const { container } = render(<Home />);

    expect(container.firstChild).toMatchSnapshot();
  });
});

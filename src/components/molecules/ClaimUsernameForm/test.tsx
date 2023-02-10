import { render } from '@testing-library/react';

import { ClaimUsernameForm } from '.';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const useRouter = jest.spyOn(require('next/router'), 'useRouter');

useRouter.mockImplementation(() => ({
  push: jest.fn(),
}));

describe('<ClaimUsernameForm />', () => {
  it('should render the claimUsernameForm correctly', () => {
    const { container } = render(<ClaimUsernameForm />);

    expect(container.firstChild).toMatchSnapshot();
  });
});

import Home from './Home';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

describe('Home Test Suite', () => {
  it('should render', () => {
    // given
    const expected = 'Duplicate Inventory Reduction';

    // when
    const renderHome = render(<Home />, { wrapper: MemoryRouter });
    // renderHome.getByText(expected);

    // then - assertions
    // expect(actual).toEqual(expected);
  });
});

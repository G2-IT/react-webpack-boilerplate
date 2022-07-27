import React from 'react';

import NotFoundScreen from '.';
import { render, screen } from '../../../tests';

describe('<NotFoundScreen/>', () => {
	it('It should have correct text', () => {
		render(<NotFoundScreen />);

		expect(screen.getByText('Not Found Screen')).toBeTruthy();
	});
});

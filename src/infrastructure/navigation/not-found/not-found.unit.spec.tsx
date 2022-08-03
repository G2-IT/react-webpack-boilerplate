import { render, screen } from '@react-webpack-boilerplate/tests';
import React from 'react';

import NotFoundScreen from '.';

describe('<NotFoundScreen/>', () => {
	it('It should have correct text', () => {
		render(<NotFoundScreen />);

		expect(screen.getByText('Not Found Screen')).toBeTruthy();
	});
});

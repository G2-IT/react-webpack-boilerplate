import { render, screen } from '@react-webpack-boilerplate/tests';
import React from 'react';

import { Button } from '.';

describe('<Button/>', () => {
	it('It should have correct text', () => {
		render(<Button>Button</Button>);

		expect(screen.getByText('Button')).toBeTruthy();
	});
});

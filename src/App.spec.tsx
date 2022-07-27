import { render, screen } from '@testing-library/react';
import React from 'react';

import App from './App';

describe('<App/>', () => {
	it('It should contains correct text', () => {
		render(<App />);
		const text = screen.getByText('Hello React Webpack Boilerplate');
		expect(text).toBeInTheDocument();
	});
});

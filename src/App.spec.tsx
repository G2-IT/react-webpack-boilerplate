import React from 'react';

import App from './App';
import { render } from './tests';

describe('<App/>', () => {
	it('It should contains correct text', () => {
		const { container } = render(<App />);
		expect(container).toBeInTheDocument();
	});
});

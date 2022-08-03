import { ROUTER_PATHS } from '@react-webpack-boilerplate/infrastructure/navigation';
import React from 'react';
import { Link } from 'react-router-dom';

import { Form } from './components';

export const HomeView = () => {
	return (
		<div>
			<h1>Home View</h1>
			<nav>
				<Link to={ROUTER_PATHS.SIGN_IN}>Sign in</Link>
			</nav>

			<Form />
		</div>
	);
};

import SignInScreen from '@react-webpack-boilerplate/modules/authentication/screens/sign-in';
import HomeScreen from '@react-webpack-boilerplate/modules/home/screens/home';
import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { ROUTER_PATHS } from '.';
import NotFoundScreen from './not-found';

export const RouterConfig = () => {
	return (
		<Routes>
			<Route path={ROUTER_PATHS.ROOT}>
				<Route index element={<HomeScreen />} />

				<Route path={ROUTER_PATHS.SIGN_IN} element={<SignInScreen />} />

				<Route path="*" element={<NotFoundScreen />} />
			</Route>
		</Routes>
	);
};

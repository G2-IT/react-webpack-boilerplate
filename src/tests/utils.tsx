import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React, { ReactNode, ReactElement } from 'react';
import { MemoryRouter } from 'react-router-dom';

const customRender = (ui: ReactElement) => {
	const Wrapper = ({ children }: { children: ReactNode }) => {
		return <MemoryRouter>{children}</MemoryRouter>;
	};

	return render(ui, { wrapper: Wrapper });
};

export * from '@testing-library/react';

export { customRender as render, userEvent };

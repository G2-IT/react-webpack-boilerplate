import React, { PropsWithChildren } from 'react';

import { ButtonProps } from './button.types';

export const ButtonComponent = (props: PropsWithChildren<ButtonProps>) => {
	const { children, ...rest } = props;
	return <button {...rest}>{children}</button>;
};

import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import { act } from 'react-dom/test-utils';

import { Form } from '.';

describe('<Form/>', () => {
	test('It should not be able to add new participants when input is empty', () => {
		render(<Form />);

		const input = screen.getByPlaceholderText(
			'Insira os nomes dos participantes',
		);
		const button = screen.getByRole('button', { name: 'Adicionar' });

		expect(input).toBeInTheDocument();
		expect(button).toBeDisabled();
	});

	test('It should add a new participant if there is a name filled', () => {
		render(<Form />);

		const input = screen.getByPlaceholderText(
			'Insira os nomes dos participantes',
		);
		const button = screen.getByRole('button', { name: 'Adicionar' });

		fireEvent.change(input, {
			target: {
				value: 'Ana Catarina',
			},
		});
		fireEvent.click(button);

		expect(input).toHaveFocus();
		expect(input).toHaveValue('');
	});

	test('It should not be able to add duplicate names', () => {
		render(<Form />);

		const input = screen.getByPlaceholderText(
			'Insira os nomes dos participantes',
		);
		const button = screen.getByRole('button', { name: 'Adicionar' });

		fireEvent.change(input, {
			target: {
				value: 'Ana Catarina',
			},
		});

		fireEvent.click(button);

		fireEvent.change(input, {
			target: {
				value: 'Ana Catarina',
			},
		});

		fireEvent.click(button);

		const errorMessage = screen.getByRole('alert');

		expect(errorMessage.textContent).toBe(
			'Nomes duplicados não são permitidos!',
		);
	});

	test('It should go away error message after timers', () => {
		jest.useFakeTimers();
		render(<Form />);

		const input = screen.getByPlaceholderText(
			'Insira os nomes dos participantes',
		);
		const button = screen.getByRole('button', { name: 'Adicionar' });

		fireEvent.change(input, {
			target: {
				value: 'Ana Catarina',
			},
		});

		fireEvent.click(button);

		fireEvent.change(input, {
			target: {
				value: 'Ana Catarina',
			},
		});

		fireEvent.click(button);

		let errorMessage = screen.queryByRole('alert');
		expect(errorMessage).toBeInTheDocument();

		act(() => {
			jest.runAllTimers();
		});

		errorMessage = screen.queryByRole('alert');
		expect(errorMessage).toBeNull();
	});
});

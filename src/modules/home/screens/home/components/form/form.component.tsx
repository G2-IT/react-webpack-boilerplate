import { Button } from '@react-webpack-boilerplate/core/components/UI';
import React, { useState, useRef, FormEvent } from 'react';

export const FormComponent = () => {
	const [name, setName] = useState('');
	const [error, setError] = useState('');
	const [list, setList] = useState<string[]>([]);

	const inputRef = useRef<HTMLInputElement>(null);

	const addToTheList = () => {
		if (list.includes(name)) {
			setError('Nomes duplicados não são permitidos!');
			setTimeout(() => {
				setError('');
			}, 3000);
			return;
		}

		return setList(prevList => [...prevList, name]);
	};

	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		addToTheList();
		setName('');
		inputRef.current?.focus();
	};

	return (
		<form onSubmit={handleSubmit}>
			<input
				ref={inputRef}
				value={name}
				onChange={e => setName(e.target.value)}
				placeholder="Insira os nomes dos participantes"
			/>
			<Button disabled={!name}>Adicionar</Button>
			{error && <p role="alert">{error}</p>}
		</form>
	);
};

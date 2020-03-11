import React from 'react';
import './App.css';
import { useFetch } from './Hooks/useFetch';

export default () => {
	const { res, error, loading } = useFetch('https://api.kanye.rest');
	return (
		<div>
			<h1>Una vez Kanye nos dijo: </h1>
			<br />
			{loading ? (
				<h1>Cargando...</h1>
			) : error !== null ? (
				<h1>Hay un error: {error}</h1>
			) : (
				<h1>{res.quote}</h1>
			)}
		</div>
	);
};

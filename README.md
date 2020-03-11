# Custom Hook: useFetch

Hook personalizado para hacer fetch sencillos trayendo como respuesta JSON.

Esto es la **primera** versión que pruebo y uso, en un futuro puede ir cambiando he irla mejorando

```js
import { useState, useEffect } from 'react';

export const useFetch = (url, options = null) => {
	const [res, setRes] = useState(null);
	const [error, setError] = useState(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		(async () => {
			try {
				const response = await fetch(url, options);
				const json = await response.json();
				setRes(json);
				setLoading(false);
			} catch (e) {
				setError(e);
				setLoading(false);
			}
		})();
	}, []);

	return { res, error, loading };
};
```

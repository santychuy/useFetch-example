# Custom Hook: useFetch

Hook personalizado para hacer fetch sencillos trayendo como respuesta JSON.

Esto es la **primera** versión que pruebo y uso, en un futuro puede ir cambiando he irla mejorando

```js
import { useState, useEffect } from 'react';

export const useFetch = (url, options = null) => {
	const [state, setState] = useState({
		res: null,
		error: null,
		loading: true,
	});

	useEffect(() => {
		(async () => {
			try {
				const response = await fetch(url, options);
				const json = await response.json();
				setState({ res: json, error: null, loading: false });
			} catch (e) {
				setState({ res: null, error: e, loading: false });
			}
		})();
	}, []);

	return state;
};
```

import { useState } from 'react';
import routes from '../config/routes/route';
import { RouterProvider as Provider } from 'react-router-dom';

export const RouterProvider = () => {
	const [router] = useState(routes);
	return <Provider router={router} />;
};

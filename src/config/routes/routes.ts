import { createBrowserRouter } from 'react-router-dom';
import ScrollPortfolio from '../../pages/ScrollPortfolio';

const routes = createBrowserRouter([
	{
		path: '/',
		Component: ScrollPortfolio,
	},
	{
		path: '/experience',
		Component: ScrollPortfolio,
	},
	{
		path: '/projects',
		Component: ScrollPortfolio,
	},
	{
		path: '/skills',
		Component: ScrollPortfolio,
	},
]);

export default routes;

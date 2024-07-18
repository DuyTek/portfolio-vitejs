import { createBrowserRouter } from 'react-router-dom';
import PageLayout from '../../pages/layout/PageLayout';
import Projects from '../../pages/projects/Projects';
import Experience from '../../pages/experience/Experience';

const routes = createBrowserRouter([
	{
		path: '/',
		Component: PageLayout,
		children: [
			{
				path: '/projects',
				Component: Projects,
			},
			{
				path: '/experience',
				Component: Experience,
			},
		],
	},
]);

export default routes;

import AppProviders from './providers/AppProviders';

import { RouterProvider } from './providers/RouterProvider';

function App() {
	return (
		<AppProviders>
			<RouterProvider />
		</AppProviders>
	);
}

export default App;

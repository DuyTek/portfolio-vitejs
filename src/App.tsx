import { styled } from '@mui/material';

const AppContainer = styled('div')(({ theme }) => ({
	display: 'block',
	width: '100vw',
	height: '100vh',
	padding: theme.spacing(12),
}));

const Outer = styled('div')(() => ({
	background: '#fff3',
}));

function App() {
	return (
		<AppContainer>
			<Outer>Welcome</Outer>
		</AppContainer>
	);
}

export default App;

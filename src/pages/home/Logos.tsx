import { Stack, styled } from '@mui/material';
import { animated } from '@react-spring/web';

import { GithubLogo } from '../../logo';
import theme from '../../config/theme/theme';

// Constants
const LOGO_LISTS = [
	{
		top: 250,
		right: 100,
		name: 'Github',
		logo: GithubLogo,
	},
];

// Styled Components
const Container = styled(Stack)(() => ({
	borderRadius: '50%',
	flexDirection: 'row',
	height: 350,
	paddingTop: theme.spacing(1),
	width: 350,
}));

export const Logos = () => {
	return (
		<Container>
			{LOGO_LISTS.map(({ name, logo, ...others }) => (
				<animated.div
					key={name}
					style={{
						position: 'absolute',
						...others,
						// ...logoRotate,
					}}
				>
					{logo()}
				</animated.div>
			))}
		</Container>
	);
};

import { Stack, styled } from '@mui/material';
import { GithubLogo } from '../../logo';
import theme from '../../config/theme/theme';
import { animated } from '@react-spring/web';

const Container = styled(Stack)(() => ({
	flexDirection: 'row',
	height: 350,
	width: 350,
	borderRadius: '50%',
	paddingTop: theme.spacing(1),
}));

export const Logos = () => {
	const LOGO_LISTS = [
		{
			top: 250,
			right: 100,
			name: 'Github',
			logo: GithubLogo,
		},
	];
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

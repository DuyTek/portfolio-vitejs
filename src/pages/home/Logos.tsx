import { Stack, styled } from '@mui/material';
import { GithubLogo, ReactLogo, TypeScriptLogo, ViteLogo } from '../../logo';
import theme from '../../config/theme/theme';
import { useSpring, animated } from '@react-spring/web';

const Container = styled(Stack)(() => ({
	flexDirection: 'row',
	height: 350,
	width: 350,
	borderRadius: '50%',
	paddingTop: theme.spacing(1),
}));

export const Logos = () => {
	const logoRotate = useSpring({
		from: {
			rotate: 0,
		},
		to: {
			rotate: -360,
		},
		loop: true,
		config: {
			duration: 10000,
		},
	});
	const containerRotate = useSpring({
		from: {
			rotate: 0,
		},
		to: {
			rotate: 360,
		},
		loop: true,
		config: {
			duration: 10000,
		},
	});

	const LOGO_LISTS = [
		{
			top: 50,
			right: 100,
			name: 'React',
			logo: ReactLogo,
		},
		{
			top: 250,
			right: 100,
			name: 'Github',
			logo: GithubLogo,
		},
		{
			top: 50,
			left: 90,
			name: 'Vite',
			logo: ViteLogo,
		},
		{
			top: 250,
			left: 90,
			name: 'Typescript',
			logo: TypeScriptLogo,
		},
	];
	return (
		<Container>
			<animated.div style={containerRotate}>
				<Stack direction="row" position="relative">
					{LOGO_LISTS.map(({ name, logo, ...others }) => (
						<animated.div
							key={name}
							style={{
								position: 'absolute',
								...others,
								...logoRotate,
							}}
						>
							{logo()}
						</animated.div>
					))}
				</Stack>
			</animated.div>
		</Container>
	);
};

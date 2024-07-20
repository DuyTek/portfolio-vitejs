import { Slide, Stack, styled } from '@mui/material';
import { GithubLogo, ReactLogo, ViteLogo } from '../../logo';
import theme from '../../config/theme/theme';
import { useRef } from 'react';
const Container = styled(Stack)(() => ({
	flexDirection: 'row',
	height: 450,
	width: 'auto',
	borderRadius: '50%',
	paddingTop: theme.spacing(1),
}));

export const Logos = () => {
	const containerRef = useRef<HTMLDivElement>(null);
	return (
		<Container ref={containerRef}>
			<Slide container={containerRef.current} in>
				<Stack spacing={3} direction="row">
					<ReactLogo />
					<GithubLogo />
					<ViteLogo />
				</Stack>
			</Slide>
		</Container>
	);
};

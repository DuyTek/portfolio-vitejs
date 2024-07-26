import {
	Box,
	Collapse,
	CollapseProps,
	Stack,
	styled,
	Typography,
} from '@mui/material';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useSpring, animated } from '@react-spring/web';
import { constants } from '../../config/constants';

const CustomCollapse = ({ children, ...props }: CollapseProps) => (
	<Collapse
		orientation="horizontal"
		timeout={{
			appear: 5000,
			enter: 3000,
			exit: 2000,
		}}
		{...props}
	>
		{children}
	</Collapse>
);

const Name = styled(Typography)(({ theme }) => ({
	...theme.typography.h1,
	fontWeight: theme.typography.fontWeightBold,
	color: theme.palette.secondary.main,
}));

const Description = styled(Typography)(({ theme }) => ({
	maxWidth: 600,
	width: '100%',
	...theme.typography.body2,
	lineHeight: 2,
}));

const Title = styled(Typography)(({ theme }) => ({
	...theme.typography.h5,
	fontWeight: theme.typography.fontWeightLight,
}));

export default function Home() {
	const { pathname } = useLocation();
	const [checked, setChecked] = useState(false);

	useEffect(() => setChecked(true), [pathname]);
	const showDescription = useSpring({
		from: {
			translateY: 0,
			opacity: 0,
		},
		to: {
			translateY: 50,
			opacity: 1,
		},
		delay: 2000,
		config: {
			duration: 500,
		},
	});

	return (
		<Stack direction="column" spacing={10} height="100%">
			<CustomCollapse in={checked}>
				<Stack sx={{ minWidth: 600, justifyContent: 'space-between' }}>
					<Box>
						<Name>{constants.fullName.toUpperCase()}</Name>
						<Title>{constants.title.toLowerCase()}</Title>
					</Box>
				</Stack>
			</CustomCollapse>
			<animated.div style={{ ...showDescription }}>
				<Description>{constants.descriptions}</Description>
			</animated.div>
		</Stack>
	);
}

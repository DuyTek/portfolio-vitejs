import {
	Box,
	Button,
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
import ContactComponent from './Contacts';

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
	margin: theme.spacing(2, 0),
	width: '100%',
	...theme.typography.body2,
	lineHeight: 2,
}));

const Title = styled(Typography)(({ theme }) => ({
	...theme.typography.h6,
	fontWeight: theme.typography.fontWeightLight,
	letterSpacing: 1,
}));

export default function Home() {
	const { pathname } = useLocation();
	const [checked, setChecked] = useState(false);
	const [showContact, setShowContact] = useState(false);

	useEffect(() => setChecked(true), [pathname]);
	const showDescription = useSpring({
		from: {
			translateX: -50,
			opacity: 0,
		},
		to: {
			translateX: 0,
			opacity: 1,
		},
		delay: 2000,
		config: {
			duration: 500,
		},
	});

	return (
		<Stack direction="row">
			<Stack direction="column" spacing={10} height="100%">
				<CustomCollapse in={checked}>
					<Stack sx={{ minWidth: 600, justifyContent: 'space-between' }}>
						<Box>
							<Name>{constants.fullName.toUpperCase()}</Name>
							<Title>{constants.title}</Title>
						</Box>
					</Stack>
				</CustomCollapse>
				<animated.div style={{ ...showDescription }}>
					<Description>{constants.descriptions}</Description>
					<Stack direction="row" spacing={2} alignItems="center">
						<Button
							variant="outlined"
							fullWidth={false}
							onMouseEnter={() => setShowContact(true)}
						>
							Contact Me &#8690;
						</Button>
						{showContact && (
							<ContactComponent
								open={showContact}
								onMouseLeave={() => setShowContact(false)}
							/>
						)}
					</Stack>
				</animated.div>
			</Stack>
		</Stack>
	);
}

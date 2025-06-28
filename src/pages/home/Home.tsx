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
import SEO from '../../components/SEO';

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
	[theme.breakpoints.down('md')]: {
		...theme.typography.h2,
	},
	[theme.breakpoints.down('sm')]: {
		...theme.typography.h3,
	},
}));

const Description = styled(Typography)(({ theme }) => ({
	maxWidth: 600,
	margin: theme.spacing(2, 0),
	width: '100%',
	...theme.typography.body2,
	lineHeight: 2,
	[theme.breakpoints.down('md')]: {
		maxWidth: 500,
		...theme.typography.body1,
	},
	[theme.breakpoints.down('sm')]: {
		maxWidth: '100%',
		margin: theme.spacing(1.5, 0),
		lineHeight: 1.8,
	},
}));

const Title = styled(Typography)(({ theme }) => ({
	...theme.typography.h6,
	fontWeight: theme.typography.fontWeightLight,
	letterSpacing: 1,
	[theme.breakpoints.down('sm')]: {
		...theme.typography.subtitle1,
		letterSpacing: 0.5,
	},
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
		<>
			<SEO
				title="Home"
				description={`${constants.fullName} - ${constants.title}. ${constants.descriptions}`}
				keywords="Duy Nguyen, Software Developer, Portfolio, React, TypeScript, Java, Home"
			/>
			<Stack direction="row">
				<Stack
					direction="column"
					spacing={{ xs: 5, sm: 8, md: 10 }}
					height="100%"
				>
					<CustomCollapse in={checked}>
						<Stack
							sx={{
								minWidth: { xs: 'auto', sm: 400, md: 600 },
								justifyContent: 'space-between',
								width: '100%',
							}}
						>
							<Box>
								<Name>{constants.fullName.toUpperCase()}</Name>
								<Title>{constants.title}</Title>
							</Box>
						</Stack>
					</CustomCollapse>
					<animated.div style={{ ...showDescription }}>
						<Description>{constants.descriptions}</Description>
						<Stack
							direction={{ xs: 'column', sm: 'row' }}
							spacing={2}
							alignItems={{ xs: 'stretch', sm: 'center' }}
							sx={{ mt: 2 }}
						>
							<Button
								variant="outlined"
								onMouseEnter={() => setShowContact(true)}
								sx={{
									minHeight: { xs: 48, sm: 'auto' }, // Better touch target on mobile
									width: { xs: '100%', sm: 'auto' }, // Full width on mobile
								}}
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
		</>
	);
}

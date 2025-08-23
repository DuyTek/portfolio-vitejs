import {
	Box,
	Button,
	Stack,
	styled,
	Typography,
	Paper,
	ButtonProps,
} from '@mui/material';
import { useSpring, animated } from '@react-spring/web';
import { Link, To } from 'react-router-dom';

import { CONSTANTS } from '../../config/constants';
import ContactSpeedDial from './Contacts';
import SEO from '../../components/SEO';

// Styled Components
const Description = styled(Typography)(({ theme }) => ({
	color: theme.palette.text.primary,
	fontSize: '1.125rem',
	fontWeight: 400,
	letterSpacing: '0.005em',
	lineHeight: 1.8,
	margin: '0 auto',
	marginBottom: theme.spacing(2),
	maxWidth: '700px',
	textAlign: 'center',
	width: '100%',
	[theme.breakpoints.down('md')]: {
		fontSize: '1rem',
		lineHeight: 1.7,
		maxWidth: '600px',
	},
	[theme.breakpoints.down('sm')]: {
		fontSize: '0.875rem',
		lineHeight: 1.6,
		marginBottom: theme.spacing(1.5),
		maxWidth: '100%',
		padding: '0 8px',
	},
}));

const HeroContainer = styled(Paper)(({ theme }) => ({
	alignItems: 'center',
	background: 'var(--glass-strong)',
	WebkitBackdropFilter: 'blur(12px)',
	backdropFilter: 'blur(12px)',
	border: '1px solid var(--glass-border-strong)',
	borderRadius: '32px',
	boxShadow: `0 16px 40px rgba(0, 0, 0, 0.1), 0 8px 16px rgba(0, 0, 0, 0.06), inset 0 1px 0 var(--highlight-inner-strong)`,
	display: 'flex',
	flexDirection: 'column',
	justifyContent: 'center',
	margin: '0 auto',
	maxWidth: '900px',
	minHeight: '400px',
	padding: theme.spacing(6, 4),
	textAlign: 'center',
	width: '100%',
	[theme.breakpoints.down('md')]: {
		borderRadius: '24px',
		minHeight: '350px',
		padding: theme.spacing(4, 3),
	},
	[theme.breakpoints.down('sm')]: {
		borderRadius: '16px',
		minHeight: '300px',
		padding: theme.spacing(3, 2),
	},
}));

const LinkButton = styled(Button)<ButtonProps & { to: To }>({
	textDecoration: 'none',
});

const Name = styled(Typography)(({ theme }) => ({
	color: theme.palette.text.primary,
	fontSize: 'clamp(2.5rem, 8vw, 5.5rem)',
	fontWeight: 800,
	letterSpacing: '-0.02em',
	lineHeight: 1.1,
	marginBottom: theme.spacing(1.5),
	textAlign: 'center',
	textShadow: '0 1px 2px rgba(0, 0, 0, 0.1)',
	width: '100%',
	alignItems: 'center',
	display: 'flex',
	justifyContent: 'center',
	minHeight: '1.2em',
	minWidth: 'max-content',
	overflow: 'visible',
	whiteSpace: 'nowrap',
}));

const Title = styled(Typography)(({ theme }) => ({
	alignItems: 'center',
	color: theme.palette.text.secondary,
	display: 'flex',
	fontSize: 'clamp(1.125rem, 3vw, 1.5rem)',
	fontWeight: 500,
	justifyContent: 'center',
	letterSpacing: '0.01em',
	lineHeight: 1.6,
	marginBottom: theme.spacing(2),
	minHeight: '1.5em',
	textAlign: 'center',
	width: '100%',
}));

export default function Home() {
	const heroAnimation = useSpring({
		from: {
			opacity: 0,
			transform: 'translateY(30px) scale(0.98)',
		},
		to: {
			opacity: 1,
			transform: 'translateY(0px) scale(1)',
		},
		delay: 200,
		config: {
			tension: 300,
			friction: 30,
		},
	});

	const contentAnimation = useSpring({
		from: {
			opacity: 0,
			transform: 'translateY(20px)',
		},
		to: {
			opacity: 1,
			transform: 'translateY(0px)',
		},
		delay: 400,
		config: {
			tension: 280,
			friction: 25,
		},
	});

	return (
		<>
			<SEO
				title="Home"
				description={`${CONSTANTS.fullName} - ${CONSTANTS.title}. ${CONSTANTS.descriptions}`}
				keywords="Duy Nguyen, Software Developer, Portfolio, React, TypeScript, Java, Home"
			/>
			<Box
				sx={{
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
					width: '100%',
					height: '100%',
					padding: { xs: 2, sm: 3, md: 4 },
				}}
			>
				<animated.div style={{ ...heroAnimation, width: '100%' }}>
					<HeroContainer elevation={0}>
						<Box
							sx={{
								width: '100%',
								display: 'flex',
								flexDirection: 'column',
								alignItems: 'center',
								justifyContent: 'center',
							}}
						>
							<Name>{CONSTANTS.fullName}</Name>
							<Title>{CONSTANTS.title}</Title>
						</Box>

						<animated.div style={{ ...contentAnimation, width: '100%' }}>
							<Description>{CONSTANTS.descriptions}</Description>

							<Stack
								direction={{ xs: 'column', sm: 'row' }}
								spacing={2}
								justifyContent="center"
								alignItems="center"
								sx={{ mt: 4, width: '100%' }}
							>
								<LinkButton
									variant="contained"
									size="large"
									sx={{
										minWidth: { xs: '220px', sm: '180px' },
										minHeight: { xs: 52, sm: 48 },
									}}
									LinkComponent={Link}
									to="/projects"
								>
									View Projects
								</LinkButton>
							</Stack>
						</animated.div>
					</HeroContainer>
				</animated.div>
			</Box>

			<ContactSpeedDial />
		</>
	);
}

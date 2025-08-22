import { Box, Button, Stack, styled, Typography, Paper } from '@mui/material';
import { useState } from 'react';
import { useSpring, animated } from '@react-spring/web';
import { constants } from '../../config/constants';
import ContactComponent from './Contacts';
import SEO from '../../components/SEO';

// Glass Hero Container
const HeroContainer = styled(Paper)(({ theme }) => ({
	padding: theme.spacing(6, 4),
	borderRadius: '32px',
	background: 'var(--glass-strong)',
	backdropFilter: 'blur(12px)',
	WebkitBackdropFilter: 'blur(12px)',
	border: '1px solid var(--glass-border-strong)',
	boxShadow: `0 16px 40px rgba(0, 0, 0, 0.1), 0 8px 16px rgba(0, 0, 0, 0.06), inset 0 1px 0 var(--highlight-inner-strong)`,
	width: '100%',
	maxWidth: '900px',
	margin: '0 auto',
	textAlign: 'center',
	minHeight: '400px',
	display: 'flex',
	flexDirection: 'column',
	justifyContent: 'center',
	alignItems: 'center',
	[theme.breakpoints.down('md')]: {
		padding: theme.spacing(4, 3),
		borderRadius: '24px',
		minHeight: '350px',
	},
	[theme.breakpoints.down('sm')]: {
		padding: theme.spacing(3, 2),
		borderRadius: '16px',
		minHeight: '300px',
	},
}));

const Name = styled(Typography)(({ theme }) => ({
	fontSize: 'clamp(2.5rem, 8vw, 5.5rem)',
	fontWeight: 800,
	lineHeight: 1.1,
	letterSpacing: '-0.02em',
	color: theme.palette.text.primary,
	marginBottom: theme.spacing(1.5),
	textShadow: '0 1px 2px rgba(0, 0, 0, 0.1)',
	textAlign: 'center',
	width: '100%',
	minHeight: '1.2em',
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
	whiteSpace: 'nowrap',
	overflow: 'visible',
	minWidth: 'max-content',
}));

const Title = styled(Typography)(({ theme }) => ({
	fontSize: 'clamp(1.125rem, 3vw, 1.5rem)',
	fontWeight: 500,
	color: theme.palette.text.secondary,
	marginBottom: theme.spacing(2),
	letterSpacing: '0.01em',
	lineHeight: 1.6,
	textAlign: 'center',
	width: '100%',
	minHeight: '1.5em',
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
}));

const Description = styled(Typography)(({ theme }) => ({
	fontSize: '1.125rem',
	fontWeight: 400,
	lineHeight: 1.8,
	letterSpacing: '0.005em',
	color: theme.palette.text.primary,
	marginBottom: theme.spacing(2),
	maxWidth: '700px',
	margin: '0 auto',
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

export default function Home() {
	const [showContact, setShowContact] = useState(false);

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
				description={`${constants.fullName} - ${constants.title}. ${constants.descriptions}`}
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
							<Name>{constants.fullName}</Name>
							<Title>{constants.title}</Title>
						</Box>

						<animated.div style={{ ...contentAnimation, width: '100%' }}>
							<Description>{constants.descriptions}</Description>

							<Stack
								direction={{ xs: 'column', sm: 'row' }}
								spacing={2}
								justifyContent="center"
								alignItems="center"
								sx={{ mt: 4, width: '100%' }}
							>
								<Button
									variant="contained"
									size="large"
									sx={{
										minWidth: { xs: '220px', sm: '180px' },
										minHeight: { xs: 52, sm: 48 },
									}}
								>
									View Projects
								</Button>
								<Button
									variant="outlined"
									size="large"
									onMouseEnter={() => setShowContact(true)}
									onMouseLeave={() => setShowContact(false)}
									sx={{
										minWidth: { xs: '220px', sm: '180px' },
										minHeight: { xs: 52, sm: 48 },
									}}
								>
									Contact Me
								</Button>
							</Stack>

							{showContact && (
								<Box
									sx={{
										mt: 3,
										display: 'flex',
										justifyContent: 'center',
										width: '100%',
									}}
								>
									<ContactComponent
										open={showContact}
										onMouseLeave={() => setShowContact(false)}
									/>
								</Box>
							)}
						</animated.div>
					</HeroContainer>
				</animated.div>
			</Box>
		</>
	);
}

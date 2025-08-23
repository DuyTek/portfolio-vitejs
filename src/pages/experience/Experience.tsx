import {
	Timeline,
	TimelineItem,
	TimelineSeparator,
	TimelineConnector,
	TimelineContent,
	TimelineDot,
	TimelineOppositeContent,
} from '@mui/lab';
import { Box, Typography, useTheme, useMediaQuery } from '@mui/material';

import SEO from '../../components/SEO';

// Constants
const EXPERIENCES = [
	{
		title: 'Software Engineer',
		company: 'Katalon',
		duration: 'January 2024 - Present',
		description: [],
	},
	{
		title: 'Software Engineer Intern',
		company: 'Katalon',
		duration: 'July 2023 - January 2024 (7 months)',
		description: [
			'Develop queryable components which improves testing effort and accuracy',
			'Produce clean code and fast booking process, enhancing user experience and performance on different browsers',
			'Build autonomous workflows and CronJobs: code quality checking and task schedulers',
			'Collaborate with members and cross-functional teams in Agile approach',
		],
	},
];

export default function Experience() {
	const theme = useTheme();
	const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

	return (
		<>
			<SEO
				title="Experience"
				description="Duy Nguyen's professional work experience as a Software Engineer at Katalon. Expertise in development, testing automation, and cross-functional collaboration."
				keywords="Duy Nguyen Experience, Software Engineer, Katalon, Work Experience, Testing Automation, Development, Professional Background"
			/>
			<Box
				sx={{
					width: '100%',
					height: '100%',
					display: 'flex',
					flexDirection: 'column',
				}}
			>
				<Typography
					variant="h4"
					gutterBottom
					sx={{
						fontWeight: 600,
						mb: { xs: 2, sm: 3 },
						textAlign: 'center',
						color: 'primary.main',
					}}
				>
					Work Experience
				</Typography>
				<Box
					sx={{
						flex: 1,
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
						px: { xs: 1, sm: 2 },
					}}
				>
					<Box
						sx={{
							background: 'var(--glass-background)',
							backdropFilter: 'var(--glass-backdrop)',
							border: 'var(--glass-border)',
							borderRadius: 'var(--glass-border-radius)',
							p: { xs: 2, sm: 3 },
							maxWidth: '800px',
							width: '100%',
						}}
					>
						<Timeline
							position={isMobile ? 'right' : 'alternate'}
							sx={{
								[`& .MuiTimelineItem-root`]: {
									'&:before': {
										display: { xs: 'none', sm: 'block' },
									},
								},
								'& .MuiTimelineContent-root': {
									background: 'var(--glass-background)',
									backdropFilter: 'var(--glass-backdrop)',
									border: 'var(--glass-border)',
									borderRadius: 'var(--glass-border-radius)',
									p: 2,
									margin: '8px 0',
								},
								'& .MuiTimelineDot-root': {
									background: theme.palette.primary.main,
									border: `2px solid ${theme.palette.background.paper}`,
									boxShadow: '0 0 10px rgba(59, 130, 246, 0.5)',
								},
								'& .MuiTimelineConnector-root': {
									background: `linear-gradient(180deg, ${theme.palette.primary.main}40, ${theme.palette.primary.main}20)`,
								},
							}}
						>
							{EXPERIENCES.map((exp, index) => (
								<TimelineItem key={index}>
									{!isMobile && (
										<TimelineOppositeContent
											sx={{
												m: 'auto 0',
												color: 'text.secondary',
												fontWeight: 500,
											}}
											align="right"
											variant="body2"
										>
											{exp.duration}
										</TimelineOppositeContent>
									)}
									<TimelineSeparator>
										<TimelineConnector />
										<TimelineDot color="primary" />
										<TimelineConnector />
									</TimelineSeparator>
									<TimelineContent>
										<Typography
											variant="h6"
											component="h3"
											sx={{
												fontWeight: 600,
												color: 'primary.main',
												fontSize: { xs: '1rem', sm: '1.1rem' },
											}}
										>
											{exp.title}
										</Typography>
										<Typography
											variant="subtitle1"
											sx={{
												fontWeight: 500,
												color: 'text.primary',
												mb: 1,
												fontSize: { xs: '0.9rem', sm: '1rem' },
											}}
										>
											{exp.company}
										</Typography>
										{isMobile && (
											<Typography
												variant="body2"
												color="text.secondary"
												sx={{
													mb: 1.5,
													fontWeight: 500,
													fontSize: '0.8rem',
												}}
											>
												{exp.duration}
											</Typography>
										)}
										{exp.description.length > 0 && (
											<Box sx={{ mt: 1 }}>
												{exp.description.map((desc, i) => (
													<Typography
														key={i}
														variant="body2"
														sx={{
															color: 'text.secondary',
															mb: 0.5,
															fontSize: { xs: '0.8rem', sm: '0.875rem' },
															lineHeight: 1.4,
															position: 'relative',
															pl: 1.5,
															'&::before': {
																content: '"•"',
																position: 'absolute',
																left: 0,
																color: 'primary.main',
															},
														}}
													>
														{desc}
													</Typography>
												))}
											</Box>
										)}
									</TimelineContent>
								</TimelineItem>
							))}
						</Timeline>
					</Box>
				</Box>
			</Box>
		</>
	);
}

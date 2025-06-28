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

const experiences = [
	{
		title: 'Software Engineer',
		company: 'Katalon',
		duration: 'January 2024 - Present', //
		description: [],
	},
	{
		title: 'Software Engineer Intern',
		company: 'Katalon',
		duration: 'July 2023 - January 2024 (7 months)', //
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
			<Box>
				<Typography variant="h4" gutterBottom>
					Work Experience
				</Typography>
				<Timeline
					position={'right'}
					sx={{
						[`& .MuiTimelineItem-root`]: {
							'&:before': {
								display: { xs: 'none', sm: 'block' },
							},
						},
					}}
				>
					{experiences.map((exp, index) => (
						<TimelineItem key={index}>
							{!isMobile && (
								<TimelineOppositeContent
									sx={{ m: 'auto 0' }}
									align="right"
									variant="body2"
									color="text.secondary"
								>
									{exp.duration}
								</TimelineOppositeContent>
							)}
							<TimelineSeparator>
								<TimelineConnector />
								<TimelineDot color="primary" />
								<TimelineConnector />
							</TimelineSeparator>
							<TimelineContent sx={{ py: '12px', px: 2 }}>
								<Typography variant="h6" component="span">
									{exp.title}
								</Typography>
								<Typography>{exp.company}</Typography>
								{isMobile && (
									<Typography
										variant="body2"
										color="text.secondary"
										sx={{ mb: 1 }}
									>
										{exp.duration}
									</Typography>
								)}
								{exp.description.map((desc, i) => (
									<Typography key={i} variant="body2">
										- {desc}
									</Typography>
								))}
							</TimelineContent>
						</TimelineItem>
					))}
				</Timeline>
			</Box>
		</>
	);
}

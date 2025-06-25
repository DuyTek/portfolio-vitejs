import {
	Timeline,
	TimelineItem,
	TimelineSeparator,
	TimelineConnector,
	TimelineContent,
	TimelineDot,
	TimelineOppositeContent,
} from '@mui/lab';
import { Box, Typography } from '@mui/material';

const experiences = [
	{
		title: 'Software Engineer',
		company: 'Katalon',
		duration: 'January 2024 - Present', //
		description: [
			'Develop queryable components which improves testing effort and accuracy',
			'Produce clean code and fast booking process, enhancing user experience and performance on different browsers',
			'Build autonomous workflows and CronJobs: code quality checking and task schedulers',
			'Collaborate with members and cross-functional teams in Agile approach',
		],
	},
	{
		title: 'Software Engineer Intern',
		company: 'Katalon',
		duration: 'July 2023 - January 2024 (7 months)', //
		description: [],
	},
];

export default function Experience() {
	return (
		<Box>
			<Typography variant="h4" gutterBottom>
				Work Experience
			</Typography>
			<Timeline position="alternate">
				{experiences.map((exp, index) => (
					<TimelineItem key={index}>
						<TimelineOppositeContent
							sx={{ m: 'auto 0' }}
							align="right"
							variant="body2"
							color="text.secondary"
						>
							{exp.duration}
						</TimelineOppositeContent>
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
	);
}

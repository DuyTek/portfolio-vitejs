import {
	Typography,
	Box,
	Grid,
	Card,
	CardContent,
	CardHeader,
	Chip,
	Stack,
} from '@mui/material';

const projects = [
	{
		title: 'Furni Finders',
		role: 'Lead Developer',
		description: 'An e-commerce page that sells second-hand furnitures.', //
		techStack: [
			'Spring boot',
			'React.js',
			'Material UI',
			'Vite',
			'Postman',
			'git',
		], //
		tasks: [
			'Integrate and fetch API with secured credentials by Axios and JWT',
			"Design and refactor cloned interface to the team's project",
			'Planning and scheduling sprints in an Agile approach',
		],
		achievements: 'Learn Java web token mechanisms and develop APIs.', //
	},
	{
		title: 'APLY.',
		role: 'Developer',
		description:
			'An cloned version of resume.io which helps user build their resumes.', //
		techStack: [
			'Java',
			'MySQL',
			'Spring MVC',
			'HTML',
			'CSS',
			'JavaScript',
			'git',
		], //
		tasks: [
			'Build web features and pages: homepage, displaying templates, user login, exporting resumes.',
		],
		achievements: 'Apply a library for converting XHTML to PDF file.', //
	},
];

export default function Projects() {
	return (
		<Box>
			<Typography variant="h4" gutterBottom>
				Projects
			</Typography>
			<Grid container spacing={4}>
				{projects.map((project, index) => (
					<Grid size={{ xs: 12, md: 6 }} key={index}>
						<Card>
							<CardHeader
								sx={{ color: 'primary.main', fontWeight: 700 }}
								title={project.title}
								subheader={project.role}
							/>
							<CardContent>
								<Typography variant="body2" color="text.secondary">
									{project.description}
								</Typography>
								<Box sx={{ my: 2 }}>
									<Typography variant="subtitle1" gutterBottom>
										Tech Stack
									</Typography>
									<Stack direction="row" spacing={1} useFlexGap flexWrap="wrap">
										{project.techStack.map((tech) => (
											<Chip color="secondary" label={tech} key={tech} />
										))}
									</Stack>
								</Box>
								<Box sx={{ my: 2 }}>
									<Typography variant="subtitle1" gutterBottom>
										Tasks
									</Typography>
									{project.tasks.map((task, i) => (
										<Typography key={i} variant="body2">
											- {task}
										</Typography>
									))}
								</Box>
								<Typography variant="subtitle1" gutterBottom>
									Achievements
								</Typography>
								<Typography variant="body2">{project.achievements}</Typography>
							</CardContent>
						</Card>
					</Grid>
				))}
			</Grid>
		</Box>
	);
}

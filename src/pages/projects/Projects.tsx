import {
	Typography,
	Box,
	Grid,
	Card,
	CardContent,
	CardHeader,
	Chip,
	Stack,
	Link,
} from '@mui/material';

const projects = [
	{
		title: 'PowerAI - An AI-Powered Testing Assistant',
		role: 'Creator',
		description:
			'An AI-powered testing assistant that integrates with browsers to boost the speed and quality of automation scripts for web application testing.',
		techStack: [
			'React',
			'TypeScript',
			'Material UI',
			'Vite',
			'Flask',
			'Python',
			'LangChain',
			'Selenium WebDriver',
			'Playwright API',
			'GPT-4o',
			'Claude 3.5 Sonnet',
			'Gemini Flash',
		],
		tasks: [
			'Implemented RAG-based test generation with AI support.',
			'Created a user-friendly interface requiring minimal programming knowledge.',
			'Evaluated the performance of integrated LLMs.',
			'Developed a system to transform natural language test scenarios into executable Selenium test scripts.',
		],
		achievements:
			'Successfully created a platform that significantly reduces the time and effort required for test script creation and maintenance. The project serves as a bridge between natural language test scenarios and executable code.',
		sourceLink: 'https://github.com/DuyTek/powerai',
	},
	{
		title: 'Furni Finders',
		role: 'Lead Developer',
		description: 'An e-commerce page that sells second-hand furnitures.',
		techStack: [
			'Spring boot',
			'React.js',
			'Material UI',
			'Vite',
			'Postman',
			'git',
		],
		tasks: [
			'Integrate and fetch API with secured credentials by Axios and JWT',
			"Design and refactor cloned interface to the team's project",
			'Planning and scheduling sprints in an Agile approach',
		],
		achievements: 'Learn Java web token mechanisms and develop APIs.',
	},
	{
		title: 'APLY.',
		role: 'Developer',
		description:
			'An cloned version of resume.io which helps user build their resumes.',
		techStack: [
			'Java',
			'MySQL',
			'Spring MVC',
			'HTML',
			'CSS',
			'JavaScript',
			'git',
		],
		tasks: [
			'Build web features and pages: homepage, displaying templates, user login, exporting resumes.',
		],
		achievements: 'Apply a library for converting XHTML to PDF file.',
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
								title={
									<Link
										href={project.sourceLink}
										target="_blank"
										rel="noopener noreferrer"
										underline="hover"
									>
										{project.title}
									</Link>
								}
								subheader={project.role}
							/>
							<CardContent>
								<Typography variant="body2" color="text.secondary" gutterBottom>
									{project.description}
								</Typography>
								<Box sx={{ my: 2 }}>
									<Typography
										variant="subtitle1"
										gutterBottom
										sx={{ fontWeight: 'bold', color: 'primary' }}
									>
										Tasks
									</Typography>
									{project.tasks.map((task, i) => (
										<Typography key={i} variant="body2">
											- {task}
										</Typography>
									))}
								</Box>
								<Box sx={{ my: 2 }}>
									<Typography
										variant="subtitle1"
										gutterBottom
										sx={{ fontWeight: 'bold' }}
									>
										Achievements
									</Typography>
									<Typography variant="body2">
										{project.achievements}
									</Typography>
								</Box>
								<Box sx={{ mt: 4 }}>
									<Typography variant="caption" color="text.secondary">
										Tech Stack
									</Typography>
									<Stack
										direction="row"
										spacing={1}
										useFlexGap
										flexWrap="wrap"
										sx={{ mt: 1 }}
									>
										{project.techStack.map((tech) => (
											<Chip
												variant="outlined"
												color="info"
												size="small"
												label={tech}
												key={tech}
											/>
										))}
									</Stack>
								</Box>
							</CardContent>
						</Card>
					</Grid>
				))}
			</Grid>
		</Box>
	);
}

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
	IconButton,
	Collapse,
	useTheme,
} from '@mui/material';
import {
	ExpandMore as ExpandMoreIcon,
	GitHub as GitHubIcon,
} from '@mui/icons-material';
import { useState } from 'react';
import SEO from '../../components/SEO';

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
		sourceLink: 'https://github.com/DuyTek/FurniFinders',
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

interface ProjectCardProps {
	project: (typeof projects)[0];
}

function ProjectCard({ project }: ProjectCardProps) {
	const [expanded, setExpanded] = useState(false);
	const theme = useTheme();

	const handleExpandClick = () => {
		setExpanded(!expanded);
	};

	const handleGitHubClick = () => {
		if (project.sourceLink) {
			window.open(
				project.sourceLink,
				project.sourceLink,
				'noopener,noreferrer'
			);
		}
	};

	return (
		<Card>
			<CardHeader
				title={
					project.sourceLink ? (
						<Link
							href={project.sourceLink}
							target="_blank"
							rel="noopener noreferrer"
							underline="hover"
						>
							{project.title}
						</Link>
					) : (
						project.title
					)
				}
				subheader={project.role}
				action={
					<Box sx={{ display: 'flex', alignItems: 'center' }}>
						{project.sourceLink && (
							<IconButton
								onClick={handleGitHubClick}
								aria-label="view source code"
								sx={{
									color: 'white',
									mr: 1,
								}}
							>
								<GitHubIcon />
							</IconButton>
						)}
						<IconButton
							onClick={handleExpandClick}
							aria-expanded={expanded}
							aria-label="show more"
							sx={{
								transform: expanded ? 'rotate(180deg)' : 'rotate(0deg)',
								transition: theme.transitions.create('transform', {
									duration: theme.transitions.duration.shortest,
								}),
								color: 'white',
							}}
						>
							<ExpandMoreIcon />
						</IconButton>
					</Box>
				}
			/>
			<CardContent>
				<Typography variant="body2" color="text.secondary" gutterBottom>
					{project.description}
				</Typography>

				<Collapse in={expanded} timeout="auto" unmountOnExit>
					<Box sx={{ my: 2 }}>
						<Typography
							variant="subtitle1"
							gutterBottom
							sx={{
								fontWeight: 'bold',
								color: 'primary',
								fontSize: { xs: '0.875rem', sm: '1rem' },
							}}
						>
							Tasks
						</Typography>
						{project.tasks.map((task, i) => (
							<Typography
								key={i}
								variant="body2"
								sx={{
									fontSize: { xs: '0.75rem', sm: '0.875rem' },
									lineHeight: { xs: 1.4, sm: 1.5 },
									mb: 0.5,
								}}
							>
								- {task}
							</Typography>
						))}
					</Box>

					<Box sx={{ my: 2 }}>
						<Typography
							variant="subtitle1"
							gutterBottom
							sx={{
								fontWeight: 'bold',
								fontSize: { xs: '0.875rem', sm: '1rem' },
							}}
						>
							Achievements
						</Typography>
						<Typography
							variant="body2"
							sx={{
								fontSize: { xs: '0.75rem', sm: '0.875rem' },
								lineHeight: { xs: 1.4, sm: 1.5 },
							}}
						>
							{project.achievements}
						</Typography>
					</Box>

					<Box sx={{ mt: 4 }}>
						<Typography
							variant="caption"
							color="text.secondary"
							sx={{ fontSize: { xs: '0.7rem', sm: '0.75rem' } }}
						>
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
									sx={{
										fontSize: { xs: '0.6rem', sm: '0.75rem' },
										height: { xs: 20, sm: 24 },
									}}
								/>
							))}
						</Stack>
					</Box>
				</Collapse>
			</CardContent>
		</Card>
	);
}

export default function Projects() {
	return (
		<>
			<SEO
				title="Projects"
				description="Explore Duy Nguyen's software development projects including PowerAI, Furni Finders, and APLY. React, TypeScript, Java, and full-stack development projects."
				keywords="Duy Nguyen Projects, PowerAI, Software Projects, React Projects, TypeScript, Java Projects, Full-stack Development, Portfolio Projects"
			/>
			<Box>
				<Typography variant="h4" gutterBottom>
					Projects
				</Typography>
				<Grid container spacing={4}>
					{projects.map((project, index) => (
						<Grid size={{ xs: 12, md: 6 }} key={index}>
							<ProjectCard project={project} />
						</Grid>
					))}
				</Grid>
			</Box>
		</>
	);
}

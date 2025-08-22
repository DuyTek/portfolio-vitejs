import {
	Typography,
	Box,
	Grid,
	Card,
	CardContent,
	CardHeader,
	Chip,
	Stack,
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
		<Card
			elevation={0}
			sx={{
				background: 'var(--glass-background)',
				backdropFilter: 'var(--glass-backdrop)',
				border: 'var(--glass-border)',
				borderRadius: 'var(--glass-border-radius)',
				transition: 'all var(--transition-standard)',
				'&:hover': {
					transform: 'translateY(-2px)',
					boxShadow: 'var(--glass-shadow-elevated)',
				},
				height: '100%',
				display: 'flex',
				flexDirection: 'column',
			}}
		>
			<CardHeader
				title={
					<Typography
						variant="h6"
						sx={{
							fontSize: { xs: '1rem', sm: '1.1rem' },
							fontWeight: 600,
							lineHeight: 1.3,
							color: 'primary.main',
						}}
					>
						{project.title}
					</Typography>
				}
				subheader={
					<Typography
						variant="body2"
						sx={{
							fontSize: { xs: '0.8rem', sm: '0.875rem' },
							color: 'text.secondary',
							fontWeight: 500,
						}}
					>
						{project.role}
					</Typography>
				}
				action={
					<Box sx={{ display: 'flex', alignItems: 'center' }}>
						{project.sourceLink && (
							<IconButton
								onClick={handleGitHubClick}
								aria-label="view source code"
								size="small"
								sx={{
									color: 'text.primary',
									mr: 0.5,
									'&:hover': {
										color: 'primary.main',
									},
								}}
							>
								<GitHubIcon fontSize="small" />
							</IconButton>
						)}
						<IconButton
							onClick={handleExpandClick}
							aria-expanded={expanded}
							aria-label="show more"
							size="small"
							sx={{
								transform: expanded ? 'rotate(180deg)' : 'rotate(0deg)',
								transition: theme.transitions.create('transform', {
									duration: theme.transitions.duration.shortest,
								}),
								color: 'text.primary',
								'&:hover': {
									color: 'primary.main',
								},
							}}
						>
							<ExpandMoreIcon fontSize="small" />
						</IconButton>
					</Box>
				}
				sx={{
					pb: 1,
					'& .MuiCardHeader-content': {
						minWidth: 0,
					},
				}}
			/>
			<CardContent sx={{ flex: 1, pt: 0 }}>
				<Typography
					variant="body2"
					color="text.secondary"
					sx={{
						fontSize: { xs: '0.8rem', sm: '0.875rem' },
						lineHeight: 1.4,
						mb: 1.5,
						display: '-webkit-box',
						WebkitLineClamp: expanded ? 'none' : 3,
						WebkitBoxOrient: 'vertical',
						overflow: 'hidden',
					}}
				>
					{project.description}
				</Typography>

				{/* Always show a preview of tech stack */}
				<Box sx={{ mb: expanded ? 2 : 0 }}>
					<Stack direction="row" spacing={0.5} useFlexGap flexWrap="wrap">
						{project.techStack
							.slice(0, expanded ? project.techStack.length : 4)
							.map((tech) => (
								<Chip
									variant="outlined"
									color="primary"
									size="small"
									label={tech}
									key={tech}
									sx={{
										fontSize: { xs: '0.65rem', sm: '0.7rem' },
										height: { xs: 18, sm: 20 },
										'& .MuiChip-label': {
											px: 0.75,
										},
									}}
								/>
							))}
						{!expanded && project.techStack.length > 4 && (
							<Chip
								variant="outlined"
								size="small"
								label={`+${project.techStack.length - 4}`}
								sx={{
									fontSize: { xs: '0.65rem', sm: '0.7rem' },
									height: { xs: 18, sm: 20 },
									'& .MuiChip-label': {
										px: 0.75,
									},
									opacity: 0.7,
								}}
							/>
						)}
					</Stack>
				</Box>

				<Collapse in={expanded} timeout="auto" unmountOnExit>
					<Box sx={{ mt: 2 }}>
						<Typography
							variant="subtitle2"
							gutterBottom
							sx={{
								fontWeight: 600,
								color: 'primary.main',
								fontSize: { xs: '0.8rem', sm: '0.875rem' },
								mb: 1,
							}}
						>
							Key Tasks
						</Typography>
						{project.tasks.map((task, i) => (
							<Typography
								key={i}
								variant="body2"
								sx={{
									fontSize: { xs: '0.75rem', sm: '0.8rem' },
									lineHeight: 1.4,
									mb: 0.5,
									color: 'text.secondary',
									pl: 1,
									position: 'relative',
									'&::before': {
										content: '"•"',
										position: 'absolute',
										left: 0,
										color: 'primary.main',
									},
								}}
							>
								{task}
							</Typography>
						))}
					</Box>

					<Box sx={{ mt: 2 }}>
						<Typography
							variant="subtitle2"
							gutterBottom
							sx={{
								fontWeight: 600,
								color: 'primary.main',
								fontSize: { xs: '0.8rem', sm: '0.875rem' },
								mb: 1,
							}}
						>
							Achievements
						</Typography>
						<Typography
							variant="body2"
							sx={{
								fontSize: { xs: '0.75rem', sm: '0.8rem' },
								lineHeight: 1.4,
								color: 'text.secondary',
							}}
						>
							{project.achievements}
						</Typography>
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
			<Box
				sx={{
					width: '100%',
					height: '100%',
					display: 'flex',
					flexDirection: 'column',
					overflow: 'hidden',
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
					Projects
				</Typography>
				<Box
					sx={{
						flex: 1,
						overflow: 'auto',
						px: { xs: 1, sm: 2 },
						'&::-webkit-scrollbar': {
							width: '8px',
						},
						'&::-webkit-scrollbar-track': {
							background: 'var(--glass-background)',
							borderRadius: '4px',
						},
						'&::-webkit-scrollbar-thumb': {
							background: 'var(--glass-border-color)',
							borderRadius: '4px',
							'&:hover': {
								background: 'rgba(255, 255, 255, 0.3)',
							},
						},
					}}
				>
					<Grid container spacing={{ xs: 2, sm: 3 }} sx={{ pb: 2 }}>
						{projects.map((project, index) => (
							<Grid size={{ xs: 12, sm: 6, lg: 4 }} key={index}>
								<ProjectCard project={project} />
							</Grid>
						))}
					</Grid>
				</Box>
			</Box>
		</>
	);
}

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
	styled,
} from '@mui/material';
import {
	ExpandMore as ExpandMoreIcon,
	GitHub as GitHubIcon,
} from '@mui/icons-material';
import { useState } from 'react';

import SEO from '../../components/SEO';

// Styled components
const StyledCard = styled(Card)(() => ({
	background: 'var(--glass-background)',
	backdropFilter: 'var(--glass-backdrop)',
	border: 'var(--glass-border)',
	borderRadius: '16px',
	boxShadow: 'none',
	display: 'flex',
	flexDirection: 'column',
	height: '100%',
	transition: 'all var(--transition-standard)',
	'&:hover': {
		transform: 'translateY(-2px)',
	},
}));

const StyledCardHeader = styled(CardHeader)(({ theme }) => ({
	paddingBottom: theme.spacing(1),
	'& .MuiCardHeader-content': {
		minWidth: 0,
	},
}));

const StyledCardContent = styled(CardContent)(() => ({
	flex: 1,
	paddingTop: 0,
}));

const HeaderTitle = styled(Typography)(({ theme }) => ({
	color: theme.palette.primary.main,
	fontSize: '1rem',
	fontWeight: 600,
	lineHeight: 1.3,
	[theme.breakpoints.up('sm')]: {
		fontSize: '1.1rem',
	},
}));

const HeaderSubtitle = styled(Typography)(({ theme }) => ({
	color: theme.palette.text.secondary,
	fontSize: '0.8rem',
	fontWeight: 500,
	[theme.breakpoints.up('sm')]: {
		fontSize: '0.875rem',
	},
}));

const ActionBox = styled(Box)(() => ({
	alignItems: 'center',
	display: 'flex',
}));

const GitHubIconButton = styled(IconButton)(({ theme }) => ({
	color: theme.palette.text.primary,
	marginRight: theme.spacing(0.5),
	'&:hover': {
		color: theme.palette.primary.main,
	},
}));

const ExpandIconButton = styled(IconButton, {
	shouldForwardProp: (prop) => prop !== 'expanded',
})<{ expanded: boolean }>(({ theme, expanded }) => ({
	color: theme.palette.text.primary,
	transform: expanded ? 'rotate(180deg)' : 'rotate(0deg)',
	transition: theme.transitions.create('transform', {
		duration: theme.transitions.duration.shortest,
	}),
	'&:hover': {
		color: theme.palette.primary.main,
	},
}));

const DescriptionText = styled(Typography, {
	shouldForwardProp: (prop) => prop !== 'expanded',
})<{ expanded: boolean }>(({ theme, expanded }) => ({
	color: theme.palette.text.secondary,
	display: '-webkit-box',
	fontSize: '0.8rem',
	lineHeight: 1.4,
	marginBottom: theme.spacing(1.5),
	overflow: 'hidden',
	WebkitBoxOrient: 'vertical',
	WebkitLineClamp: expanded ? 'none' : 3,
	[theme.breakpoints.up('sm')]: {
		fontSize: '0.875rem',
	},
}));

const TechStackBox = styled(Box, {
	shouldForwardProp: (prop) => prop !== 'expanded',
})<{ expanded: boolean }>(({ theme, expanded }) => ({
	marginBottom: expanded ? theme.spacing(2) : 0,
}));

const TechChip = styled(Chip)(({ theme }) => ({
	fontSize: '0.65rem',
	height: 18,
	'& .MuiChip-label': {
		paddingLeft: theme.spacing(0.75),
		paddingRight: theme.spacing(0.75),
	},
	[theme.breakpoints.up('sm')]: {
		fontSize: '0.7rem',
		height: 20,
	},
}));

const MoreChip = styled(Chip)(({ theme }) => ({
	fontSize: '0.65rem',
	height: 18,
	opacity: 0.7,
	'& .MuiChip-label': {
		paddingLeft: theme.spacing(0.75),
		paddingRight: theme.spacing(0.75),
	},
	[theme.breakpoints.up('sm')]: {
		fontSize: '0.7rem',
		height: 20,
	},
}));

const CollapseBox = styled(Box)(({ theme }) => ({
	marginTop: theme.spacing(2),
}));

const SectionTitle = styled(Typography)(({ theme }) => ({
	color: theme.palette.primary.main,
	fontSize: '0.8rem',
	fontWeight: 600,
	marginBottom: theme.spacing(1),
	[theme.breakpoints.up('sm')]: {
		fontSize: '0.875rem',
	},
}));

const TaskText = styled(Typography)(({ theme }) => ({
	color: theme.palette.text.secondary,
	fontSize: '0.75rem',
	lineHeight: 1.4,
	marginBottom: theme.spacing(0.5),
	paddingLeft: theme.spacing(1),
	position: 'relative',
	'&::before': {
		color: theme.palette.primary.main,
		content: '"•"',
		left: 0,
		position: 'absolute',
	},
	[theme.breakpoints.up('sm')]: {
		fontSize: '0.8rem',
	},
}));

const AchievementText = styled(Typography)(({ theme }) => ({
	color: theme.palette.text.secondary,
	fontSize: '0.75rem',
	lineHeight: 1.4,
	[theme.breakpoints.up('sm')]: {
		fontSize: '0.8rem',
	},
}));

const ProjectsContainer = styled(Box)(() => ({
	display: 'flex',
	flexDirection: 'column',
	height: '100%',
	overflow: 'hidden',
	width: '100%',
}));

const ProjectsTitle = styled(Typography)(({ theme }) => ({
	color: theme.palette.primary.main,
	fontWeight: 600,
	marginBottom: theme.spacing(2),
	textAlign: 'center',
	[theme.breakpoints.up('sm')]: {
		marginBottom: theme.spacing(3),
	},
}));

const ScrollableBox = styled(Box)(({ theme }) => ({
	flex: 1,
	overflow: 'auto',
	paddingLeft: theme.spacing(1),
	paddingRight: theme.spacing(1),
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
	[theme.breakpoints.up('sm')]: {
		paddingLeft: theme.spacing(2),
		paddingRight: theme.spacing(2),
	},
}));

const ProjectsGrid = styled(Grid)(({ theme }) => ({
	paddingBottom: theme.spacing(2),
}));

// Constants
const PROJECTS = [
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
	project: (typeof PROJECTS)[0];
}

function ProjectCard({ project }: ProjectCardProps) {
	const [expanded, setExpanded] = useState(false);

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
		<StyledCard elevation={0}>
			<StyledCardHeader
				title={<HeaderTitle variant="h6">{project.title}</HeaderTitle>}
				subheader={
					<HeaderSubtitle variant="body2">{project.role}</HeaderSubtitle>
				}
				action={
					<ActionBox>
						{project.sourceLink && (
							<GitHubIconButton
								onClick={handleGitHubClick}
								aria-label="view source code"
								size="small"
							>
								<GitHubIcon fontSize="small" />
							</GitHubIconButton>
						)}
						<ExpandIconButton
							onClick={handleExpandClick}
							aria-expanded={expanded}
							aria-label="show more"
							size="small"
							expanded={expanded}
						>
							<ExpandMoreIcon fontSize="small" />
						</ExpandIconButton>
					</ActionBox>
				}
			/>
			<StyledCardContent>
				<DescriptionText variant="body2" expanded={expanded}>
					{project.description}
				</DescriptionText>

				{/* Always show a preview of tech stack */}
				<TechStackBox expanded={expanded}>
					<Stack direction="row" spacing={0.5} useFlexGap flexWrap="wrap">
						{project.techStack
							.slice(0, expanded ? project.techStack.length : 4)
							.map((tech) => (
								<TechChip
									variant="outlined"
									color="primary"
									size="small"
									label={tech}
									key={tech}
								/>
							))}
						{!expanded && project.techStack.length > 4 && (
							<MoreChip
								variant="outlined"
								size="small"
								label={`+${project.techStack.length - 4}`}
							/>
						)}
					</Stack>
				</TechStackBox>

				<Collapse in={expanded} timeout="auto" unmountOnExit>
					<CollapseBox>
						<SectionTitle variant="subtitle2" gutterBottom>
							Key Tasks
						</SectionTitle>
						{project.tasks.map((task, i) => (
							<TaskText key={i} variant="body2">
								{task}
							</TaskText>
						))}
					</CollapseBox>

					<CollapseBox>
						<SectionTitle variant="subtitle2" gutterBottom>
							Achievements
						</SectionTitle>
						<AchievementText variant="body2">
							{project.achievements}
						</AchievementText>
					</CollapseBox>
				</Collapse>
			</StyledCardContent>
		</StyledCard>
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
			<ProjectsContainer>
				<ProjectsTitle variant="h4" gutterBottom>
					Projects
				</ProjectsTitle>
				<ScrollableBox>
					<ProjectsGrid container spacing={{ xs: 2, sm: 3 }}>
						{PROJECTS.map((project, index) => (
							<Grid size={{ xs: 12, sm: 6, lg: 4 }} key={index}>
								<ProjectCard project={project} />
							</Grid>
						))}
					</ProjectsGrid>
				</ScrollableBox>
			</ProjectsContainer>
		</>
	);
}

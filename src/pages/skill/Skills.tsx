import { Typography, Box, Chip, styled } from '@mui/material';
import { useState, useEffect } from 'react';
import { animated, useSpring } from '@react-spring/web';

import SEO from '../../components/SEO';

// Constants
const ALL_SKILLS = {
	'Frameworks & Libraries': ['React.js', 'Quarkus', 'Node.js', 'NextJs'],
	'Programming Languages': [
		'Java',
		'JavaScript',
		'TypeScript',
		'Python',
		'HTML',
		'CSS',
	],
	Databases: ['PostgreSQL', 'MySQL', 'MongoDB'],
	'Development Tools': ['Git', 'GitHub', 'Vite', 'Webpack', 'npm'],
	'Testing & Quality': ['Vitest', 'Jest', 'Playwright', 'ESLint', 'Prettier'],
	'Cloud & DevOps': ['GitHub Actions', 'CI/CD'],
	Communication: ['Documentation', 'Presentation', 'Cross-team Collaboration'],
	'Project Management': ['Agile', 'Scrum'],
	Languages: ['English (IELTS 7.0)', 'Vietnamese (Native)'],
	'Design & Tools': [
		'Figma',
		'UI/UX Design',
		'Responsive Design',
		'Accessibility',
	],
	'Office & Productivity': ['Google Workspace', 'Microsoft Office', 'Slack'],
};

// Styled Components
const CategoryTitle = styled(Typography)(({ theme }) => ({
	color: theme.palette.primary.main,
	fontSize: '1.1rem',
	fontWeight: 600,
	marginBottom: theme.spacing(2),
	[theme.breakpoints.down('sm')]: {
		fontSize: '1rem',
		marginBottom: theme.spacing(1.5),
	},
}));

const ColumnContent = styled(Box)({
	position: 'relative',
	zIndex: 1,
});

const GlassChip = styled(Chip)(({ theme }) => ({
	WebkitBackdropFilter: 'blur(8px)',
	background: 'var(--glass-subtle)',
	backdropFilter: 'blur(8px)',
	border: '1px solid var(--glass-border-subtle)',
	borderRadius: '12px',
	color: theme.palette.text.primary,
	fontSize: '0.875rem',
	fontWeight: 500,
	margin: theme.spacing(0.5, 0.5, 0.5, 0),
	transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
	'& .MuiChip-label': {
		padding: theme.spacing(0, 1.5),
	},
	'&:hover': {
		WebkitBackdropFilter: 'blur(10px)',
		backdropFilter: 'blur(10px)',
		borderColor: theme.palette.primary.main,
		boxShadow: `
			0 4px 12px rgba(99, 179, 237, 0.2), 
			0 2px 6px rgba(99, 179, 237, 0.1),
			inset 0 1px 0 var(--highlight-inner)
		`,
		color: theme.palette.primary.main,
		transform: 'translateY(-2px)',
	},
	[theme.breakpoints.down('sm')]: {
		borderRadius: '10px',
		fontSize: '0.75rem',
		'& .MuiChip-label': {
			padding: theme.spacing(0, 1),
		},
	},
}));

const LeftColumn = styled(Box)(({ theme }) => ({
	WebkitBackdropFilter: 'blur(12px)',
	background: `linear-gradient(135deg, 
		var(--glass-subtle) 0%, 
		var(--glass-primary) 50%, 
		transparent 100%
	)`,
	backdropFilter: 'blur(12px)',
	borderRadius: '20px 10px 10px 20px',
	display: 'flex',
	flexDirection: 'column',
	justifyContent: 'center',
	padding: theme.spacing(4),
	position: 'relative',
	[theme.breakpoints.down('md')]: {
		background: `linear-gradient(180deg, 
			var(--glass-subtle) 0%, 
			var(--glass-primary) 50%, 
			transparent 100%
		)`,
		borderRadius: '16px 16px 0 0',
		padding: theme.spacing(3),
	},
	[theme.breakpoints.down('sm')]: {
		borderRadius: '12px 12px 0 0',
		padding: theme.spacing(2),
	},
}));

const RightColumn = styled(Box)(({ theme }) => ({
	WebkitBackdropFilter: 'blur(12px)',
	background: `linear-gradient(225deg, 
		var(--glass-subtle) 0%, 
		var(--glass-primary) 50%, 
		transparent 100%
	)`,
	backdropFilter: 'blur(12px)',
	borderRadius: '10px 20px 20px 10px',
	display: 'flex',
	flexDirection: 'column',
	justifyContent: 'center',
	padding: theme.spacing(4),
	position: 'relative',
	[theme.breakpoints.down('md')]: {
		background: `linear-gradient(0deg, 
			var(--glass-subtle) 0%, 
			var(--glass-primary) 50%, 
			transparent 100%
		)`,
		borderRadius: '0 0 16px 16px',
		padding: theme.spacing(3),
	},
	[theme.breakpoints.down('sm')]: {
		borderRadius: '0 0 12px 12px',
		padding: theme.spacing(2),
	},
}));

const SkillsContainer = styled(Box)(({ theme }) => ({
	WebkitBackdropFilter: 'blur(16px)',
	background: 'var(--glass-primary)',
	backdropFilter: 'blur(16px)',
	border: '1px solid var(--glass-border)',
	borderRadius: '20px',
	boxShadow: `
		0 8px 32px rgba(0, 0, 0, 0.1), 
		0 4px 16px rgba(0, 0, 0, 0.05), 
		inset 0 1px 0 var(--highlight-inner)
	`,
	display: 'grid',
	gridTemplateColumns: '1fr 1fr',
	margin: '0 auto',
	maxWidth: '1200px',
	minHeight: '200px',
	overflow: 'hidden',
	padding: 0,
	position: 'relative',
	transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
	width: '100%',
	[theme.breakpoints.down('md')]: {
		borderRadius: '16px',
		gridTemplateColumns: '1fr',
		minHeight: '200px',
	},
	[theme.breakpoints.down('sm')]: {
		borderRadius: '12px',
		minHeight: '150px',
	},
}));

const SkillCategoryBox = styled(Box)(({ theme }) => ({
	marginBottom: theme.spacing(3),
}));

const SkillChipContainer = styled(Box)(({ theme }) => ({
	display: 'flex',
	flexWrap: 'wrap',
	gap: theme.spacing(0.5),
}));

const SkillsPageContainer = styled(Box)(({ theme }) => ({
	display: 'flex',
	justifyContent: 'center',
	padding: theme.spacing(2),
	[theme.breakpoints.up('sm')]: {
		padding: theme.spacing(3),
	},
	[theme.breakpoints.up('md')]: {
		padding: theme.spacing(4),
	},
}));

const Skills = () => {
	const [leftSkills, setLeftSkills] = useState<Record<string, string[]>>({});
	const [rightSkills, setRightSkills] = useState<Record<string, string[]>>({});

	useEffect(() => {
		const categories = Object.keys(ALL_SKILLS);
		const midPoint = Math.ceil(categories.length / 2);

		const leftCategories = categories.slice(0, midPoint);
		const rightCategories = categories.slice(midPoint);

		const leftSkillsObj = leftCategories.reduce((acc, category) => {
			acc[category] = ALL_SKILLS[category as keyof typeof ALL_SKILLS];
			return acc;
		}, {} as Record<string, string[]>);

		const rightSkillsObj = rightCategories.reduce((acc, category) => {
			acc[category] = ALL_SKILLS[category as keyof typeof ALL_SKILLS];
			return acc;
		}, {} as Record<string, string[]>);

		setLeftSkills(leftSkillsObj);
		setRightSkills(rightSkillsObj);
	}, []);

	const skillsAnimation = useSpring({
		from: { opacity: 0, transform: 'translateY(30px)' },
		to: { opacity: 1, transform: 'translateY(0px)' },
		delay: 300,
		config: {
			tension: 280,
			friction: 60,
		},
	});

	const renderSkillCategory = (category: string, skills: string[]) => (
		<SkillCategoryBox key={category}>
			<CategoryTitle variant="h6">{category}</CategoryTitle>
			<SkillChipContainer>
				{skills.map((skill) => (
					<animated.div key={skill} style={skillsAnimation}>
						<GlassChip label={skill} size="small" />
					</animated.div>
				))}
			</SkillChipContainer>
		</SkillCategoryBox>
	);

	return (
		<>
			<SEO
				title="Skills & Technologies"
				description="Technical skills and expertise including programming languages, frameworks, tools, and methodologies."
				keywords="skills, programming, technologies, frameworks, tools"
			/>
			<SkillsPageContainer>
				<animated.div style={{ ...skillsAnimation, width: '100%' }}>
					<SkillsContainer>
						<LeftColumn>
							<ColumnContent>
								{Object.entries(leftSkills).map(([category, skills]) =>
									renderSkillCategory(category, skills)
								)}
							</ColumnContent>
						</LeftColumn>

						<RightColumn>
							<ColumnContent>
								{Object.entries(rightSkills).map(([category, skills]) =>
									renderSkillCategory(category, skills)
								)}
							</ColumnContent>
						</RightColumn>
					</SkillsContainer>
				</animated.div>
			</SkillsPageContainer>
		</>
	);
};

export default Skills;

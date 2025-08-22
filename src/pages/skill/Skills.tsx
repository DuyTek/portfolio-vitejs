import { Typography, Box, Chip, styled } from '@mui/material';
import { useState, useEffect } from 'react';
import { animated, useSpring } from '@react-spring/web';
import SEO from '../../components/SEO';

// Combined skills data
const allSkills = {
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

// Two-column Liquid Glass Skills Container with gradient blend
const SkillsContainer = styled(Box)(({ theme }) => ({
	background: 'var(--glass-primary)',
	backdropFilter: 'blur(16px)',
	WebkitBackdropFilter: 'blur(16px)',
	border: '1px solid var(--glass-border)',
	borderRadius: '20px',
	padding: 0, // Remove padding to allow column-specific padding
	boxShadow: `
		0 8px 32px rgba(0, 0, 0, 0.1), 
		0 4px 16px rgba(0, 0, 0, 0.05), 
		inset 0 1px 0 var(--highlight-inner)
	`,
	transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
	width: '100%',
	maxWidth: '1200px',
	margin: '0 auto',
	position: 'relative',
	minHeight: '200px',
	overflow: 'hidden',
	display: 'grid',
	gridTemplateColumns: '1fr 1fr',
	[theme.breakpoints.down('md')]: {
		borderRadius: '16px',
		minHeight: '200px',
		gridTemplateColumns: '1fr', // Stack on mobile
	},
	[theme.breakpoints.down('sm')]: {
		borderRadius: '12px',
		minHeight: '150px',
	},
}));

// Left column with subtle gradient
const LeftColumn = styled(Box)(({ theme }) => ({
	padding: theme.spacing(4),
	background: `linear-gradient(135deg, 
		var(--glass-subtle) 0%, 
		var(--glass-primary) 50%, 
		transparent 100%
	)`,
	backdropFilter: 'blur(12px)',
	WebkitBackdropFilter: 'blur(12px)',
	borderRadius: '20px 10px 10px 20px',
	position: 'relative',
	display: 'flex',
	flexDirection: 'column',
	justifyContent: 'center',
	[theme.breakpoints.down('md')]: {
		padding: theme.spacing(3),
		borderRadius: '16px 16px 0 0',
		background: `linear-gradient(180deg, 
			var(--glass-subtle) 0%, 
			var(--glass-primary) 50%, 
			transparent 100%
		)`,
	},
	[theme.breakpoints.down('sm')]: {
		padding: theme.spacing(2),
		borderRadius: '12px 12px 0 0',
	},
}));

// Right column with complementary gradient
const RightColumn = styled(Box)(({ theme }) => ({
	padding: theme.spacing(4),
	background: `linear-gradient(225deg, 
		var(--glass-subtle) 0%, 
		var(--glass-primary) 50%, 
		transparent 100%
	)`,
	backdropFilter: 'blur(12px)',
	WebkitBackdropFilter: 'blur(12px)',
	borderRadius: '10px 20px 20px 10px',
	position: 'relative',
	display: 'flex',
	flexDirection: 'column',
	justifyContent: 'center',
	[theme.breakpoints.down('md')]: {
		padding: theme.spacing(3),
		borderRadius: '0 0 16px 16px',
		background: `linear-gradient(0deg, 
			var(--glass-subtle) 0%, 
			var(--glass-primary) 50%, 
			transparent 100%
		)`,
	},
	[theme.breakpoints.down('sm')]: {
		padding: theme.spacing(2),
		borderRadius: '0 0 12px 12px',
	},
}));

// Column content wrapper
const ColumnContent = styled(Box)({
	position: 'relative',
	zIndex: 1,
});

// Liquid Glass Chip
const GlassChip = styled(Chip)(({ theme }) => ({
	background: 'var(--glass-subtle)',
	backdropFilter: 'blur(8px)',
	WebkitBackdropFilter: 'blur(8px)',
	border: '1px solid var(--glass-border-subtle)',
	color: theme.palette.text.primary,
	fontSize: '0.875rem',
	fontWeight: 500,
	borderRadius: '12px',
	padding: theme.spacing(0.5, 0.5),
	boxShadow: `
		0 2px 8px rgba(0, 0, 0, 0.08), 
		0 1px 4px rgba(0, 0, 0, 0.04),
		inset 0 1px 0 var(--highlight-inner-subtle)
	`,
	transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
	'& .MuiChip-label': {
		padding: theme.spacing(0, 1.5),
		fontWeight: 500,
	},
	'&:hover': {
		background: 'var(--glass-primary)',
		borderColor: theme.palette.primary.main,
		color: theme.palette.primary.main,
		transform: 'translateY(-2px)',
		boxShadow: `
			0 4px 12px rgba(99, 179, 237, 0.2), 
			0 2px 6px rgba(99, 179, 237, 0.1),
			inset 0 1px 0 var(--highlight-inner)
		`,
	},
	[theme.breakpoints.down('sm')]: {
		fontSize: '0.75rem',
		borderRadius: '10px',
		'& .MuiChip-label': {
			padding: theme.spacing(0, 1),
		},
	},
}));

// Category Title
const CategoryTitle = styled(Typography)(({ theme }) => ({
	fontWeight: 600,
	color: theme.palette.primary.main,
	marginBottom: theme.spacing(2),
	fontSize: '1.1rem',
	[theme.breakpoints.down('sm')]: {
		fontSize: '1rem',
		marginBottom: theme.spacing(1.5),
	},
}));

export default function Skills() {
	const skillsEntries = Object.entries(allSkills);
	const [leftColumnIndex, setLeftColumnIndex] = useState(0);
	const [rightColumnIndex, setRightColumnIndex] = useState(1);
	const [isVisible, setIsVisible] = useState(true);

	// Auto-cycle through skills every 5 seconds with fade effect
	useEffect(() => {
		// Function to get two different random skill sets
		const getTwoRandomSkillSets = () => {
			const availableIndices = [...Array(skillsEntries.length).keys()];

			// Shuffle array
			for (let i = availableIndices.length - 1; i > 0; i--) {
				const j = Math.floor(Math.random() * (i + 1));
				[availableIndices[i], availableIndices[j]] = [
					availableIndices[j],
					availableIndices[i],
				];
			}

			return [availableIndices[0], availableIndices[1]];
		};

		const interval = setInterval(() => {
			// Start fade out
			setIsVisible(false);

			// After fade out completes, change content and fade in
			setTimeout(() => {
				const [newLeft, newRight] = getTwoRandomSkillSets();
				setLeftColumnIndex(newLeft);
				setRightColumnIndex(newRight);
				setIsVisible(true);
			}, 300);
		}, 5000);

		return () => clearInterval(interval);
	}, [skillsEntries.length]);

	// Spring animation for fade in/out
	const fadeAnimation = useSpring({
		opacity: isVisible ? 1 : 0,
		transform: isVisible ? 'translateY(0px)' : 'translateY(20px)',
		config: {
			tension: 300,
			friction: 25,
		},
	});

	const leftSkillSet = skillsEntries[leftColumnIndex];
	const rightSkillSet = skillsEntries[rightColumnIndex];

	// Render column content
	const renderColumn = (
		[category, skills]: [string, string[]],
		isLeft: boolean
	) => (
		<ColumnContent>
			<CategoryTitle variant="h6" sx={{ textAlign: 'center', mb: 3 }}>
				{category}
			</CategoryTitle>
			<Box
				sx={{
					display: 'flex',
					flexWrap: 'wrap',
					gap: { xs: 1, sm: 1.5 },
					alignItems: 'center',
					justifyContent: 'center',
				}}
			>
				{skills.map((skill, index) => (
					<GlassChip
						key={skill}
						label={skill}
						sx={{
							animationDelay: `${index * 0.05 + (isLeft ? 0 : 0.2)}s`,
							animation: isVisible ? 'fadeInUp 0.4s ease-out forwards' : 'none',
							opacity: isVisible ? 0 : 1,
							'@keyframes fadeInUp': {
								from: {
									opacity: 0,
									transform: 'translateY(8px)',
								},
								to: {
									opacity: 1,
									transform: 'translateY(0)',
								},
							},
						}}
					/>
				))}
			</Box>
		</ColumnContent>
	);

	return (
		<>
			<SEO
				title="Skills"
				description="Duy Nguyen's comprehensive skills including programming languages, frameworks, tools, and soft skills. Full-stack development expertise."
				keywords="Duy Nguyen Skills, Programming Languages, React.js, Java, TypeScript, Full-stack Development, Technical Skills"
			/>
			<Box
				sx={{
					width: '100%',
					height: '100%',
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
					justifyContent: 'center',
					p: { xs: 2, sm: 3, md: 4 },
				}}
			>
				<Typography
					variant="h4"
					gutterBottom
					sx={{
						fontWeight: 700,
						mb: { xs: 3, sm: 4 },
						textAlign: 'center',
						color: 'primary.main',
						fontSize: { xs: '1.75rem', sm: '2rem', md: '2.25rem' },
					}}
				>
					Skills & Expertise
				</Typography>

				<SkillsContainer>
					<LeftColumn>
						<animated.div style={fadeAnimation}>
							{leftSkillSet && renderColumn(leftSkillSet, true)}
						</animated.div>
					</LeftColumn>

					<RightColumn>
						<animated.div style={fadeAnimation}>
							{rightSkillSet && renderColumn(rightSkillSet, false)}
						</animated.div>
					</RightColumn>
				</SkillsContainer>
			</Box>
		</>
	);
}

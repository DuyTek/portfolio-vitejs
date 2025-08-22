import { Typography, Box, Chip, IconButton } from '@mui/material';
import { ChevronLeft, ChevronRight } from '@mui/icons-material';
import { useState, useEffect, useRef } from 'react';
import { animated, useSpring } from '@react-spring/web';
import SEO from '../../components/SEO';

const technicalSkills = {
	'Programming Languages': [
		'Java',
		'JavaScript',
		'TypeScript',
		'Python',
		'HTML',
		'CSS',
	],
	'Frameworks & Libraries': [
		'React.js',
		'Spring Boot',
		'Material-UI',
		'Node.js',
		'Express.js',
	],
	Databases: ['PostgreSQL', 'MySQL', 'MongoDB'],
	'Development Tools': ['Git', 'GitHub', 'Vite', 'Webpack', 'npm', 'Maven'],
	'Testing & Quality': [
		'Vitest',
		'Jest',
		'Selenium',
		'Playwright',
		'ESLint',
		'Prettier',
	],
	'Cloud & DevOps': ['GitHub Actions', 'Docker', 'AWS', 'CI/CD'],
};

const softSkills = {
	Communication: [
		'Technical Writing',
		'Documentation',
		'Presentation',
		'Cross-team Collaboration',
	],
	'Problem Solving': [
		'Algorithm Design',
		'Debugging',
		'Code Review',
		'System Architecture',
	],
	'Project Management': [
		'Agile',
		'Scrum',
		'Sprint Planning',
		'Version Control',
	],
	Languages: ['English (IELTS 7.0)', 'Vietnamese (Native)'],
	'Design & Tools': [
		'Figma',
		'UI/UX Design',
		'Responsive Design',
		'Accessibility',
	],
	'Office & Productivity': [
		'Google Workspace',
		'Microsoft Office',
		'Notion',
		'Slack',
	],
};

interface CarouselProps {
	title: string;
	skillsData: Record<string, string[]>;
	direction?: 'left' | 'right';
}

function SkillCarousel({
	title,
	skillsData,
	direction = 'left',
}: CarouselProps) {
	const [currentIndex, setCurrentIndex] = useState(0);
	const [isAutoPlaying, setIsAutoPlaying] = useState(true);
	const intervalRef = useRef<number>();

	const categories = Object.entries(skillsData);
	const totalCategories = categories.length;

	const nextSlide = () => {
		setCurrentIndex((prev) => (prev + 1) % totalCategories);
	};

	const prevSlide = () => {
		setCurrentIndex((prev) => (prev - 1 + totalCategories) % totalCategories);
	};

	useEffect(() => {
		if (isAutoPlaying) {
			intervalRef.current = setInterval(() => {
				setCurrentIndex((prev) => {
					if (direction === 'left') {
						return (prev + 1) % totalCategories;
					} else {
						return (prev - 1 + totalCategories) % totalCategories;
					}
				});
			}, 4000);
		}

		return () => {
			if (intervalRef.current) {
				clearInterval(intervalRef.current);
			}
		};
	}, [isAutoPlaying, direction, totalCategories]);

	const slideAnimation = useSpring({
		transform: `translateX(-${currentIndex * 100}%)`,
		config: {
			tension: 280,
			friction: 60,
		},
	});

	return (
		<Box
			sx={{
				background: 'var(--glass-background)',
				backdropFilter: 'var(--glass-backdrop)',
				border: 'var(--glass-border)',
				borderRadius: 'var(--glass-border-radius)',
				p: { xs: 2, sm: 3 },
				height: '100%',
				display: 'flex',
				flexDirection: 'column',
				overflow: 'hidden',
				position: 'relative',
			}}
			onMouseEnter={() => setIsAutoPlaying(false)}
			onMouseLeave={() => setIsAutoPlaying(true)}
		>
			{/* Header */}
			<Box
				sx={{
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'space-between',
					mb: 2,
				}}
			>
				<Typography
					variant="h5"
					sx={{
						fontWeight: 600,
						color: 'primary.main',
						fontSize: { xs: '1.1rem', sm: '1.25rem' },
					}}
				>
					{title}
				</Typography>
				<Box>
					<IconButton
						onClick={prevSlide}
						size="small"
						sx={{
							color: 'text.primary',
							'&:hover': { color: 'primary.main' },
						}}
					>
						<ChevronLeft />
					</IconButton>
					<IconButton
						onClick={nextSlide}
						size="small"
						sx={{
							color: 'text.primary',
							'&:hover': { color: 'primary.main' },
						}}
					>
						<ChevronRight />
					</IconButton>
				</Box>
			</Box>

			{/* Content */}
			<Box sx={{ flex: 1, overflow: 'hidden' }}>
				<animated.div
					style={{
						...slideAnimation,
						display: 'flex',
						width: `${totalCategories * 100}%`,
						height: '100%',
					}}
				>
					{categories.map(([category, skills]) => (
						<Box
							key={category}
							sx={{
								width: `${100 / totalCategories}%`,
								display: 'flex',
								flexDirection: 'column',
								px: 1,
							}}
						>
							<Typography
								variant="h6"
								sx={{
									fontWeight: 600,
									mb: 2,
									color: 'text.primary',
									fontSize: { xs: '1rem', sm: '1.1rem' },
									textAlign: 'center',
								}}
							>
								{category}
							</Typography>
							<Box
								sx={{
									display: 'flex',
									flexWrap: 'wrap',
									gap: 1,
									justifyContent: 'center',
									alignItems: 'flex-start',
									flex: 1,
								}}
							>
								{skills.map((skill, skillIndex) => (
									<Chip
										key={skill}
										label={skill}
										size="small"
										variant="outlined"
										color="primary"
										sx={{
											fontSize: { xs: '0.7rem', sm: '0.75rem' },
											height: { xs: 22, sm: 24 },
											'& .MuiChip-label': {
												px: 1,
											},
											animation: `fadeIn 0.5s ease-in-out ${
												skillIndex * 0.1
											}s both`,
											'@keyframes fadeIn': {
												from: {
													opacity: 0,
													transform: 'translateY(10px)',
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
						</Box>
					))}
				</animated.div>
			</Box>

			{/* Indicators */}
			<Box
				sx={{
					display: 'flex',
					justifyContent: 'center',
					gap: 1,
					mt: 2,
				}}
			>
				{categories.map((_, index) => (
					<Box
						key={index}
						onClick={() => setCurrentIndex(index)}
						sx={{
							width: 8,
							height: 8,
							borderRadius: '50%',
							background:
								index === currentIndex
									? 'primary.main'
									: 'rgba(255, 255, 255, 0.3)',
							cursor: 'pointer',
							transition: 'all 0.3s ease',
							'&:hover': {
								background: 'primary.main',
								transform: 'scale(1.2)',
							},
						}}
					/>
				))}
			</Box>
		</Box>
	);
}

export default function Skills() {
	return (
		<>
			<SEO
				title="Skills"
				description="Duy Nguyen's technical skills including Java, JavaScript, TypeScript, React.js, and more. Programming languages, frameworks, and tools expertise."
				keywords="Duy Nguyen Skills, Java, JavaScript, TypeScript, React.js, Programming Skills, Technical Skills, Software Development"
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
					Skills & Expertise
				</Typography>

				<Box
					sx={{
						flex: 1,
						display: 'grid',
						gridTemplateColumns: { xs: '1fr', lg: '1fr 1fr' },
						gap: { xs: 2, sm: 3 },
						overflow: 'hidden',
					}}
				>
					<SkillCarousel
						title="Technical Skills"
						skillsData={technicalSkills}
						direction="right"
					/>
					<SkillCarousel
						title="Soft Skills"
						skillsData={softSkills}
						direction="left"
					/>
				</Box>
			</Box>
		</>
	);
}

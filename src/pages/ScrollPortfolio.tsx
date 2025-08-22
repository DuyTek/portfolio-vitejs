import React, { useEffect, useState, useRef } from 'react';
import { Box, styled } from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';
import Home from './home/Home';
import Experience from './experience/Experience';
import Projects from './projects/Projects';
import Skills from './skill/Skills';

interface Section {
	id: string;
	label: string;
	component: React.ComponentType;
	path: string;
}

const sections: Section[] = [
	{ id: 'home', label: 'HOME', component: Home, path: '/' },
	{
		id: 'experience',
		label: 'EXPERIENCE',
		component: Experience,
		path: '/experience',
	},
	{ id: 'projects', label: 'PROJECTS', component: Projects, path: '/projects' },
	{ id: 'skills', label: 'SKILLS', component: Skills, path: '/skills' },
];

const ScrollContainer = styled(Box)({
	height: '100vh',
	overflowY: 'auto',
	scrollBehavior: 'smooth',
	scrollSnapType: 'y mandatory',
	'&::-webkit-scrollbar': {
		width: '8px',
	},
	'&::-webkit-scrollbar-track': {
		background: 'transparent',
	},
	'&::-webkit-scrollbar-thumb': {
		background: 'var(--glass-border)',
		borderRadius: '4px',
	},
	'&::-webkit-scrollbar-thumb:hover': {
		background: 'var(--glass-border-strong)',
	},
});

const SectionWrapper = styled(Box)({
	minHeight: '100vh',
	scrollSnapAlign: 'start',
	position: 'relative',
	padding: '2rem',
	display: 'flex',
	flexDirection: 'column',
	justifyContent: 'center',
});

const NavigationIndicator = styled(Box)(({ theme }) => ({
	position: 'fixed',
	right: '2rem',
	top: '50%',
	transform: 'translateY(-50%)',
	zIndex: 1000,
	display: 'flex',
	flexDirection: 'column',
	gap: '0.5rem',
	[theme.breakpoints.down('sm')]: {
		right: '1rem',
		gap: '0.25rem',
	},
}));

const NavDot = styled(Box)<{ active: boolean }>(({ theme, active }) => ({
	width: '12px',
	height: '12px',
	borderRadius: '50%',
	background: active ? theme.palette.primary.main : 'var(--glass-border)',
	border: `2px solid ${
		active ? theme.palette.primary.main : 'var(--glass-border)'
	}`,
	cursor: 'pointer',
	transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
	backdropFilter: 'blur(8px)',
	WebkitBackdropFilter: 'blur(8px)',
	'&:hover': {
		background: theme.palette.primary.main,
		borderColor: theme.palette.primary.main,
		transform: 'scale(1.2)',
	},
	[theme.breakpoints.down('sm')]: {
		width: '10px',
		height: '10px',
	},
}));

export default function ScrollPortfolio() {
	const [activeSection, setActiveSection] = useState(0);
	const [isScrolling, setIsScrolling] = useState(false);
	const scrollContainerRef = useRef<HTMLDivElement>(null);
	const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);
	const navigate = useNavigate();
	const location = useLocation();

	// Set initial section based on current path
	useEffect(() => {
		const currentSectionIndex = sections.findIndex(
			(section) => section.path === location.pathname
		);
		if (currentSectionIndex !== -1) {
			setActiveSection(currentSectionIndex);
			scrollToSection(currentSectionIndex, false);
		}
	}, [location.pathname]);

	// Handle scroll detection
	useEffect(() => {
		const handleScroll = () => {
			if (isScrolling) return;

			const container = scrollContainerRef.current;
			if (!container) return;

			const containerTop = container.scrollTop;
			const containerHeight = container.clientHeight;
			const threshold = containerHeight * 0.3; // 30% threshold

			let newActiveSection = activeSection;

			sectionRefs.current.forEach((sectionRef, index) => {
				if (!sectionRef) return;

				const sectionTop = sectionRef.offsetTop;
				const sectionBottom = sectionTop + sectionRef.offsetHeight;

				// Check if section is prominently visible (more than 30% in viewport)
				const visibleTop = Math.max(containerTop, sectionTop);
				const visibleBottom = Math.min(
					containerTop + containerHeight,
					sectionBottom
				);
				const visibleHeight = Math.max(0, visibleBottom - visibleTop);

				if (visibleHeight >= threshold) {
					newActiveSection = index;
				}
			});

			if (newActiveSection !== activeSection) {
				setActiveSection(newActiveSection);
				navigate(sections[newActiveSection].path, { replace: true });
			}
		};

		const container = scrollContainerRef.current;
		if (container) {
			container.addEventListener('scroll', handleScroll, { passive: true });
			return () => container.removeEventListener('scroll', handleScroll);
		}
	}, [activeSection, isScrolling, navigate]);

	const scrollToSection = (index: number, smooth: boolean = true) => {
		const container = scrollContainerRef.current;
		const sectionRef = sectionRefs.current[index];

		if (container && sectionRef) {
			setIsScrolling(true);
			container.scrollTo({
				top: sectionRef.offsetTop,
				behavior: smooth ? 'smooth' : 'auto',
			});

			// Reset scrolling flag after animation
			setTimeout(() => {
				setIsScrolling(false);
			}, 1000);
		}
	};

	const handleNavDotClick = (index: number) => {
		setActiveSection(index);
		navigate(sections[index].path, { replace: true });
		scrollToSection(index);
	};

	return (
		<Box sx={{ position: 'relative', height: '100vh', overflow: 'hidden' }}>
			<ScrollContainer ref={scrollContainerRef}>
				{sections.map((section, index) => {
					const SectionComponent = section.component;
					return (
						<SectionWrapper
							key={section.id}
							ref={(el) =>
								(sectionRefs.current[index] = el as HTMLDivElement | null)
							}
							id={section.id}
						>
							<SectionComponent />
						</SectionWrapper>
					);
				})}
			</ScrollContainer>

			<NavigationIndicator>
				{sections.map((section, index) => (
					<NavDot
						key={section.id}
						active={activeSection === index}
						onClick={() => handleNavDotClick(index)}
						title={section.label}
					/>
				))}
			</NavigationIndicator>
		</Box>
	);
}

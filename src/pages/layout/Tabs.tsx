import {
	Box,
	Tab,
	Tabs as MuiTabs,
	styled,
	tabClasses,
	tabsClasses,
	TabProps,
	useTheme,
} from '@mui/material';
import React from 'react';
import { To, useLocation, useNavigate } from 'react-router-dom';

interface LinkTabProps extends TabProps {
	to: To;
}

const StyledTabs = styled(MuiTabs)(({ theme }) => ({
	minHeight: theme.spacing(4),
	background: 'transparent',
	[`& .${tabsClasses.indicator}`]: {
		bottom: '8px',
		height: '3px',
		borderRadius: '2px',
		backgroundColor: theme.palette.primary.main,
		boxShadow: `0 0 8px ${theme.palette.primary.main}`,
	},
	[theme.breakpoints.down('sm')]: {
		minHeight: theme.spacing(3.5),
		[`& .${tabsClasses.indicator}`]: {
			bottom: '6px',
			height: '2px',
		},
	},
}));

const StyledTab = styled(({ to, ...others }: LinkTabProps) => {
	const navigate = useNavigate();
	const handleNavigate = (e: React.MouseEvent<HTMLDivElement>) => {
		e.preventDefault();
		navigate(to);
	};
	return <Tab onClick={handleNavigate} disableRipple {...others} />;
})(({ theme }) => ({
	padding: theme.spacing(1, 2),
	minHeight: theme.spacing(4),
	textTransform: 'none',
	minWidth: 'auto',
	flexGrow: 1,
	fontWeight: 500,
	fontSize: '0.875rem',
	letterSpacing: '0.025em',
	color: theme.palette.text.secondary,
	background: 'transparent',
	border: 'none',
	borderRadius: '8px',
	margin: theme.spacing(0.5, 0.25),
	transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
	[`&.${tabClasses.selected}`]: {
		background: 'var(--glass-subtle)',
		backdropFilter: 'blur(8px)',
		WebkitBackdropFilter: 'blur(8px)',
		border: '1px solid var(--glass-border-subtle)',
		color: theme.palette.primary.main,
		fontWeight: 600,
		'&:hover': {
			color: theme.palette.primary.main,
			background: 'var(--glass-primary)',
		},
	},
	'&:hover': {
		color: theme.palette.primary.main,
		background: 'var(--glass-minimal)',
	},
	[theme.breakpoints.down('sm')]: {
		padding: theme.spacing(0.75, 1.5),
		minHeight: theme.spacing(3.5),
		fontSize: '0.75rem',
		margin: theme.spacing(0.25, 0.125),
	},
}));

function a11yProps(index: number) {
	return {
		id: `simple-tab-${index}`,
		'aria-controls': `simple-tabpanel-${index}`,
	};
}

const TABS = [
	{ to: '/', label: 'HOME' },
	{ to: '/experience', label: 'EXPERIENCE' },
	{ to: '/projects', label: 'PROJECTS' },
	{ to: '/skills', label: 'SKILLS' },
];

const Tabs = () => {
	const theme = useTheme();
	const { pathname } = useLocation();
	const [value, setValue] = React.useState(
		TABS.findIndex((tab) => tab.to === pathname)
	);

	const handleChange = (_: React.SyntheticEvent, newValue: number) => {
		setValue(newValue);
	};

	React.useEffect(() => {
		setValue(TABS.findIndex((tab) => tab.to === pathname));
	}, [pathname]);

	return (
		<Box>
			<StyledTabs
				value={value}
				onChange={handleChange}
				aria-label="nav-tabs"
				variant="scrollable"
				scrollButtons="auto"
				allowScrollButtonsMobile
				sx={{
					[theme.breakpoints.up('sm')]: {
						variant: 'standard',
					},
				}}
			>
				{TABS.map((tab, index) => (
					<StyledTab
						key={tab.to}
						to={tab.to}
						label={tab.label}
						{...a11yProps(index)}
					/>
				))}
			</StyledTabs>
		</Box>
	);
};

export default Tabs;

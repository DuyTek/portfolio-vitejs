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
	[`& .${tabsClasses.indicator}`]: {
		bottom: '30px',
		backgroundColor: theme.palette.primary.dark,
	},
	[theme.breakpoints.down('sm')]: {
		minHeight: theme.spacing(3.5),
		[`& .${tabsClasses.indicator}`]: {
			bottom: '20px',
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
	padding: theme.spacing(0.5, 1.5),
	minHeight: theme.spacing(4),
	textTransform: 'none',
	minWidth: 'auto',
	flexGrow: 1,
	[`&.${tabClasses.selected}`]: {
		boxShadow: theme.shadows[10],
		color: theme.palette.primary.main,
		'&:hover': {
			color: theme.palette.primary.main,
		},
	},
	'&:hover': {
		color: theme.palette.primary.light,
	},
	[theme.breakpoints.down('sm')]: {
		padding: theme.spacing(0.5, 1),
		minHeight: theme.spacing(3.5),
		fontSize: '0.875rem',
	},
	[theme.breakpoints.down('xs')]: {
		padding: theme.spacing(0.5, 0.75),
		fontSize: '0.75rem',
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

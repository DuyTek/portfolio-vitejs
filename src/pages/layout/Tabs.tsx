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
}));

function a11yProps(index: number) {
	return {
		id: `simple-tab-${index}`,
		'aria-controls': `simple-tabpanel-${index}`,
	};
}

const TABS = [
	{ to: '/', label: 'Home' },
	{ to: '/experience', label: 'Experience' },
	{ to: '/projects', label: 'Projects' },
	{ to: '/skills', label: 'Skills' },
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
		<Box sx={{ borderBottom: 1, borderColor: theme.palette.grey[800] }}>
			<StyledTabs value={value} onChange={handleChange} aria-label="nav-tabs">
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

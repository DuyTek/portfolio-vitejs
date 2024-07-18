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
import { To, useNavigate } from 'react-router-dom';

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

const Tabs = () => {
	const theme = useTheme();
	const [value, setValue] = React.useState(0);

	const handleChange = (_: React.SyntheticEvent, newValue: number) => {
		setValue(newValue);
	};
	return (
		<Box sx={{ borderBottom: 1, borderColor: theme.palette.grey[800] }}>
			<StyledTabs value={value} onChange={handleChange} aria-label="nav-tabs">
				<StyledTab to="/" label="Home" {...a11yProps(0)} />
				<StyledTab to="/experience" label="Experience" {...a11yProps(1)} />
				<StyledTab to="/projects" label="Projects" {...a11yProps(2)} />
			</StyledTabs>
		</Box>
	);
};

export default Tabs;

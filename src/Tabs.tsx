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

const StyledTabs = styled(MuiTabs)(({ theme }) => ({
	minHeight: theme.spacing(4),
	[`& .${tabsClasses.indicator}`]: {
		bottom: '30px',
		backgroundColor: theme.palette.primary.dark,
	},
}));

const StyledTab = styled((props: TabProps) => <Tab disableRipple {...props} />)(
	({ theme }) => ({
		padding: theme.spacing(0.5, 1.5),
		minHeight: theme.spacing(4),
		textTransform: 'none',
		[`&.${tabClasses.selected}`]: {
			color: theme.palette.primary.main,
			boxShadow: theme.shadows[10],
		},
	})
);

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
				<StyledTab label="Home" {...a11yProps(0)} />
				<StyledTab label="Experience" {...a11yProps(1)} />
				<StyledTab label="Careers" {...a11yProps(2)} />
			</StyledTabs>
		</Box>
	);
};

export default Tabs;

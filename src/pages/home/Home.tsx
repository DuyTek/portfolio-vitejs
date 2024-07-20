import {
	Box,
	Collapse,
	CollapseProps,
	Stack,
	styled,
	Typography,
} from '@mui/material';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Logos } from './Logos';

const CustomCollapse = ({ children, ...props }: CollapseProps) => (
	<Collapse
		orientation="horizontal"
		timeout={{
			appear: 5000,
			enter: 3000,
			exit: 2000,
		}}
		{...props}
	>
		{children}
	</Collapse>
);

const Name = styled(Typography)(({ theme }) => ({
	...theme.typography.h2,
	color: theme.palette.secondary.main,
}));

export default function Home() {
	const { pathname } = useLocation();
	const [checked, setChecked] = useState(false);

	useEffect(() => setChecked(true), [pathname]);
	return (
		<Stack direction="row" justifyContent="space-between" height="100%">
			<Stack>
				<CustomCollapse in={checked}>
					<Box sx={{ minWidth: 500 }}>
						<Box sx={{ position: 'relative' }}>
							<Name>EDWARD NGUYEN</Name>
							FULL-STACK DEVELOPER
						</Box>
					</Box>
				</CustomCollapse>
			</Stack>
			<Logos />
		</Stack>
	);
}

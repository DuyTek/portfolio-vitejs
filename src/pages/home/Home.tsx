import { Box, Collapse, CollapseProps } from '@mui/material';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const CustomCollapse = ({ children, ...props }: CollapseProps) => (
	<Collapse
		orientation="horizontal"
		timeout={{
			appear: 5000,
			enter: 3000,
			exit: 2000,
		}}
		sx={{ borderRight: `1px solid white` }}
		{...props}
	>
		{children}
	</Collapse>
);
export default function Home() {
	const { pathname } = useLocation();
	const [checked, setChecked] = useState(false);

	useEffect(() => setChecked(true), [pathname]);
	return (
		<CustomCollapse in={checked}>
			<Box sx={{ width: '330px' }}>
				<Box sx={{ position: 'relative' }}>
					Hi! I'm Edward, fancy engineering
				</Box>
			</Box>
		</CustomCollapse>
	);
}

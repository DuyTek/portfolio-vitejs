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
import { ReactLogo } from '../../logo';
import { useSpring, animated } from '@react-spring/web';
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
	const logoRotate = useSpring({
		from: {
			top: 300,
			left: -180,
			rotate: 0,
			opacity: 0.01,
		},
		to: {
			rotate: 360,
		},
		loop: true,
		delay: 0,
		config: {
			duration: 8000,
		},
	});

	return (
		<Stack direction="row" justifyContent="space-between" height="100%">
			<Stack>
				<CustomCollapse in={checked}>
					<Box sx={{ minWidth: 500 }}>
						<Box sx={{ position: 'relative' }}>
							<Name>EDWARD NGUYEN </Name>
							FULL-STACK DEVELOPER
							<animated.div
								style={{
									position: 'absolute',
									...logoRotate,
								}}
							>
								<ReactLogo />
							</animated.div>
						</Box>
					</Box>
				</CustomCollapse>
			</Stack>
			{/* <Logos /> */}
		</Stack>
	);
}

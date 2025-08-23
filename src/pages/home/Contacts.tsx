import { SpeedDial, SpeedDialAction, styled } from '@mui/material';
import { Share, Email, GitHub, LinkedIn } from '@mui/icons-material';
import { ReactNode } from 'react';

// Constants
const CONTACT_ITEMS: ContactItem[] = [
	{
		label: 'Email',
		value: 'mailto:vduy.dev@gmail.com',
		icon: <Email />,
	},
	{
		label: 'GitHub',
		value: 'https://github.com/duytek',
		icon: <GitHub />,
	},
	{
		label: 'LinkedIn',
		value: 'https://www.linkedin.com/in/ndvduy',
		icon: <LinkedIn />,
	},
];

// Interfaces/Types
interface ContactItem {
	label: string;
	value: string;
	icon: ReactNode;
}

// Styled Components
const GlassSpeedDial = styled(SpeedDial)(({ theme }) => ({
	bottom: theme.spacing(3),
	position: 'fixed',
	right: theme.spacing(3),
	zIndex: 1200,
	'& .MuiFab-root': {
		WebkitBackdropFilter: 'blur(12px)',
		background: 'var(--glass-subtle)',
		backdropFilter: 'blur(12px)',
		border: '1px solid var(--glass-border-subtle)',
		boxShadow: `0 4px 20px rgba(0, 0, 0, 0.05), 0 2px 8px rgba(0, 0, 0, 0.03), inset 0 1px 0 var(--highlight-inner)`,
		color: theme.palette.text.primary,
		transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
		'&:hover': {
			background: 'var(--glass-primary)',
			borderColor: theme.palette.primary.main,
			boxShadow: `0 8px 32px rgba(0, 0, 0, 0.1), 0 4px 16px rgba(0, 0, 0, 0.05), inset 0 1px 0 var(--highlight-inner-strong)`,
			color: theme.palette.primary.main,
			transform: 'translateY(-2px)',
		},
	},
}));

const GlassSpeedDialAction = styled(SpeedDialAction)(({ theme }) => ({
	'& .MuiFab-root': {
		WebkitBackdropFilter: 'blur(8px)',
		background: 'var(--glass-minimal)',
		backdropFilter: 'blur(8px)',
		border: '1px solid var(--glass-border-subtle)',
		boxShadow: `0 2px 8px rgba(0, 0, 0, 0.08), 0 1px 4px rgba(0, 0, 0, 0.04)`,
		color: theme.palette.text.secondary,
		height: '48px',
		transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
		width: '48px',
		'&:hover': {
			background: 'var(--glass-subtle)',
			borderColor: theme.palette.primary.main,
			boxShadow: `0 4px 12px rgba(99, 179, 237, 0.2), 0 2px 6px rgba(99, 179, 237, 0.1)`,
			color: theme.palette.primary.main,
			transform: 'translateY(-1px)',
		},
	},
	'& .MuiSpeedDialAction-staticTooltipLabel': {
		WebkitBackdropFilter: 'blur(8px)',
		background: 'var(--glass-strong)',
		backdropFilter: 'blur(8px)',
		border: '1px solid var(--glass-border)',
		borderRadius: '8px',
		boxShadow: `0 2px 8px rgba(0, 0, 0, 0.1), 0 1px 4px rgba(0, 0, 0, 0.05)`,
		color: theme.palette.text.primary,
		fontSize: '0.875rem',
		marginRight: theme.spacing(1),
		padding: theme.spacing(0.5, 1),
	},
}));

const ContactSpeedDial = () => {
	const handleActionClick = (url: string) => {
		window.open(url, '_blank', 'noopener,noreferrer');
	};

	return (
		<GlassSpeedDial
			ariaLabel="Contact Speed Dial"
			icon={<Share />}
			direction="left"
		>
			{CONTACT_ITEMS.map(({ label, value, icon }) => (
				<GlassSpeedDialAction
					key={label}
					icon={icon}
					onClick={() => handleActionClick(value)}
				/>
			))}
		</GlassSpeedDial>
	);
};

export default ContactSpeedDial;

import { SpeedDial, SpeedDialAction, styled } from '@mui/material';
import { Share, Email, GitHub, LinkedIn } from '@mui/icons-material';
import { ReactNode } from 'react';

interface ContactItem {
	label: string;
	value: string;
	icon: ReactNode;
}

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

// Liquid Glass Speed Dial
const GlassSpeedDial = styled(SpeedDial)(({ theme }) => ({
	position: 'fixed',
	bottom: theme.spacing(3),
	right: theme.spacing(3),
	zIndex: 1200,
	'& .MuiFab-root': {
		background: 'var(--glass-subtle)',
		backdropFilter: 'blur(12px)',
		WebkitBackdropFilter: 'blur(12px)',
		border: '1px solid var(--glass-border-subtle)',
		color: theme.palette.text.primary,
		boxShadow: `0 4px 20px rgba(0, 0, 0, 0.05), 0 2px 8px rgba(0, 0, 0, 0.03), inset 0 1px 0 var(--highlight-inner)`,
		transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
		'&:hover': {
			background: 'var(--glass-primary)',
			borderColor: theme.palette.primary.main,
			color: theme.palette.primary.main,
			transform: 'translateY(-2px)',
			boxShadow: `0 8px 32px rgba(0, 0, 0, 0.1), 0 4px 16px rgba(0, 0, 0, 0.05), inset 0 1px 0 var(--highlight-inner-strong)`,
		},
	},
}));

// Glass Speed Dial Action
const GlassSpeedDialAction = styled(SpeedDialAction)(({ theme }) => ({
	'& .MuiFab-root': {
		background: 'var(--glass-minimal)',
		backdropFilter: 'blur(8px)',
		WebkitBackdropFilter: 'blur(8px)',
		border: '1px solid var(--glass-border-subtle)',
		color: theme.palette.text.secondary,
		width: '48px',
		height: '48px',
		boxShadow: `0 2px 8px rgba(0, 0, 0, 0.08), 0 1px 4px rgba(0, 0, 0, 0.04)`,
		transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
		'&:hover': {
			background: 'var(--glass-subtle)',
			borderColor: theme.palette.primary.main,
			color: theme.palette.primary.main,
			transform: 'translateY(-1px)',
			boxShadow: `0 4px 12px rgba(99, 179, 237, 0.2), 0 2px 6px rgba(99, 179, 237, 0.1)`,
		},
	},
	'& .MuiSpeedDialAction-staticTooltipLabel': {
		background: 'var(--glass-strong)',
		backdropFilter: 'blur(8px)',
		WebkitBackdropFilter: 'blur(8px)',
		border: '1px solid var(--glass-border)',
		color: theme.palette.text.primary,
		fontSize: '0.875rem',
		borderRadius: '8px',
		padding: theme.spacing(0.5, 1),
		marginRight: theme.spacing(1),
		boxShadow: `0 2px 8px rgba(0, 0, 0, 0.1), 0 1px 4px rgba(0, 0, 0, 0.05)`,
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
			direction="up"
		>
			{CONTACT_ITEMS.map(({ label, value, icon }) => (
				<GlassSpeedDialAction
					key={label}
					icon={icon}
					tooltipTitle={label}
					tooltipOpen
					onClick={() => handleActionClick(value)}
				/>
			))}
		</GlassSpeedDial>
	);
};

export default ContactSpeedDial;

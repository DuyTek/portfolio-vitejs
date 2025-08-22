import {
	Stack,
	StackProps,
	Tooltip,
	IconButton,
	styled,
	Box,
} from '@mui/material';
import { GitHub, Mail, LinkedIn, Link as LinkIcon } from '@mui/icons-material';
import { ReactNode } from 'react';

interface ContactItem {
	label: string;
	value: string;
	icon?: ReactNode;
}

const CONTACT_ITEMS: ContactItem[] = [
	{
		label: 'Email',
		value: 'mailto:vduy.dev@gmail.com',
		icon: <Mail fontSize="small" />,
	},
	{
		label: 'GitHub',
		value: 'https://github.com/duytek',
		icon: <GitHub fontSize="small" />,
	},
	{
		label: 'LinkedIn',
		value: 'https://www.linkedin.com/in/ndvduy',
		icon: <LinkedIn fontSize="small" />,
	},
	{
		label: 'Portfolio',
		value: 'https://vduydev.vercel.app/',
		icon: <LinkIcon fontSize="small" />,
	},
];

// Liquid Glass Contact Container
const ContactContainer = styled(Box)(({ theme }) => ({
	background: 'var(--glass-subtle)',
	backdropFilter: 'blur(12px)',
	WebkitBackdropFilter: 'blur(12px)',
	border: '1px solid var(--glass-border-subtle)',
	borderRadius: '16px',
	padding: theme.spacing(1),
	boxShadow: `0 4px 20px rgba(0, 0, 0, 0.05), 0 2px 8px rgba(0, 0, 0, 0.03), inset 0 1px 0 var(--highlight-inner)`,
	transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
	'&:hover': {
		background: 'var(--glass-primary)',
		transform: 'translateY(-2px)',
		boxShadow: `0 8px 32px rgba(0, 0, 0, 0.1), 0 4px 16px rgba(0, 0, 0, 0.05), inset 0 1px 0 var(--highlight-inner-strong)`,
	},
}));

// Glass Icon Button
const GlassIconButton = styled(IconButton)(({ theme }) => ({
	background: 'var(--glass-minimal)',
	backdropFilter: 'blur(8px)',
	WebkitBackdropFilter: 'blur(8px)',
	border: '1px solid var(--glass-border-subtle)',
	borderRadius: '12px',
	width: '48px',
	height: '48px',
	color: theme.palette.text.secondary,
	transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
	'&:hover': {
		background: 'var(--glass-subtle)',
		borderColor: theme.palette.primary.main,
		color: theme.palette.primary.main,
		transform: 'translateY(-1px)',
		boxShadow: `0 4px 12px rgba(99, 179, 237, 0.2), 0 2px 6px rgba(99, 179, 237, 0.1)`,
	},
}));

const ContactComponent = ({
	open,
	...props
}: { open: boolean } & StackProps) => {
	if (!open) return null;

	return (
		<ContactContainer>
			<Stack direction="row" spacing={1} {...props}>
				{CONTACT_ITEMS.map(({ label, value, icon }) => (
					<Tooltip key={label} title={label} arrow placement="top">
						<a
							href={value}
							target="_blank"
							rel="noopener noreferrer"
							style={{ textDecoration: 'none' }}
						>
							<GlassIconButton aria-label={label}>{icon}</GlassIconButton>
						</a>
					</Tooltip>
				))}
			</Stack>
		</ContactContainer>
	);
};

export default ContactComponent;

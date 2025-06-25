import { Stack, StackProps, Tooltip } from '@mui/material';
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
		value: 'mailto:vduy.dev@gmail.com', //
		icon: <Mail fontSize="small" />,
	},
	{
		label: 'GitHub',
		value: 'https://github.com/duytek',
		icon: <GitHub fontSize="small" />,
	},
	{
		label: 'LinkedIn',
		value: 'https://www.linkedin.com/in/ndvduy', //
		icon: <LinkedIn fontSize="small" />,
	},
	{
		label: 'Portfolio',
		value: 'https://vduydev.vercel.app/', //
		icon: <LinkIcon fontSize="small" />,
	},
];

const ContactComponent = ({
	open,
	...props
}: { open: boolean } & StackProps) => {
	return (
		open && (
			<Stack direction="row" spacing={2} {...props}>
				{CONTACT_ITEMS.map(({ label, value, icon }) => (
					<Tooltip key={label} title={label}>
						<a
							href={value}
							target="_blank"
							rel="noopener noreferrer"
							style={{ color: 'inherit' }}
						>
							<Stack key={label} direction="row" sx={{ cursor: 'pointer' }}>
								{icon}
							</Stack>
						</a>
					</Tooltip>
				))}
			</Stack>
		)
	);
};

export default ContactComponent;

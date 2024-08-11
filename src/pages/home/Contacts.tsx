import { Stack, StackProps, Tooltip } from '@mui/material';
import { GitHub, Mail } from '@mui/icons-material';
import { ReactNode } from 'react';

interface ContactItem {
	label: string;
	value: string;
	icon?: ReactNode;
}
const CONTACT_ITEMS: ContactItem[] = [
	{
		label: 'Email',
		value: 'vduy.dev@gmail.com',
		icon: <Mail fontSize="small" />,
	},
	{
		label: 'GitHub',
		value: '',
		icon: <GitHub fontSize="small" />,
	},
];

const ContactComponent = ( { open, ...props }:{ open: boolean} & StackProps) => {
	return open && (
		<Stack direction="row" spacing={2} {...props}>
			{CONTACT_ITEMS.map(({ label, icon }) => (
				<Tooltip key={label} title={label}>
					<Stack key={label} direction="row" sx={{ cursor: 'pointer' }}>
						{icon}
					</Stack>
				</Tooltip>
			))}
		</Stack>
	);
};

export default ContactComponent;

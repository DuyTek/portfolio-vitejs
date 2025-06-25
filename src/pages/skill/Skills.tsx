import { Typography, Box, Chip, Stack } from '@mui/material';

const skills = {
	Languages: ['Java', 'JavaScript', 'Typescript'], //
	Frameworks: ['Kotlin', 'React.js'], //
	Database: ['PostgreSQL', 'MySQL'], //
	'Version Control': ['git', 'GitHub'], //
	Testing: ['Vitest', 'Jest'], //
	'CI/CD': ['GitHub Actions'], //
	'Other Skills': [
		'IELST 7.0',
		'Figma',
		'Google Suites',
		'Microsoft Office',
		'Agile',
	],
};

export default function Skills() {
	return (
		<Box>
			<Typography variant="h4" gutterBottom>
				Skills
			</Typography>
			{Object.entries(skills).map(([category, skillsList]) => (
				<Box key={category} sx={{ mb: 4 }}>
					<Typography variant="h6" gutterBottom>
						{category}
					</Typography>
					<Stack direction="row" spacing={1} useFlexGap flexWrap="wrap">
						{skillsList.map((skill) => (
							<Chip color="info" label={skill} key={skill} />
						))}
					</Stack>
				</Box>
			))}
		</Box>
	);
}

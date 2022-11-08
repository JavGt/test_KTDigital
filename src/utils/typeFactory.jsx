import { Typography } from '@mui/material';
import { MathJax } from 'better-react-mathjax';

export const typeFactory = item => {
	const { type, value } = item;
	switch (type) {
		case 'text':
		case 'texto':
			return <Typography variant='body1'>{value}</Typography>;
		case 'imagen':
			return <img src={value} alt='imagen' width={200} />;
		case 'latex':
			return (
				<MathJax dynamic inline>
					<Typography variant='h6'>{value}</Typography>
				</MathJax>
			);
		default:
			return null;
	}
};

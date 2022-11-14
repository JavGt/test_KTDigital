import { Typography } from '@mui/material';
import { MathJax } from 'better-react-mathjax';

export const typeFactory = (item, View) => {
	const { type, value } = item;

	switch (type) {
		case 'text':
		case 'texto':
			return <Typography variant='body1'>{value}</Typography>;
		case 'imagen':
		case 'image':
			if (View === 'quiz') return <img src={value} alt='imagen' width={200} />;

			const img = URL.createObjectURL(value);
			return <img src={img} alt='imagen' width={100} />;
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

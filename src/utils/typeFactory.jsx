import { Typography } from '@mui/material';

export const typeFactory = item => {
	const { type, value } = item;
	switch (type) {
		case 'text':
		case 'texto':
			return <Typography variant='body1'>{value}</Typography>;
		case 'imagen':
			return <img src={value} alt='imagen' width={200} />;
		case 'latex':
			return <Typography variant='body1'>{value}</Typography>;
		default:
			return null;
	}
};

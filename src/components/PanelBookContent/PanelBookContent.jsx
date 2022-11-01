import React from 'react';
import indice from '../../../navTest.json';
import { styled } from '@mui/material/styles';
import { List, Typography, Box, Divider } from '@mui/material';
import { ItemBookN1 } from '../ItemBookN1';

const PanelBookContent = () => {
	return (
		<ContentBook>
			<Typography variant='h2' fontWeight={700}>
				Ética I
			</Typography>
			<Divider sx={{ my: 2 }} />
			<Indice>
				{indice.Indice.map((item, index) => (
					<ItemBookN1 index={index + 1} key={index} itemBookN1={item} />
				))}
			</Indice>
		</ContentBook>
	);
};

export const ContentBook = styled(Box)(({ theme }) => ({
	width: '100%',
	marginTop: '4rem',

	[theme.breakpoints.up('md')]: {
		overflow: 'hidden',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		marginTop: '0',
	},
}));

export const Indice = styled(List)(({ theme }) => ({
	overflow: 'auto',
	height: '100%',
	[theme.breakpoints.up('md')]: {},

	'&::-webkit-scrollbar': {
		width: '0.2em',
	},

	'&::-webkit-scrollbar-thumb': {
		backgroundColor: theme.palette.secondary.main,
		borderRadius: theme.shape.borderRadius,
	},
}));

export default PanelBookContent;

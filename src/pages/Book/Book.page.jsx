import React from 'react';
import { styled } from '@mui/material/styles';
import { Grid, Container, Box, Typography } from '@mui/material';
import { PanelBook } from '@/components/PanelBook';
import { PanelBookContent } from '@/components/PanelBookContent';

const Book = () => {
	return (
		<>
			<BookBody>
				<PanelBook />
				<PanelBookContent />
			</BookBody>
		</>
	);
};

const BookBody = styled('div')(({ theme }) => ({
	height: `calc(100vh - ${theme.mixins.toolbar.minHeight + 150}px)`,

	display: 'grid',
	gridTemplateColumns: '1fr',
	gap: '2rem',

	[theme.breakpoints.up('md')]: {
		gridTemplateColumns: '1fr 1fr',
	},
}));

export default Book;

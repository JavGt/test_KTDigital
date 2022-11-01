import { Box, ButtonBase, Button, ButtonGroup, Typography, Divider } from '@mui/material';
import React from 'react';

export const steepsContext = React.createContext();

const BookReader = () => {
	return (
		<Box
			sx={{
				padding: '1rem',
			}}>
			<Typography variant='h1'>Home</Typography>
			<Typography variant='h2'>Home</Typography>
			<Typography variant='p'>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius earum dolorem
				perferendis consequatur. Omnis nam nihil ut eaque illum saepe aperiam, reiciendis
				inventore quibusdam explicabo exercitationem, at fuga veniam placeat.
			</Typography>
			<Typography variant='p'>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius earum dolorem
				perferendis consequatur. Omnis nam nihil ut eaque illum saepe aperiam, reiciendis
				inventore quibusdam explicabo exercitationem, at fuga veniam placeat.
			</Typography>
			<Typography variant='p'>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius earum dolorem
				perferendis consequatur. Omnis nam nihil ut eaque illum saepe aperiam, reiciendis
				inventore quibusdam explicabo exercitationem, at fuga veniam placeat.
			</Typography>
			<Typography variant='p'>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius earum dolorem
				perferendis consequatur. Omnis nam nihil ut eaque illum saepe aperiam, reiciendis
				inventore quibusdam explicabo exercitationem, at fuga veniam placeat.
			</Typography>
			<Divider />

			<Typography variant='' component={'ul'}>
				<Typography variant='' component={'li'}>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius earum dolorem
					perferendis consequatur. Omnis nam nihil ut eaque illum saepe aperiam,
					reiciendis inventore quibusdam explicabo exercitationem, at fuga veniam placeat.
				</Typography>
				<Typography variant='' component={'li'}>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius earum dolorem
					perferendis consequatur. Omnis nam nihil ut eaque illum saepe aperiam,
					reiciendis inventore quibusdam explicabo exercitationem, at fuga veniam placeat.
				</Typography>
				<Typography variant='' component={'li'}>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius earum dolorem
					perferendis consequatur. Omnis nam nihil ut eaque illum saepe aperiam,
					reiciendis inventore quibusdam explicabo exercitationem, at fuga veniam placeat.
				</Typography>
				<Typography variant='' component={'li'}>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius earum dolorem
					perferendis consequatur. Omnis nam nihil ut eaque illum saepe aperiam,
					reiciendis inventore quibusdam explicabo exercitationem, at fuga veniam placeat.
				</Typography>
				<Typography variant='' component={'li'}>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius earum dolorem
					perferendis consequatur. Omnis nam nihil ut eaque illum saepe aperiam,
					reiciendis inventore quibusdam explicabo exercitationem, at fuga veniam placeat.
				</Typography>
				<Typography variant='' component={'li'}>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius earum dolorem
					perferendis consequatur. Omnis nam nihil ut eaque illum saepe aperiam,
					reiciendis inventore quibusdam explicabo exercitationem, at fuga veniam placeat.
				</Typography>
				<Typography variant='' component={'li'}>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius earum dolorem
					perferendis consequatur. Omnis nam nihil ut eaque illum saepe aperiam,
					reiciendis inventore quibusdam explicabo exercitationem, at fuga veniam placeat.
				</Typography>
				<Divider />
			</Typography>
		</Box>
	);
};

export default BookReader;

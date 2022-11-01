import React from 'react';
import { Box, Typography, Avatar, Button } from '@mui/material';
import { MenuUser } from '../MenuUser';
import { styled, useTheme, alpha } from '@mui/material/styles';

const BtnUser = () => {
	const [anchorEl, setAnchorEl] = React.useState(null);

	const open = Boolean(anchorEl);

	const handleClick = event => setAnchorEl(event.currentTarget);

	const handleClose = () => setAnchorEl(null);

	return (
		<>
			<MenuUser close={handleClose} anchorEl={anchorEl} open={open} />
			<ButtonStyled open={open} onClick={handleClick}>
				<ContentName>
					<Typography variant='body2' fontWeight={700}>
						María Fernanda López
					</Typography>
					<Typography variant='body2'>Profesora</Typography>
				</ContentName>
				<Avatar
					alt='User'
					src='https://i.pinimg.com/564x/13/9a/13/139a13ecce92145c591a348fef387ca2.jpg'
				/>
			</ButtonStyled>
		</>
	);
};
const ButtonStyled = styled(Button)(({ theme, open }) => {
	return {
		width: '0',
		padding: '0 ',
		minWidth: '0',

		[theme.breakpoints.up('md')]: {
			width: '9rem',
			maxWidth: '10rem',
		},

		backgroundColor: alpha(theme.palette.primary.light, 0.1),

		borderRadius: theme.shape.borderRadius * 2,

		display: 'flex',
		alignItems: 'center',
		gap: '.5rem',

		transition: theme.transitions.create(['background-color', 'border-color', 'width']),

		'&:hover': {
			backgroundColor: alpha(theme.palette.primary.light, 0.2),
		},
	};
});

const ContentName = styled(Box)(({ theme }) => {
	return {
		flexDirection: 'column',
		overflow: 'hidden',
		padding: '0 .1rem  0 1rem',
		textTransform: 'none',
		flexGrow: 1,

		'& > *:first-child': {
			overflow: 'hidden',
			textOverflow: 'ellipsis',
			whiteSpace: 'nowrap',
		},

		display: 'none',
		[theme.breakpoints.up('md')]: {
			display: 'block',
		},
	};
});

export default BtnUser;

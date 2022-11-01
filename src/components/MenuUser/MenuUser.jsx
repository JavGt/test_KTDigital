import {
	Avatar,
	Box,
	Divider,
	ListItemIcon,
	Menu,
	MenuItem,
	Typography,
} from '@mui/material';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import { styled } from '@mui/material/styles';

const MenuUser = ({ open, anchorEl, close }) => {
	return (
		<MenuStyled
			anchorEl={anchorEl}
			id='account-menu'
			open={open}
			onClose={close}
			onClick={close}
			transformOrigin={{ horizontal: 'right', vertical: 'top' }}
			anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}>
			<MenuItem>
				<User>
					<Avatar
						alt='User'
						src='https://i.pinimg.com/564x/13/9a/13/139a13ecce92145c591a348fef387ca2.jpg'
					/>
					<div>
						<Typography variant='body2' fontWeight={'700'}>
							María Fernanda López
						</Typography>
						<Typography variant='body2'>Profesora</Typography>
					</div>
				</User>
			</MenuItem>

			<Divider />

			<MenuItem>
				<ListItemIcon>
					<Settings fontSize='small' />
				</ListItemIcon>
				<Typography variant='body2'>Configuraciones</Typography>
			</MenuItem>
			<MenuItem
				sx={{
					color: 'error.main',
					' *': {
						color: 'error.main',
					},
					'&:hover': {
						color: 'common.white',
						backgroundColor: 'error.light',
						' *': {
							color: 'common.white',
						},
					},
				}}>
				<ListItemIcon>
					<Logout fontSize='small' />
				</ListItemIcon>
				<Typography variant='body2'>Cerrar sesión</Typography>
			</MenuItem>
		</MenuStyled>
	);
};

/**overflow: 'visible',
			filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
			mt: 1.5,
			'& .MuiAvatar-root': {
				width: 32,
				height: 32,
				ml: -0.5,
				mr: 1,
			},
			'&:before': {
				content: '""',
				display: 'block',
				position: 'absolute',
				top: 0,
				right: 14,
				width: 10,
				height: 10,
				bgcolor: 'background.paper',
				transform: 'translateY(-50%) rotate(45deg)',
				zIndex: 0,
			},
			 */

const MenuStyled = styled(Menu)(({ theme }) => ({
	marginTop: '.6rem',
	[`& .MuiMenu-paper`]: {
		borderRadius: theme.shape.borderRadius / 2,
		boxShadow: theme.shadows[1],
		width: '12rem',
		overflow: 'hidden',
	},
}));

const User = styled(Box)(({ theme }) => ({
	display: 'flex',
	alignItems: 'center',
	width: '100%',
	gap: theme.spacing(1),

	'& div': {
		display: 'flex',
		flexDirection: 'column',
		width: '100%',
		flexGrow: 1,
		overflow: 'hidden',
	},

	'& .MuiAvatar-root': {
		width: 40,
		height: 40,
	},

	'& .MuiTypography-root': {
		overflow: 'hidden',
		textOverflow: 'ellipsis',
		whiteSpace: 'nowrap',
	},
}));

export default MenuUser;

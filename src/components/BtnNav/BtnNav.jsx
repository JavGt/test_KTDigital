import { toggleNavigation } from '@/redux/slice/navegation.slice';
import { Fab } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import { styled } from '@mui/material/styles';
import { drawerWidth } from '../Layout/AsideNavigation/AsideNavigation';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';

const BtnNav = () => {
	const dispatch = useDispatch();
	const { openNavigation } = useSelector(state => state.navigation);

	const handleDrawerOpen = () => dispatch(toggleNavigation());

	return (
		<FabStyle
			open={openNavigation}
			left={openNavigation ? drawerWidth + 16 : 16}
			onClick={handleDrawerOpen}
			aria-label='add'>
			{openNavigation ? <CloseRoundedIcon /> : <MenuOpenIcon />}
		</FabStyle>
	);
};

const FabStyle = styled(Fab)(({ theme, left, open }) => ({
	position: 'absolute',

	bottom: 16,
	left,
	backgroundColor: '#fff',
	boxShadow: 'none',

	transition: theme.transitions.create(['left'], {
		easing: theme.transitions.easing.easeInOut,
		duration: theme.transitions.duration.sharp,
	}),

	'&:hover': {
		backgroundColor: '#fff',
	},
	'&:focus': {
		backgroundColor: '#fff',
		boxShadow: 'none',
	},
}));

export default BtnNav;

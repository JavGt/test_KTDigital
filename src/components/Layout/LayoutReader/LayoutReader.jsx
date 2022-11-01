import { Box, Toolbar } from '@mui/material';
import { styled } from '@mui/material/styles';
import { AsideNavigation } from '@/components/Layout/AsideNavigation';
import { drawerWidth } from '../AsideNavigation/AsideNavigation';
import { Header } from '@/components/Header';
import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

const LayoutReader = () => {
	const { openNavigation } = useSelector(state => state.navigation);

	return (
		<LayoutReaderStyle>
			<Header />
			<AsideNavigation />
			<Toolbar />
			<MainStyled open={openNavigation}>
				<Outlet />
			</MainStyled>
		</LayoutReaderStyle>
	);
};

export const LayoutReaderStyle = styled(Box)(({ theme }) => ({
	width: '100%',
	minHeight: '100vh',
	backgroundColor: theme.palette.common.white,
}));

export const MainStyled = styled(Box)(({ theme, open }) => ({
	marginTop: '40px',
	marginRight: '20px',
	marginBottom: '20px',

	...(open && {
		marginLeft: drawerWidth + 20,
		width: `calc(100% - ${drawerWidth}px -40px)`,
	}),

	...(!open && {
		marginLeft: 20,
		width: `calc(100% - 40px)`,
	}),
}));

export default LayoutReader;

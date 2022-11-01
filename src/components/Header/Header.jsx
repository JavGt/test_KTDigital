import { styled } from '@mui/material/styles';
import { AppBar, Toolbar, Box } from '@mui/material';
import { HideOnScroll } from '../HideOnScroll';
import { SearchNav } from '../SearchNav';
import { GroupBtnHeader } from '../GroupBtnHeader';
import { BtnUser } from '../BtnUser';
import { drawerWidth } from '../Layout/AsideNavigation/AsideNavigation';
import { useSelector } from 'react-redux';

const Header = () => {
	const { openNavigation } = useSelector(state => state.navigation);
	const width = openNavigation ? drawerWidth + 20 : 20;

	return (
		<AppBarStyled width={width}>
			<HideOnScroll>
				<HeaderStyled>
					<Toolbar
						sx={{
							display: 'flex',
							justifyContent: 'space-between',
						}}>
						<SearchNav />
						<GroupBtnHeader />
						<BtnUser />
					</Toolbar>
				</HeaderStyled>
			</HideOnScroll>
		</AppBarStyled>
	);
};

export const AppBarStyled = styled(AppBar)(({ theme, width }) => ({
	backgroundColor: 'transparent',
	boxShadow: 'none',
	marginTop: '20px',
	marginRight: '20px',
	width: `calc(100% - ${width}px - 20px)`,
	marginLeft: width + 'px',

	transition: theme.transitions.create(['width', 'marginLeft', 'transform'], {
		easing: theme.transitions.easing.easeInOut,
		duration: theme.transitions.duration.sharp,
	}),
}));

export const HeaderStyled = styled(Box)(({ theme }) => ({
	backgroundColor: '#fff',
	borderRadius: theme.shape.borderRadius * 2,
}));

export default Header;

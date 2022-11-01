import { Drawer } from '@mui/material';
import { styled, alpha } from '@mui/material/styles';
import StepperNav from '../StepperNav/StepperNav';

import { useSelector } from 'react-redux';
import { BtnNav } from '@/components/BtnNav';

export const drawerWidth = 300;

const AsideNavigation = () => {
	const { openNavigation } = useSelector(state => state.navigation);
	return (
		<>
			<BtnNav />
			<AsideNavigationStyled variant='persistent' open={openNavigation}>
				<StepperNav />
			</AsideNavigationStyled>
		</>
	);
};

export const AsideNavigationStyled = styled(Drawer)(({ theme }) => ({
	[`& .MuiDrawer-paper`]: {
		width: drawerWidth,
		borderRight: 'none',
		// borderRight: `1px solid ${theme.palette.common.gray}`,
	},
}));

export default AsideNavigation;

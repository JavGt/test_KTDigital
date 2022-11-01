import React from 'react';
import HomeIcon from '@mui/icons-material/Home';
import { Tooltip, Button } from '@mui/material';
import { styled, alpha } from '@mui/material/styles';
import { ToolTipNav } from '@/components/ToolTipNav';

const BtnHome = () => {
	return (
		<ToolTipNav fontWeight='900' arrow={true} title='Home' placement='left'>
			<ButtonHome>
				<HomeIcon sx={{ width: '2rem', height: '2rem' }} />
			</ButtonHome>
		</ToolTipNav>
	);
};

const ButtonHome = styled(Button)(({ theme }) => {
	return {
		borderRadius: theme.shape.borderRadius,
		backgroundColor: alpha(theme.palette.common.white, 0.2),
		color: theme.palette.common.white,
		transition: 'all 0.3s ease',

		'&:hover': {
			backgroundColor: alpha(theme.palette.common.white, 0.9),
			color: theme.palette.primary.dark,
			borderRadius: theme.shape.borderRadius * 2,
		},
	};
});

export default BtnHome;

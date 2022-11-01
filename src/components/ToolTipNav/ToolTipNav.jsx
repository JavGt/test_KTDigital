import React from 'react';
import { Tooltip, Typography } from '@mui/material';
import { styled, alpha } from '@mui/material/styles';

export const TooltipStyle = styled(({ className, ...props }) => (
	<Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
	'& .MuiTooltip-tooltip': {
		backgroundColor: theme.palette.common.black,
		color: theme.palette.common.white,
		fontSize: theme.typography.pxToRem(15),
		fontWeight: theme.typography.fontWeightBold,
	},
	'&  .MuiTooltip-arrow': {
		color: theme.palette.common.black,
	},
}));

const ToolTipNav = ({ title, children, arrow, placement, fontWeight = '400' }) => {
	return (
		<TooltipStyle
			arrow={arrow}
			title={
				<Typography fontWeight={fontWeight} variant='body2' color='inherit'>
					{title}
				</Typography>
			}
			placement={placement}>
			{children}
		</TooltipStyle>
	);
};

export default ToolTipNav;

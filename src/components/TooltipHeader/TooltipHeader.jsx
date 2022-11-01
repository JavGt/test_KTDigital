import { Tooltip } from '@mui/material';
import { styled } from '@mui/material/styles';

export const TooltipStyle = styled(({ className, ...props }) => (
	<Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
	'& .MuiTooltip-tooltip': {
		backgroundColor: theme.palette.common.white,
		color: theme.palette.secondary.main,
		fontSize: theme.typography.pxToRem(15),
		borderRadius: theme.shape.borderRadius / 4,
		boxShadow: theme.shadows[5],
	},
}));

const TooltipHeader = ({ children, ...props }) => {
	return <TooltipStyle {...props}>{children}</TooltipStyle>;
};

export default TooltipHeader;

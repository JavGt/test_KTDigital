import { Box, IconButton, Badge } from '@mui/material';
import { TooltipHeader } from '../TooltipHeader';
import { useWindowFullScreen } from '@/hooks/useWindowFullScreen';
import { alpha, styled } from '@mui/material/styles';

// Iconos
import ZoomOutMapIcon from '@mui/icons-material/ZoomOutMap';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import DescriptionRoundedIcon from '@mui/icons-material/DescriptionRounded';
import BookmarkBorderRoundedIcon from '@mui/icons-material/BookmarkBorderRounded';
import NotificationsNoneRoundedIcon from '@mui/icons-material/NotificationsNoneRounded';
import AutoStoriesRoundedIcon from '@mui/icons-material/AutoStoriesRounded';
import { Link } from 'react-router-dom';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

export const IconButtonStyle = styled(({ className, ...props }) => (
	<IconButton {...props} classes={{ root: className }} />
))(({ theme }) => ({
	color: theme.palette.primary.main,
	background: alpha(theme.palette.primary.light, 0.04),
}));

const GroupBtnHeader = () => {
	const { toggleFullScreen } = useWindowFullScreen();

	return (
		<Box
			sx={{
				display: 'flex',
				justifyContent: 'center',
				gap: '.7rem',
				flexGrow: 1,
			}}>
			<Box
				sx={{
					display: theme => {
						return {
							[theme.breakpoints.down('sm')]: {
								display: 'block',
							},
							[theme.breakpoints.up('sm')]: {
								display: 'none',
							},
						};
					},
				}}>
				<TooltipHeader title='Mas'>
					<IconButtonStyle>
						<MoreHorizIcon />
					</IconButtonStyle>
				</TooltipHeader>
			</Box>
			<Box
				sx={{
					display: theme => {
						return {
							[theme.breakpoints.down('sm')]: {
								display: 'none',
							},
						};
					},
				}}>
				<TooltipHeader title='Libro'>
					<IconButtonStyle>
						<AutoStoriesRoundedIcon />
					</IconButtonStyle>
				</TooltipHeader>

				<TooltipHeader title='Notas'>
					<IconButtonStyle>
						<DescriptionRoundedIcon />
					</IconButtonStyle>
				</TooltipHeader>

				<TooltipHeader title='Modo'>
					<IconButtonStyle sx={{ color: '#ffc800' }}>
						<WbSunnyIcon />
					</IconButtonStyle>
				</TooltipHeader>

				<TooltipHeader title='Pantalla completa'>
					<IconButtonStyle onClick={toggleFullScreen}>
						<ZoomOutMapIcon />
					</IconButtonStyle>
				</TooltipHeader>

				<TooltipHeader title='Favoritos'>
					<IconButtonStyle>
						<BookmarkBorderRoundedIcon />
					</IconButtonStyle>
				</TooltipHeader>

				<TooltipHeader title='Notificación'>
					<IconButtonStyle>
						<Badge
							anchorOrigin={{ vertical: 'top', horizontal: 'left' }}
							variant='dot'
							color='error'>
							<NotificationsNoneRoundedIcon />
						</Badge>
					</IconButtonStyle>
				</TooltipHeader>
			</Box>
		</Box>
	);
};

export default GroupBtnHeader;

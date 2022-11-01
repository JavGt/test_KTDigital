import {
	Collapse,
	IconButton,
	List,
	ListItem,
	ListItemButton,
	ListItemIcon,
	ListItemText,
	Typography,
} from '@mui/material';
import { ItemBookN3 } from '../ItemBookN3';
import { useBoolean } from '@/hooks/useBoolean';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import ExpandMore from '@mui/icons-material/ExpandMore';

const ItemBookN2 = ({ itemBookN2, index }) => {
	const { value, toggle } = useBoolean(false);

	return (
		<>
			<ListItem
				disablePadding
				secondaryAction={
					itemBookN2.hijos.length > 0 ? (
						<IconButton disablePadding onClick={toggle}>
							{value ? <CloseRoundedIcon /> : <ExpandMore />}
						</IconButton>
					) : null
				}>
				<ListItemButton>
					<ListItemIcon>
						<Typography color='primary.main' variant='h5'>
							{index}
						</Typography>
					</ListItemIcon>
					<ListItemText
						primary={
							<Typography fontWeight={600} variant='body2' fontSize={'.8rem'}>
								{itemBookN2.seccion}
							</Typography>
						}
						secondary={
							<Typography fontSize={'.7rem'} variant='body2'>
								{itemBookN2.nombre}
							</Typography>
						}
					/>
				</ListItemButton>
			</ListItem>
			<List disablePadding>
				<Collapse in={value}>
					{itemBookN2.hijos.map((item, subIndex) => (
						<ItemBookN3 itemBookN3={item} index={index + '.' + (subIndex + 1)} />
					))}
				</Collapse>
			</List>
		</>
	);
};

export default ItemBookN2;

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
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import ExpandMore from '@mui/icons-material/ExpandMore';

import { ItemBookN2 } from '../ItemBookN2';
import { useBoolean } from '@/hooks/useBoolean';

const ItemBookN1 = ({ itemBookN1, index }) => {
	const { toggle, value } = useBoolean(false);
	return (
		<>
			<ListItem
				divider
				disablePadding
				secondaryAction={
					itemBookN1.hijos.length > 0 ? (
						<IconButton disablePadding onClick={toggle}>
							{value ? <CloseRoundedIcon /> : <ExpandMore />}
						</IconButton>
					) : null
				}>
				<ListItemButton>
					<ListItemIcon>
						<Typography color='primary.main' variant='h2'>
							{index}
						</Typography>
					</ListItemIcon>
					<ListItemText
						primary={<Typography fontWeight={600}>{itemBookN1.nombre}</Typography>}
						secondary={<Typography>{itemBookN1.seccion}</Typography>}
					/>
				</ListItemButton>
			</ListItem>
			<Collapse in={value}>
				<List disablePadding>
					{itemBookN1.hijos.map((item, subIndex) => (
						<ItemBookN2
							index={index + '.' + (subIndex + 1)}
							itemBookN2={item}
							key={index}
						/>
					))}
				</List>
			</Collapse>
		</>
	);
};

export default ItemBookN1;

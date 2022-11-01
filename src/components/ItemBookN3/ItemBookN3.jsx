import { ListItemButton, Typography } from '@mui/material';
import React from 'react';

const ItemBookN3 = ({ itemBookN3,index }) => {
	return (
		<ListItemButton>
			<Typography>
				{itemBookN3.seccion} {itemBookN3.nombre && ' - ' + itemBookN3.nombre}
			</Typography>
		</ListItemButton>
	);
};

export default ItemBookN3;

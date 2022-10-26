import { Typography } from '@mui/material';
import React from 'react';

const ItemTable = ({ value }) => {
	return (
		<div>
			{
				value.type === "imagen" ? (
					<img src={value.value} alt="img" />
				) : (
					<Typography variant="body2" color="text.secondary">
						{value.value}
					</Typography>
				)
			}
		</div>
	);
};

export default ItemTable;

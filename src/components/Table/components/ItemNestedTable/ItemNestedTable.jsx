import { Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';
import React from 'react';

const ItemNestedTable = ({ data }) => {
	// console.log(data)
	return (
		<TableRow>
			<TableCell>
				<Table>
					<TableHead>
						<TableRow>
							{
								data.headers.map((header, index) => (
									console.log(header)
									// <TableCell key={index} align="center">Header</TableCell>
								))
							}
						</TableRow>
					</TableHead>
					<TableBody>
						<TableRow>
							<TableCell align='center'>owo</TableCell>
						</TableRow>
					</TableBody>
				</Table>
			</TableCell>
		</TableRow>
	);
};

export default ItemNestedTable;

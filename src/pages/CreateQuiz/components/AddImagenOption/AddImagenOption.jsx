import { useState } from 'react';
import { Box, Button, IconButton, Stack, Typography } from '@mui/material';
import PhotoCamera from '@mui/icons-material/PhotoCamera';

const notes = [
	'Para que el quiz se vea bien, debes usar imágenes de cuadriculas con máximo 100px de diferencia. Ej: 900x800 , 500x500',
	'Puede unir texto y latex, por ejemplo: $x^2-2xy-y^2$ es el resultado de la ecuación $x^2-2xy-y^2=0$',
];

const AddImagenOption = ({ setValue }) => {
	const [image, setImage] = useState(null);

	const [preview, setPreview] = useState(null);

	const handleImageChange = e => {
		if (e.target.files[0]) {
			const file = e.target.files[0];

			const data = {
				name: file.name,
				size: file.size,
				type: file.type,
				lastModified: file.lastModified,
				lastModifiedDate: file.lastModifiedDate,
				webkitRelativePath: file.webkitRelativePath,
			};

			setValue(URL.createObjectURL(e.target.files[0]));
			setImage(data);
			setPreview(URL.createObjectURL(e.target.files[0]));
		}
	};

	return (
		<>
			<Stack direction='row' alignItems='center' spacing={2}>
				<Button variant='contained' component='label'>
					Upload
					<input onChange={handleImageChange} hidden accept='image/*' type='file' />
				</Button>
				<IconButton color='primary' aria-label='upload picture' component='label'>
					<input onChange={handleImageChange} hidden accept='image/*' type='file' />
					<PhotoCamera />
				</IconButton>
			</Stack>

			<pre>{JSON.stringify(image, null, 2)}</pre>

			{preview && (
				<picture>
					<img width={500} src={preview} alt='preview' />
				</picture>
			)}

			<Box>
				<Typography component={'address'}>Notas</Typography>
				{notes.map((note, idx) => (
					<Typography key={idx} component={'li'}>
						{note}
					</Typography>
				))}
			</Box>
		</>
	);
};

export default AddImagenOption;

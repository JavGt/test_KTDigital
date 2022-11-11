import { useState } from 'react';
import { Box, Button, Divider, IconButton, Stack, Typography } from '@mui/material';
import PhotoCamera from '@mui/icons-material/PhotoCamera';

const notes = [
	'Para que el quiz se vea bien, debes usar imágenes de cuadradas con máximo 100px de diferencia. Ej: 900x800 , 500x500',
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

			setImage(data);
			setValue(URL.createObjectURL(e.target.files[0]));
			setPreview(URL.createObjectURL(e.target.files[0]));
		}
	};

	return (
		<>
			<Stack direction='column' alignItems='center' spacing={2}>
				<IconButton
					sx={{
						width: 100,
						height: 100,
						border: '1px solid #ccc',
					}}
					size='large'
					color='primary'
					aria-label='upload picture'
					component='label'
				>
					<input onChange={handleImageChange} hidden accept='image/*' type='file' />
					<PhotoCamera />
				</IconButton>

				<Typography variant='h6' component='h2'>
					{preview ? 'Seleccionar otra imagen' : 'Click para cargar una imagen'}
				</Typography>

				{preview && (
					<>
						<Box my={2} width='100%'>
							<Divider />
						</Box>

						<Box component='figure' sx={{ '& img': { borderRadius: 1 } }}>
							<img width={200} height={200} src={preview} alt='preview' />
						</Box>

						<Typography variant='h6' component='figcaption' fontWeight={800}>
							{image.name}
						</Typography>
					</>
				)}
			</Stack>

			<Box my={2} width='100%'>
				<Divider />
			</Box>

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

import { useState, useEffect } from 'react';
import { Box, Divider, IconButton, Stack, Typography } from '@mui/material';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import { useDropzone } from 'react-dropzone';

const notes = [
	'Para que el quiz se vea bien, debes usar imágenes de cuadradas con máximo 100px de diferencia. Ej: 900x800 , 500x500',
];

const validatePixelImage = (file, maxDifference = 100) => {
	return new Promise((resolve, reject) => {
		const img = new Image();
		img.src = URL.createObjectURL(file);

		img.onload = () => {
			const width = img.width;
			const height = img.height;
			const result = width - height;

			if (result < maxDifference && result > -maxDifference) resolve(true);
			else reject('La imagen no cumple con las dimensiones');
		};
	});
};

const AddImagenOption = ({ setValue }) => {
	const [preview, setPreview] = useState(null);

	const {
		acceptedFiles,
		getRootProps,
		getInputProps,
		isFocused,
		isDragAccept,
		isDragReject,
	} = useDropzone({ accept: { 'image/*': [] } });

	useEffect(() => {
		if (acceptedFiles.length > 0) handleImageChange(acceptedFiles[0]);
	}, [acceptedFiles]);

	const handleImageChange = async file => {
		if (!file) return setPreview(null);

		try {
			const isValidate = await validatePixelImage(file);

			if (isValidate) {
				setValue(file);
				setPreview(URL.createObjectURL(file));
			}
		} catch (err) {
			alert(err);
		}
	};

	return (
		<>
			<Stack direction='column' alignItems='center' gap={2}>
				<Stack
					width='100%'
					direction={{ xs: 'column-reverse', sm: 'row' }}
					alignItems={'center'}
					justifyContent={'space-between'}
					gap={2}
				>
					<Box
						{...getRootProps()}
						sx={{
							flexGrow: 1,
							padding: 2,
							borderRadius: 1,
							borderStyle: 'dashed',
							borderWidth: 2,
							borderColor: 'divider',
							transitions: 'border 0.24s ease-in-out',
							...(isFocused && { borderColor: 'info.main' }),
							...(isDragAccept && { borderColor: 'success.main' }),
							...(isDragReject && { borderColor: 'error.main' }),
							'&:focus': { outline: 'none' },
							'&:hover': { borderColor: 'info.main', cursor: 'pointer' },
						}}
					>
						<input {...getInputProps()} accept='image/*' />
						<Typography variant='h6' component='h2'>
							{preview ? 'Seleccionar otra imagen' : 'Click para cargar una imagen'}
						</Typography>

						<Typography variant='body2' component='p'>
							Puedes arrastrar y soltar la imagen aquí o hacer click para cargarla
						</Typography>
					</Box>
					<IconButton
						sx={{
							width: 100,
							height: 100,
							borderStyle: 'double',
							borderWidth: 1,
							borderColor: 'divider',
						}}
						color='primary'
						aria-label='upload picture'
						component='label'
					>
						<input
							hidden
							accept='image/*'
							type='file'
							onChange={e => handleImageChange(e.target.files[0])}
						/>

						<PhotoCamera />
					</IconButton>
				</Stack>

				{preview && (
					<>
						<Box my={2} width='100%'>
							<Divider />
						</Box>
						<Typography variant='h6' component='h2'>
							Imagen seleccionada
						</Typography>

						<Box component='figure'>
							<img width={200} src={preview} alt='preview' />
						</Box>
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

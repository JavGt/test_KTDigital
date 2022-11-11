import { Box, Stack, Typography, Divider } from '@mui/material';
import imgBook from '@/assets/img/icons/book.png';
import { styled } from '@mui/material/styles';

export default function ViewImportant() {
	return (
		<>
			<Divider sx={{ my: 3 }} />

			<ViewImportantStyled
				alignItems='center'
				gap={2}
				justifyContent='space-between'
				direction={{ xs: 'column', md: 'row' }}
			>
				<Box>
					<Typography variant='h5' component='h2' fontWeight={600}>
						Importante
					</Typography>

					<Divider sx={{ my: 2 }} />

					<Typography component='ul' variant='body1'>
						<Typography component='li' variant='inherit'>
							Nota: Las instrucciones, preguntas y respuestas pueden contener texto,
							imágenes y latex.
						</Typography>

						<Typography component='li' variant='inherit'>
							Recomendación: Para que el quiz se vea bien, debes usar imágenes de
							cuadriculas con máximo 100px de diferencia. Ej:
							<Typography
								component='span'
								variant='inherit'
								gutterBottom
								fontWeight={700}
							>
								{' '}
								900x800 , 500x500
							</Typography>
						</Typography>
					</Typography>
				</Box>

				<picture aria-label='Imagen de un libro con un lápiz y una regla'>
					<img src={imgBook} alt='Imagen de un libro' width={100} />
				</picture>
			</ViewImportantStyled>
		</>
	);
}

const ViewImportantStyled = styled(Stack)(({ theme }) => ({
	padding: theme.spacing(3),
	borderRadius: theme.shape.borderRadius,
	border: '1px solid',
	backgroundColor: theme.palette.background.paper,
	borderColor: theme.palette.grey[300],
}));

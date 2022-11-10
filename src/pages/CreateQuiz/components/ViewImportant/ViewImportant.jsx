import { Box, Stack, Typography, Divider } from '@mui/material';
import imgBook from '@/assets/img/icons/book.png';
import { styled } from '@mui/material/styles';

export default function ViewImportant() {
	return (
		<>
			<Stack
				alignItems='center'
				justifyContent='space-between'
				direction={{ xs: 'column', md: 'row' }}
				sx={{
					backgroundColor: 'background.paper',
					p: 5,
					borderRadius: theme => theme.shape.borderRadius,
					boxShadow: theme => theme.shadows[1],
				}}>
				<Box>
					<Typography variant='h5' component='h2' gutterBottom fontWeight={600}>
						Importante
					</Typography>

					<Divider sx={{ my: 2 }} />

					<ul>
						<Typography component={'li'} variant='subtitle1' gutterBottom>
							Nota: Las instrucciones, preguntas y respuestas pueden contener texto,
							imágenes y latex.
						</Typography>

						<Typography component={'li'} variant='subtitle1' gutterBottom>
							Recomendación: Para que el quiz se vea bien, debes usar imágenes de
							cuadriculas con máximo 100px de diferencia. Ej:
							<Typography
								component={'span'}
								variant='subtitle1'
								gutterBottom
								fontWeight={700}
								color='primary'>
								{' '}
								900x800 , 500x500
							</Typography>
						</Typography>
					</ul>
				</Box>

				<Picture>
					<img src={imgBook} alt='' width={200} />
				</Picture>
			</Stack>
			<Divider sx={{ my: 5 }} />
		</>
	);
}

const Picture = styled('picture')(({ theme }) => ({
	'& img': {
		transition: theme.transitions.create('transform'),

		'&:hover, &:focus': {
			transform: 'scale(1.3)',
		},
	},
}));

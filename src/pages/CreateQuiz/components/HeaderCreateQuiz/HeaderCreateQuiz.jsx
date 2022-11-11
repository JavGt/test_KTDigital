import { Divider, Typography } from '@mui/material';

export default function HeaderCreateQuiz() {
	return (
		<>
			<Typography variant='h2' fontWeight={800} component='h1'>
				Creación de Quizzes.{' '}
				<span role='img' aria-label='emoji'>
					🚀
				</span>
			</Typography>

			<Typography variant='h5' component='h2'>
				En esta sección podrás crear tus propios quizzes para
				<Typography fontWeight={800} variant='inherit' component='span' color='primary'>
					{' '}
					Ktdra.{' '}
					<span role='img' aria-label='emoji'>
						🎉
					</span>
				</Typography>
			</Typography>
			<Divider sx={{ my: 3 }} />
		</>
	);
}

import { Box, Divider, Typography } from '@mui/material';

const HeaderCreateQuiz = () => {
	return (
		<>
			<Typography variant='h2' fontWeight={800} component='h1' gutterBottom>
				Creación de Quizzes. 🚀
			</Typography>

			<Typography variant='h5' component='h2' gutterBottom>
				En esta sección podrás crear tus propios quizzes para
				<Typography fontWeight={700} variant='h5' component='span' color='primary'>
					{' '}
					Ktdra.{' '}
					<span role='img' aria-label='emoji'>
						🎉
					</span>
				</Typography>
			</Typography>
			<Divider sx={{ my: 5 }} />
		</>
	);
};

export default HeaderCreateQuiz;

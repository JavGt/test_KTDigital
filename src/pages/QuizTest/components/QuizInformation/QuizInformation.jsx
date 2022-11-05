import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import { styled } from '@mui/material/styles';

const QuizInformation = ({ numQuestion, maxQuestions, maxAnswers }) => {
	return (
		<Box>
			<Typography>
				<Typography fontWeight={700} variant='body1' component='span'>
					Pregunta:{' '}
					<Typography variant='body1' component='span'>
						{`${numQuestion} / ${maxQuestions}`}
					</Typography>
				</Typography>
			</Typography>
			<Typography variant='body1' fontWeight={700}>
				Opciones disponibles:
				<Typography variant='body1' component='span'>{` ${maxAnswers}`}</Typography>
			</Typography>
		</Box>
	);
};

QuizInformation.defaultProps = {
	numQuestion: 0,
	maxQuestions: 0,
	resource: false,
	questionText: '',
	maxAnswers: 1,
};

export default QuizInformation;

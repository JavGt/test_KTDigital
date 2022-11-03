import { Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Box } from '@mui/system';

const QuizInformation = ({ numQuestion, maxQuestions, maxAnswers }) => {
	return (
		<QuizInformationStyled>
			<Typography>
				<Typography fontWeight={700} component='span'>
					Pregunta:{' '}
				</Typography>
				{`${numQuestion} / ${maxQuestions}`}
			</Typography>
			<Typography fontWeight={700}>
				Opciones disponibles:
				<Typography component='span'>{` ${maxAnswers}`}</Typography>
			</Typography>
		</QuizInformationStyled>
	);
};

QuizInformation.defaultProps = {
	numQuestion: 0,
	maxQuestions: 0,
	resource: false,
	questionText: '',
	maxAnswers: 1,
};

export const QuizInformationStyled = styled(Box)(({ theme }) => ({
	textAlign: 'center',
	marginBottom: theme.spacing(2),
}));

export default QuizInformation;

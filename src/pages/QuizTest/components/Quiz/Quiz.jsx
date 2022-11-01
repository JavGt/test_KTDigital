import { styled } from '@mui/material/styles';
import { Box } from '@mui/system';
import QuizData from '#/quiz.json';
import { TitleExercise } from '../TitleExercise';
import { QuizInformation } from '../QuizInformation';
import { useState } from 'react';
import { getAlphabet } from '@/utils/getAlphabet';
import { AnswerBox } from '../AnswerBox';
import { Divider } from '@mui/material';

const Quiz = ({ data }) => {
	const [stepper, setStepper] = useState(0);

	return (
		<QuizStyled>
			<Box
				sx={{
					display: 'flex',
					justifyContent: 'space-between',
					alignItems: 'center',
				}}>
				<TitleExercise title={data.nombre} description={data.instruccion[0].value} />
				<QuizInformation numQuestion={stepper + 1} maxQuestions={data.cuerpo.length} />
			</Box>
			<Divider />
			<Box sx={{ marginTop: theme => theme.spacing(2) }}>
				{data.cuerpo.map((question, index) => (
					<AnswerBox key={index} number={index} answer={question} />
				))}
			</Box>
		</QuizStyled>
	);
};

Quiz.defaultProps = {
	data: QuizData,
};

const QuizStyled = styled(Box)(({ theme }) => ({
	borderRadius: theme.shape.borderRadius,
	boxShadow: theme.shadows[2],
	padding: '16px',
}));

export default Quiz;

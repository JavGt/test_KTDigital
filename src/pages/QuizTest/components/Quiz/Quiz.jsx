import { styled } from '@mui/material/styles';
import QuizData from '#/quiz.json';
import { TitleExercise } from '../TitleExercise';
import { QuizInformation } from '../QuizInformation';
import { useEffect, useReducer, useState } from 'react';
import { Box, Grid, Stack } from '@mui/material';
import { SectionQuestion } from '../SectionQuestion';
import { SectionAnswers } from '../SectionAnswers';
import { useCalification } from '../../hook/useCalification';

import {
	emptyQuizQuestion,
	quizReducer,
	typesReducer,
} from '../../Reducer/DataQuiz.reducer';

import { ViewFinish } from '../../ViewFinish';

import { Timer } from '../Timer';

export const getAvailableOptions = options =>
	options.reduce((acc, { correct }) => acc + correct, 0);

const Quiz = ({ data }) => {
	const [quizQuestion, dispatch] = useReducer(quizReducer, emptyQuizQuestion);

	const [questionsAnswered, setQuestionsAnswered] = useState([]);

	const [questionIndex, setQuestionIndex] = useState(0);

	const [quizResult, setQuizResult] = useState({});

	const { calificationQuiz } = useCalification();

	const handleNextQuestion = options => {
		const option = {
			selectedOptions: options,
			question: questionIndex,
		};

		setQuestionIndex(idx => ++idx);
		setQuestionsAnswered(prev => [...prev, option]);
	};

	const formatQuestion = () => {
		const { question, options } = data.cuerpo[questionIndex];

		const availableOptions = getAvailableOptions(options);

		dispatch({
			type: typesReducer.addQuestion,
			payload: { question, options, availableOptions },
		});
	};

	const handleComplete = () => {
		const result = calificationQuiz(questionsAnswered, data.cuerpo);
		setQuizResult(result);
	};

	// Almacena la pregunta en dicha posición
	useEffect(() => {
		if (data.cuerpo.length - 1 < questionIndex) handleComplete();
		else if (data.cuerpo[questionIndex]) formatQuestion();
	}, [questionIndex]);

	return (
		<QuizStyled>
			{!!Object.keys(quizResult).length ? (
				<ViewFinish score={quizResult} />
			) : (
				<>
					<Stack
						gap={2}
						direction={{ xs: 'column', sm: 'row' }}
						justifyContent='space-between'
						alignItems={{ xs: 'flex-start', sm: 'center' }}>
						<TitleExercise title={data.nombre} instructions={data.instruction} />

						<QuizInformation
							numQuestion={questionIndex + 1}
							maxQuestions={data.cuerpo.length}
							maxAnswers={quizQuestion.availableOptions}
						/>
					</Stack>
					<Timer time={30} setFinish={handleComplete} />

					<Grid container spacing={2}>
						<Grid md={6} xs={12} item>
							<SectionQuestion
								numberQuestion={questionIndex}
								question={quizQuestion.question}
							/>
						</Grid>
						<Grid md={6} xs={12} item>
							<SectionAnswers
								onNext={handleNextQuestion}
								options={quizQuestion.options}
								availableOptions={quizQuestion.availableOptions}
							/>
						</Grid>
					</Grid>
				</>
			)}
		</QuizStyled>
	);
};

Quiz.defaultProps = { data: QuizData };

const QuizStyled = styled(Box)(({ theme }) => ({
	position: 'relative',
	borderRadius: theme.shape.borderRadius,
	boxShadow: theme.shadows[10],
	padding: theme.spacing(3),
	margin: theme.spacing(5, 0),
	backgroundColor: theme.palette.background.paper,
}));

export default Quiz;

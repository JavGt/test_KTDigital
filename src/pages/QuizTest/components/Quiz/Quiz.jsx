import { styled } from '@mui/material/styles';
import QuizData from '#/quiz.json';
import { TitleExercise } from '../TitleExercise';
import { QuizInformation } from '../QuizInformation';
import { useEffect, useReducer, useState } from 'react';
import { Divider, Box, Grid, Typography } from '@mui/material';
import { SectionQuestion } from '../SectionQuestion';
import { SectionAnswers } from '../SectionAnswers';
import { typeFactory } from '@/utils/typeFactory';

const useCalification = () => {
	const calificationQuiz = saveAnswers => {
		const score = saveAnswers.map(ans => {
			const { answer, availableOptions } = ans;
			const corrects =
				answer.reduce((acc, curr) => (curr.correcta ? ++acc : acc), 0) * 100;
			const scoreQuestion = corrects / availableOptions;
			return { ...ans, score: scoreQuestion };
		});

		return {
			scoreQuiz: (
				score.reduce((acc, curr) => acc + curr.score, 0) / score.length
			).toFixed(2),
			answer: score,
		};
	};
	return { calificationQuiz };
};

const typesReducer = {
	addQuestion: 'addQuestion',
};

function reducer(state, action) {
	switch (action.type) {
		case typesReducer.addQuestion:
			return action.payload;
		default:
			throw new Error('No se ha definido el tipo de acción');
	}
}

const EmptyQuiz = {
	_id: '',
	question: [],
	answers: [],
	sizeCorrects: 0,
};

// Componente principal
const Quiz = ({ data, finalized = false }) => {
	const [dataQuiz, dispatch] = useReducer(reducer, EmptyQuiz);

	const [savedAnswers, setSavedAnswers] = useState([]);
	const [questionIndex, setQuestionIndex] = useState(0);
	const [isCompleted, setIsCompleted] = useState(false);
	const [score, setScore] = useState({});

	const { calificationQuiz } = useCalification();

	const handleNextExercise = option => {
		setQuestionIndex(prev => ++prev);
		setSavedAnswers(prev => [...prev, { ...option, question: questionIndex + 1 }]);
	};

	const getQuestion = () => {
		const { pregunta: question, respuestas: answers } = data.cuerpo[questionIndex];

		const sizeCorrects = answers.filter(qst => qst.correcta).length;

		dispatch({
			type: typesReducer.addQuestion,
			payload: { question, answers, sizeCorrects },
		});
	};

	// Almacena la pregunta en dicha posición
	useEffect(() => {
		if (data.cuerpo.length - 1 < questionIndex) {
			const score = calificationQuiz(savedAnswers);
			setScore(score);
			return setIsCompleted(true);
		} else if (data.cuerpo[questionIndex]) getQuestion();
	}, [questionIndex]);

	return (
		<QuizStyled>
			{isCompleted ? (
				<Box sx={{ height: '100%' }}>
					<Typography variant='h5' fontWeight={900}>
						¡Felicidades! Has completado el ejercicio
					</Typography>
					<Typography variant='h5' fontWeight={900}>
						Tu calificación final es: {score.scoreQuiz}
					</Typography>
					{score.answer.map((ans, index) => (
						<Box key={index}>
							<Typography variant='h5' fontWeight={900}>
								Pregunta {ans.question}
							</Typography>
							{ans.answer.map((asr, i) =>
								asr.respuesta.map(st => <span key={i}>{typeFactory(st)}</span>)
							)}
						</Box>
					))}
				</Box>
			) : (
				<>
					<Box
						sx={{
							display: 'flex',
							justifyContent: 'space-between',
							alignItems: 'center',
						}}>
						<TitleExercise title={data.nombre} instructions={data.instruccion} />
						<QuizInformation
							numQuestion={questionIndex + 1}
							maxQuestions={data.cuerpo.length}
							maxAnswers={dataQuiz.sizeCorrects}
						/>
					</Box>
					<Divider />
					<Box sx={{ marginTop: theme => theme.spacing(2) }}>
						<Grid container spacing={5}>
							<Grid md={6} xs={12} item>
								<SectionQuestion
									numberQuestion={questionIndex + 1}
									question={dataQuiz.question}
								/>
							</Grid>
							<Grid md={6} xs={12} item>
								<SectionAnswers
									onNext={handleNextExercise}
									answers={dataQuiz.answers}
									availableOptions={dataQuiz.sizeCorrects}
								/>
							</Grid>
						</Grid>
					</Box>
				</>
			)}
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
	margin: theme.spacing(10, 0),
}));

export default Quiz;

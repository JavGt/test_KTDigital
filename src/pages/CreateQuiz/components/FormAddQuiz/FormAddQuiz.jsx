import { Button, IconButton, Stack, TextField, Typography } from '@mui/material';
import { useReducer, useState } from 'react';
import { MultipleOptions } from '../InputInstruction';

import AddIcon from '@mui/icons-material/Add';
import { styled } from '@mui/material/styles';
import { NavigateNext } from '@mui/icons-material/';
import { QuestionsContainer } from '../QuestionsContainer';

export const actions = {
	setInstructions: 'setInstructions',
};

const reducer = (state, action) => {
	switch (action.type) {
		case actions.setInstructions:
			return { ...state, instructions: action.payload };
		default:
			return state;
	}
};

const FormAddQuiz = () => {
	const [data, dispatch] = useReducer(reducer, {});

	return (
		<FormAddQuizStyles>
			<InputTitle />

			<MultipleOptions label='Instrucciones del quiz' />

			<InputTime />

			<QuestionsContainer data={[]} />

			<Stack direction='row' justifyContent='flex-end'>
				<Button endIcon={<NavigateNext />} variant='contained' type='submit'>
					Siguiente
				</Button>
			</Stack>
		</FormAddQuizStyles>
	);
};

const actionsQuestions = {};

const reducerQuestions = (state, action) => {
	switch (action.type) {
		case actions.setInstructions:
			return { ...state, instructions: action.payload };
		default:
			return state;
	}
};

const QuestionCreate = () => {
	const [countQuestions, setCountQuestions] = useState(1);

	return (
		<>
			<Stack direction={'row'} justifyContent='space-between' gap={2}>
				<Typography variant='h5' component='h2' gutterBottom fontWeight={600}>
					Crear pregunta
				</Typography>
				<IconButton>
					<AddIcon />
				</IconButton>
			</Stack>
			{Array(countQuestions)
				.fill()
				.map((_, index) => (
					<>
						<MultipleOptions label='Instrucciones del quiz' />
						<MultipleOptions label='Opciones' />
					</>
				))}
		</>
	);
};

const FormAddQuizStyles = styled('div')(({ theme }) => ({
	backgroundColor: theme.palette.background.paper,
	padding: theme.spacing(3),
	borderRadius: theme.shape.borderRadius,
	border: `1px solid ${theme.palette.divider}`,
}));

const InputTime = () => {
	const [minutes, setMinutes] = useState(0);
	const [seconds, setSeconds] = useState(0);

	return (
		<Stack gap={2} direction='column' mb={4}>
			<Typography variant='h5' component='h2' gutterBottom fontWeight={600}>
				Tiempo de duración
			</Typography>

			<Stack direction='row' alignItems='center' spacing={2}>
				<TextField
					placeholder='Ej: 10'
					id='outlined-basic'
					label='Minutos'
					onChange={e => setMinutes(e.target.value)}
					value={minutes}
					variant='outlined'
				/>

				<Typography variant='h5' component='h2' gutterBottom fontWeight={600}>
					:
				</Typography>

				<TextField
					value={seconds}
					onChange={e => setSeconds(e.target.value)}
					placeholder='Ej: 30'
					id='outlined-basic'
					label='Segundos'
					variant='outlined'
				/>
			</Stack>

			<Typography variant='body2' color='text.secondary'>
				El tiempo de duración es opcional
			</Typography>
		</Stack>
	);
};

const InputTitle = () => {
	return (
		<Stack gap={1} direction='column' mb={3}>
			<Typography
				htmlFor='outlined-input-title'
				variant='h5'
				component='label'
				fontWeight={500}
			>
				Título del quiz
			</Typography>

			<TextField
				id='outlined-input-title'
				placeholder='Ej: Actividad 1'
				label='Nombre del quiz'
				fullWidth
				variant='outlined'
			/>
		</Stack>
	);
};

export default FormAddQuiz;

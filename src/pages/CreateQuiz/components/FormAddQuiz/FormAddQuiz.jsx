import { Button, Stack, TextField, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useReducer } from 'react';
import { Form, Formik } from 'formik';
import { InputInstruction } from '../InputInstruction';

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
		<>
			<Formik
				initialValues={{
					quizName: '',
					quizInstructions: [],
				}}>
				{({ values, handleChange, handleBlur, handleSubmit }) => (
					<Form>
						<ContentCampo>
							<Typography variant='h5' component='h2' gutterBottom fontWeight={600}>
								Título del quiz
							</Typography>

							<TextField
								placeholder='Ej: Actividad 1'
								fullWidth
								id='outlined-basic'
								label='Nombre del quizz'
								variant='outlined'
							/>
						</ContentCampo>

						<InputInstruction label={'Instrucciones del quiz'} dispatch={dispatch} />

						<ContentCampo>
							<Typography variant='h5' component='h2' gutterBottom fontWeight={600}>
								Tiempo de duración
							</Typography>

							<Stack direction='row' alignItems='center' spacing={2}>
								<TextField
									placeholder='Ej: 10'
									id='outlined-basic'
									label='Minutos'
									variant='outlined'
								/>
								<Typography variant='h5' component='h2' gutterBottom fontWeight={600}>
									:
								</Typography>
								<TextField
									placeholder='Ej: 30'
									id='outlined-basic'
									label='Segundos'
									variant='outlined'
								/>
							</Stack>
							<Typography variant='body2' gutterBottom>
								El tiempo de duración es opcional
							</Typography>
						</ContentCampo>

						<Button variant='contained' type='submit'>
							Submit
						</Button>
					</Form>
				)}
			</Formik>
		</>
	);
};

export const ContentCampo = styled('div')(({ theme }) => ({
	display: 'flex',
	flexDirection: 'column',
	gap: 10,
	marginBottom: 50,
}));

export default FormAddQuiz;

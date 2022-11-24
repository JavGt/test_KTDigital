import { useEffect, useMemo, useState } from 'react';
import {
	Button,
	Dialog,
	DialogActions,
	DialogContent,
	DialogContentText,
	DialogTitle,
	Divider,
	IconButton,
	Menu,
	MenuItem,
	Stack,
	TextField,
	Tooltip,
	Typography,
} from '@mui/material';
import { MultipleOptions } from '../InputInstruction';
import * as Yup from 'yup';
import { QuestionsContainer } from '../QuestionsContainer';
import { Form, Formik, useField } from 'formik';
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import FullscreenIcon from '@mui/icons-material/Fullscreen';

import FullscreenExitIcon from '@mui/icons-material/FullscreenExit';

const schema = Yup.object().shape({
	title: Yup.string().required('El titulo es requerido'),
	instructions: Yup.array().min(1, 'Debe tener mínimo una instrucción'),
	// questions: Yup.array().min(1, 'Debe tener mínimo una pregunta'),
});

const FormAddQuiz = ({ data }) => {
	const handleSubmit = e => {
		console.log(e);
	};

	return (
		<Formik
			initialValues={{
				title: '',
				instructions: [],
				// time: '',
				// questions: [],
			}}
			onSubmit={handleSubmit}
			validationSchema={schema}
		>
			<Form>
				<InputTitle name='title' />
				<InputMultiple />
				{/* <MultipleOptions label='Instrucciones del quiz' /> */}
				<InputTime />
				<QuestionsContainer data={[]} />

				<Stack direction='row' justifyContent='flex-end'>
					<Button type='submit' variant='outlined' color='success'>
						Guardar
					</Button>
				</Stack>
			</Form>
		</Formik>
	);
};

export const OPTIONS = {
	image: {
		label: 'Imagen',
		value: 'image',
	},
	text: {
		label: 'Texto',
		value: 'text',
	},
	latex: {
		label: 'Latex',
		value: 'latex',
	},
};

const InputMultiple = ({ label }) => {
	const [open, setOpen] = useState(false);

	const handleOpen = () => setOpen(bool => !bool);

	const [option, setOption] = useState('');
	const [fullScreen, setFullScreen] = useState(false);

	const handleCancel = () => setOption('');

	const handleSave = option => {
		onSave && onSave(option);
		handleCancel();
	};

	const options = useMemo(() => Object.values(OPTIONS), [OPTIONS]);

	return (
		<Stack direction='row' justifyContent='space-between'>
			<Typography
				htmlFor='outlined-input-title'
				variant='h5'
				component='label'
				fontWeight={500}
			>
				Instrucciones del quiz
			</Typography>
			<Tooltip title='Agregar' placement='top'>
				<IconButton onClick={handleOpen}>
					<AddRoundedIcon />
				</IconButton>
			</Tooltip>
			<ModalOptions open={open} onClose={handleOpen} />
		</Stack>
		// <Stack direction='column' gap={1} justifyContent={'center'}>
		// 	{!option ? (
		// 		<Selector setValue={setOption} options={options} label={label} />
		// 	) : (
		// 		<></>
		// 		// <MathJaxContext config={config}>
		// 		// 	<WrapperInputOption
		// 		// 		option={option}
		// 		// 		handleSave={handleSave}
		// 		// 		handleCancel={handleCancel}
		// 		// 	/>
		// 		// </MathJaxContext>
		// 	)}
		// </Stack>
	);
};

const ModalOptions = ({ open, onClose }) => {
	const [fullScreen, setFullScreen] = useState(false);

	const handleFullScreen = () => setFullScreen(bool => !bool);
	const options = useMemo(() => Object.values(OPTIONS), [OPTIONS]);

	const [option, setOption] = useState('');

	return (
		<>
			<Dialog
				disableEscapeKeyDown
				onClose={onClose}
				fullScreen={fullScreen}
				fullWidth
				maxWidth='md'
				open={open}
			>
				<DialogTitle display={'flex'} justifyContent='space-between'>
					<Typography variant='h5'>Ingrese una opción</Typography>
					<IconButton onClick={handleFullScreen}>
						{fullScreen ? <FullscreenExitIcon /> : <FullscreenIcon />}
					</IconButton>
				</DialogTitle>
				<DialogContent>
					<DialogContentText>
						Seleccione una el tipo de contenido que desea presentar
					</DialogContentText>
					<Selector setValue={setOption} options={options} label={'sd'} />
					<Divider />
					<DialogActions>
						<Button variant='outlined' color='error' autoFocus>
							Cancelar
						</Button>
						<Button variant='outlined' color='success' autoFocus>
							Guardar
						</Button>
					</DialogActions>
				</DialogContent>
			</Dialog>
		</>
	);
};

const Selector = ({ setValue, options, label, disabled }) => {
	const [anchorEl, setAnchorEl] = useState(null);
	const [optionSelected, setOptionSelected] = useState('');

	const open = Boolean(anchorEl);

	const handleClick = event => setAnchorEl(event.currentTarget);

	const handleClose = () => setAnchorEl(null);

	const handleSelect = e => {
		setAnchorEl(null);
		setOptionSelected(e.target.id);
	};

	useEffect(() => {
		setValue && setValue(optionSelected);
	}, [optionSelected]);

	return (
		<Stack direction='row' justifyContent='space-between' alignItems='center' gap={2}>
			<Typography variant='body1' component='h1' gutterBottom>
				{label}
			</Typography>

			<Tooltip title='Agregar' placement='top'>
				<IconButton disabled={disabled} color='primary' onClick={handleClick}>
					<AddRoundedIcon />
				</IconButton>
			</Tooltip>

			<Menu
				anchorEl={anchorEl}
				open={open}
				onClose={handleClose}
				transitionDuration={500}
				anchorOrigin={{
					vertical: 'top',
					horizontal: 'left',
				}}
			>
				{options.map((option, idx) => (
					<MenuItem key={idx} onClick={handleSelect} id={option.value}>
						{option.label}
					</MenuItem>
				))}
			</Menu>
		</Stack>
	);
};

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

const InputTitle = ({ name }) => {
	const [field, meta] = useField({ name });

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
				{...field}
				id='outlined-input-title'
				placeholder='Ej: Actividad 1'
				label='Nombre del quiz'
				fullWidth
				variant='outlined'
				helperText={meta.error && meta.error}
			/>
		</Stack>
	);
};

export default FormAddQuiz;

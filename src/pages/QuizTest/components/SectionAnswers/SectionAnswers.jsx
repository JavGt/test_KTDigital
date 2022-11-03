import { typeFactory } from '@/utils/typeFactory';
import { Box, Button, Fab, Typography, Zoom } from '@mui/material';
import { alpha, Stack } from '@mui/system';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { useState } from 'react';
import { styled } from '@mui/material/styles';
import { getAlphabet } from '@/utils/getAlphabet';

const SectionAnswers = ({ answers, onNext, availableOptions }) => {
	const [optionsChosen, setOptionsChosen] = useState([]);

	const isCompleted = optionsChosen.length > 0;

	// Esta función se ejecuta cuando se selecciona una opción
	const handleOptionSelected = option => {
		setOptionsChosen(prev => {
			// Verificar si la opción seleccionada ya existe
			const isExist = prev.find(opt => opt?.index === option.index);
			if (isExist) return prev.filter(opt => opt?.index !== option.index);

			// función para validar la cantidad de opciones disponibles
			if (prev.length === availableOptions) return prev;
			// Si no existe, agregarla
			return [...prev, option];
		});
	};

	const handleNext = () => {
		onNext({
			answer: optionsChosen.map(opt => opt.answer),
			availableOptions,
		});
		setOptionsChosen([]);
	};

	return (
		<Box sx={{ position: 'relative' }}>
			<Stack gap={2} height={'100%'}>
				<Typography variant='h5' fontWeight={900}>
					{isCompleted
						? `Opción seleccionada: ${optionsChosen.map(opt => getAlphabet(opt.index))}`
						: 'Selecciona una opción'}
				</Typography>

				<Stack gap={2} height='100%' justifyContent={'center'}>
					{answers.map((answer, idx) => (
						<AnswerOption
							key={idx}
							selected={optionsChosen.find(opt => opt?.index === idx)}
							onSelected={handleOptionSelected}
							answer={answer}
							index={idx}
						/>
					))}
				</Stack>
			</Stack>

			<Zoom in={isCompleted}>
				<Fab
					variant='extended'
					color='secondary'
					onClick={handleNext}
					sx={{ position: 'absolute', bottom: -30, right: -30 }}
					aria-label='next'>
					Siguiente
					<NavigateNextIcon />
				</Fab>
			</Zoom>
		</Box>
	);
};

SectionAnswers.defaultProps = {
	answers: [],
	onNext: () => {},
	availableOptions: 0,
};

const AnswerOption = ({ answer, onSelected, index, selected }) => {
	const handleSelected = () => onSelected({ index, answer });

	return (
		<ButtonAnswer selected={selected} onClick={handleSelected}>
			<Stack gap={2} direction='row' alignItems={'center'}>
				<Typography variant='h6' fontWeight={900}>
					({getAlphabet(index)})
				</Typography>
				<Stack>
					{answer.respuesta.map((asr, i) => (
						<span key={i}>{typeFactory(asr)}</span>
					))}
				</Stack>
			</Stack>
		</ButtonAnswer>
	);
};

const ButtonAnswer = styled(Button)(({ theme, selected }) => ({
	border: '1px solid',
	borderColor: theme.palette.primary.main,
	transitions: theme.transitions.create(['background-color', 'color'], {
		duration: theme.transitions.duration.shortest,
	}),

	...(selected && {
		backgroundColor: alpha(theme.palette.secondary.main, 0.8),
		color: theme.palette.primary.contrastText,
		boxShadow: theme.shadows[4],

		'&:hover': {
			backgroundColor: alpha(theme.palette.secondary.main, 0.8),
			color: theme.palette.primary.contrastText,
		},
	}),
}));

export default SectionAnswers;

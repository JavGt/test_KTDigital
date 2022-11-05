import { Fab, Typography, Zoom, Stack } from '@mui/material';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { useState } from 'react';
import { AnswerOption } from '../AnswerOption';

const SectionAnswers = ({ options, onNext, availableOptions }) => {
	const [chosenOptions, setChosenOptions] = useState([]);

	const enableNext = chosenOptions.length > 0;

	// Esta función se ejecuta cuando se selecciona una opción
	const handleOptionSelected = option => {
		setChosenOptions(prev => {
			// Verificar si la opción seleccionada ya existe
			const exists = prev.find(opt => opt?.index === option.index);
			if (exists) return prev.filter(opt => opt?.index !== option.index);

			// función para validar la cantidad de opciones disponibles
			if (prev.length === availableOptions) prev.shift();

			return [...prev, option];
		});
	};

	const handleNext = () => {
		onNext(chosenOptions);
		setChosenOptions([]);
	};

	return (
		<Stack gap={2} sx={{ position: 'relative' }}>
			<Typography variant='h6' fontWeight={700}>
				Selecciona una opción
			</Typography>

			<Stack gap={2} height={'100%'}>
				<Stack gap={1} height='100%' justifyContent={'center'}>
					{options.map((opt, idx) => (
						<AnswerOption
							key={idx}
							selected={chosenOptions.find(chosen => chosen?.index === idx)}
							onSelected={handleOptionSelected}
							option={opt}
							index={idx}
						/>
					))}
				</Stack>
			</Stack>

			<Zoom in={enableNext}>
				<Fab
					variant='extended'
					color={'secondary'}
					onClick={handleNext}
					sx={{
						display: 'flex',
						position: 'sticky',
						marginLeft: 'auto',
						bottom: 8,
					}}
					aria-label='next'>
					Siguiente
					<NavigateNextIcon />
				</Fab>
			</Zoom>
		</Stack>
	);
};

SectionAnswers.defaultProps = {
	options: [],
	onNext: () => {},
	availableOptions: 0,
};

export default SectionAnswers;

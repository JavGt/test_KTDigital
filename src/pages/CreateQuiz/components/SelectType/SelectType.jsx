import { useContext, useState } from 'react';
import {
	FormControl,
	InputLabel,
	Select,
	MenuItem,
	Button,
	Stack,
	Typography,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { AddTextOption } from '../AddTextOption';
import { AddImagenOption } from '../AddImagenOption';
import { AddLatexOption } from '../AddLatexOption';
import { instructionContext } from '../InputInstruction/InputInstruction';

export const objType = [
	{
		id: 0,
		name: 'Selecciona una opción',
		disabled: true,
		value: null,
	},
	{
		id: 1,
		name: 'Texto',
		value: 'text',
		disabled: false,
	},
	{
		id: 2,
		name: 'Imagen',
		disabled: false,
		value: 'image',
	},
	{
		id: 3,
		name: 'Latex',
		disabled: false,
		value: 'latex',
	},
];

export const Selector = ({ type, setType, options }) => {
	const handleChange = event => setType(event.target.value);

	return (
		<FormControl>
			<InputLabel id='outlined-input-instructions'>
				Selecciona el tipo de contenido
			</InputLabel>

			<Select
				value={type}
				onChange={handleChange}
				labelId='outlined-input-instructions'
				id='outlined-input-instructions'
				label='Selecciona el tipo de contenido'
			>
				{options.map(item => (
					<MenuItem disabled={item.disabled} key={item.id} value={item.id}>
						{item.name}
					</MenuItem>
				))}
			</Select>
		</FormControl>
	);
};
const withOption = Component => {
	return function () {
		const { type, setType, dispatch } = useContext(instructionContext);

		const [option, setOptionState] = useState(null);

		const handleSave = () => {
			if (!option) return alert('No se puede guardar una opción vacía');

			if (type === 0) return alert('No se puede guardar una opción vacía');

			dispatch({ type: 'add', payload: { type: objType[type].value, value: option } });

			setType(0);
		};

		const handleCancel = () => setType(0);

		return (
			<>
				<Component value={option} setValue={setOptionState} />

				<Stack mt={2} direction='row' gap={'8px'} justifyContent='flex-end'>
					<Button onClick={handleCancel} variant='outlined' color='error'>
						Cancelar
					</Button>

					<Button onClick={handleSave} variant='outlined' color='success'>
						Agregar
					</Button>
				</Stack>
			</>
		);
	};
};

const TextOption = withOption(AddTextOption, 'text');
const ImagenOption = withOption(AddImagenOption, 'image');
const LatexOption = withOption(AddLatexOption, 'latex');

export const AddOption = ({ type }) => {
	return (
		<AddOptionStyle>
			{type === 1 ? (
				<TextOption />
			) : type === 2 ? (
				<ImagenOption />
			) : type === 3 ? (
				<LatexOption />
			) : (
				<Typography variant='h5' component='h2' gutterBottom fontWeight={600}>
					Opción no disponible. 😥
				</Typography>
			)}
		</AddOptionStyle>
	);
};

const AddOptionStyle = styled('div')(({ theme }) => ({
	backgroundColor: theme.palette.background.paper,
	padding: theme.spacing(3),
	borderRadius: theme.shape.borderRadius,
	border: `1px solid`,
	borderColor: theme.palette.grey[300],
}));

import { useContext, useState } from 'react';
import {
	FormControl,
	InputLabel,
	Select,
	MenuItem,
	Box,
	Button,
	Stack,
	Typography,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { AddTextOption } from '../AddTextOption';
import { AddImagenOption } from '../AddImagenOption';
import { AddLatexOption } from '../AddLatexOption';
import { instructionContext } from '../InputInstruction/InputInstruction';

const objType = [
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

const SelectType = () => {
	return (
		<>
			<Selector />
			<AddOption />
		</>
	);
};

const Selector = () => {
	const { type, setType } = useContext(instructionContext);

	const handleChange = event => setType(event.target.value);

	return (
		<FormControl>
			<InputLabel id='demo-simple-select-label'>
				Selecciona el tipo de contenido
			</InputLabel>

			<Select
				value={type}
				onChange={handleChange}
				labelId='demo-simple-select-label'
				id='demo-simple-select'
				label='Selecciona el tipo de contenido'>
				{objType.map(item => (
					<MenuItem disabled={item.disabled} key={item.id} value={item.id}>
						{item.name}
					</MenuItem>
				))}
			</Select>
		</FormControl>
	);
};

const AddOption = () => {
	const { type } = useContext(instructionContext);

	return !!type ? (
		<Box
			sx={{
				backgroundColor: 'background.paper',
				p: 5,
				borderRadius: theme => theme.shape.borderRadius,
				marginTop: 2,
			}}>
			<FactoryOption type={type} />
		</Box>
	) : null;
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
				<Stack mt={2} direction='row' gap={2} justifyContent='flex-end'>
					<BtnStyle onClick={handleCancel} variant='contained' color='error'>
						Cancelar
					</BtnStyle>
					<BtnStyle onClick={handleSave} variant='contained' color='success'>
						Agregar
					</BtnStyle>
				</Stack>
			</>
		);
	};
};

const TextOption = withOption(AddTextOption, 'text');
const ImagenOption = withOption(AddImagenOption, 'image');
const LatexOption = withOption(AddLatexOption, 'latex');

const FactoryOption = ({ type }) => {
	return type === 1 ? (
		<TextOption />
	) : type === 2 ? (
		<ImagenOption />
	) : type === 3 ? (
		<LatexOption />
	) : (
		<Typography variant='h5' component='h2' gutterBottom fontWeight={600}>
			Opción no disponible. 😥
		</Typography>
	);
};

const BtnStyle = styled(Button)(({ theme, color }) => ({
	borderRadius: 0,
	backgroundColor: theme.palette[color].main,
	color: theme.palette.common.white,
	borderRadius: 30,
	padding: theme.spacing(1, 3),
}));

export default SelectType;

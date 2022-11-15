import { createContext, useContext, useReducer, useState } from 'react';

import { DeleteRounded } from '@mui/icons-material';
import { IconButton, Stack, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { typeFactory } from '@/utils/typeFactory';
import { styled } from '@mui/material/styles';
import { AddOption, objType, Selector } from '../SelectType/SelectType';
import { useEffect } from 'react';

export const instructionContext = createContext();

const actions = {
	add: 'add',
	delete: 'delete',
};

const reducer = (state, action) => {
	switch (action.type) {
		case actions.add:
			return [...state, action.payload];
		case actions.delete:
			const { index } = action.payload;
			return state.filter((_, i) => i !== index);
		default:
			return state;
	}
};

const Provider = ({ children, locked, setData }) => {
	const [instructions, dispatch] = useReducer(reducer, []);
	const [type, setType] = useState(0);
	const [options, setOptions] = useState(() =>
		objType.filter(type => type.value !== locked)
	);

	useEffect(() => {
		setData && setData(instructions);
	}, [instructions]);

	return (
		<instructionContext.Provider
			value={{ options, instructions, dispatch, type, setType }}
		>
			{children}
		</instructionContext.Provider>
	);
};

const InputInstruction = ({ label }) => {
	const { instructions, type, setType, options } = useContext(instructionContext);

	return (
		<Stack gap={1} direction='column' mb={3}>
			<Typography
				htmlFor='outlined-input-instructions'
				variant='h5'
				component='label'
				fontWeight={500}
			>
				{label}
			</Typography>

			<Selector
				options={options}
				type={type}
				setType={setType}
				label='Selecciona el tipo de contenido'
			/>

			{type !== 0 && <AddOption type={type} />}

			{instructions.length > 0 && (
				<>
					<Typography variant='body1' component='label' fontWeight={500}>
						Instrucciones
					</Typography>
					{instructions.map((instruction, index) => (
						<ViewOption key={index} option={instruction} index={index} />
					))}
				</>
			)}
		</Stack>
	);
};

export default function MultipleOptions({ locked, setData, ...props }) {
	return (
		<Provider locked={locked} setData={setData}>
			<InputInstruction {...props} />
		</Provider>
	);
}

const ViewOption = ({ option, index }) => {
	const { dispatch } = useContext(instructionContext);

	const handleDelete = () => dispatch({ type: actions.delete, payload: { index } });

	return (
		<ViewOptionStyles
			gap={2}
			alignItems='center'
			direction='row'
			justifyContent={'space-between'}
		>
			<Typography variant='body1' component='p' fontWeight={600}>
				{index + 1}
			</Typography>

			<Box flexGrow={1}>{typeFactory(option)}</Box>

			<Box>
				<IconButton color='error' size='large' onClick={handleDelete}>
					<DeleteRounded />
				</IconButton>
			</Box>
		</ViewOptionStyles>
	);
};

const ViewOptionStyles = styled(Stack)(({ theme }) => ({
	backgroundColor: theme.palette.background.default,
	padding: theme.spacing(1, 3),
	borderColor: theme.palette.grey[300],
	borderRadius: theme.shape.borderRadius,
	borderWidth: 1,
	borderStyle: 'solid',
}));

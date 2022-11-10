import { createContext, useContext, useReducer, useState } from 'react';

import { DeleteRounded } from '@mui/icons-material';
import { IconButton, Stack, Typography } from '@mui/material';
import { ContentCampo } from '../FormAddQuiz/FormAddQuiz';
import { SelectType } from '../SelectType';
import { Box } from '@mui/system';
import { typeFactory } from '@/utils/typeFactory';

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

const Provider = ({ children }) => {
	const [instructions, dispatch] = useReducer(reducer, []);
	const [type, setType] = useState(0);

	return (
		<instructionContext.Provider value={{ instructions, dispatch, type, setType }}>
			{children}
		</instructionContext.Provider>
	);
};

const InputInstruction = ({ label, dispatch }) => {
	const { instructions } = useContext(instructionContext);
	return (
		<ContentCampo>
			<Stack direction={{ xs: 'column', sm: 'row' }} justifyContent='space-between'>
				<Typography variant='h5' component='h2' gutterBottom fontWeight={600}>
					{label}
				</Typography>
			</Stack>

			<SelectType />

			{instructions.length > 0 && (
				<>
					{instructions.map((instruction, index) => (
						<ViewOption key={index} option={instruction} index={index} />
					))}
				</>
			)}
		</ContentCampo>
	);
};

const ViewOption = ({ option, index }) => {
	const { dispatch } = useContext(instructionContext);

	const handleDelete = () => dispatch({ type: actions.delete, payload: { index } });

	return (
		<Stack
			sx={{
				backgroundColor: 'background.paper',
				p: theme => theme.spacing(1, 2),
				borderRadius: theme => theme.shape.borderRadius,
			}}
			gap={2}
			alignItems='center'
			direction='row'
			justifyContent={'space-between'}>
			<Typography variant='body1' component='p' fontWeight={600}>
				({index + 1})
			</Typography>
			<Box flexGrow={1}>
				<Typography variant='body1' component='p' fontWeight={600}>
					{option.type.toUpperCase()}
				</Typography>
				{typeFactory(option)}
			</Box>
			<Box>
				<IconButton color='error' onClick={handleDelete}>
					<DeleteRounded />
				</IconButton>
			</Box>
		</Stack>
	);
};

export default function MultipleOptions(props) {
	return (
		<Provider>
			<InputInstruction {...props} />
		</Provider>
	);
}

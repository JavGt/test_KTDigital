import { Box, Stack, TextField, Typography } from '@mui/material';
import { MathJax, MathJaxContext } from 'better-react-mathjax';

const notes = [
	'Para ingresar un texto latex, debe escribirlo entre los símbolos $.',
	'Puede unir texto y latex, por ejemplo: $x^2-2xy-y^2$ es el resultado de la ecuación $x^2-2xy-y^2=0$',
];

const AddLatexOption = ({ value, setValue }) => {
	const handleChange = event => setValue(event.target.value);

	return (
		<MathJax>
			<Stack gap={2}>
				<TextField
					onChange={handleChange}
					value={value ?? ''}
					placeholder='Ej: $x^2-2xy-y^2$'
					id='outlined-multiline-static'
					label='Latex'
					fullWidth
					type={'text'}
					multiline
					variant='outlined'
				/>

				{value && (
					<Box>
						<Typography mb={1} variant='h6'>
							Vista previa:
						</Typography>
						<Typography variant='h4'>{value}</Typography>
					</Box>
				)}

				<Box>
					<Typography component={'address'}>Notas</Typography>
					{notes.map((note, idx) => (
						<Typography key={idx} component={'li'}>
							{note}
						</Typography>
					))}
				</Box>
			</Stack>
		</MathJax>
	);
};

export default AddLatexOption;

import { TextField } from '@mui/material';

const AddTextOption = ({ value, setValue }) => {
	const handleChange = event => setValue(event.target.value);

	return (
		<TextField
			value={value ?? ''}
			onChange={handleChange}
			placeholder='Ingrese el texto'
			id='outlined-multiline-static'
			label='Texto'
			fullWidth
			variant='outlined'
		/>
	);
};

export default AddTextOption;

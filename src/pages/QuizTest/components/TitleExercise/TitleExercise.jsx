import { typeFactory } from '@/utils/typeFactory';
import { Typography } from '@mui/material';
import { Fragment } from 'react';

const TitleExercise = ({ title, instructions }) => {
	return (
		<div>
			<Typography variant='h4' fontWeight={800} component='h3' color='primary.main'>
				{title}
			</Typography>
			{instructions.map((inst, idx) => (
				<Fragment key={idx}>{typeFactory(inst)}</Fragment>
			))}
		</div>
	);
};

export default TitleExercise;

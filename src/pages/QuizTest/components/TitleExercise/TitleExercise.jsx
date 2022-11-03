import { typeFactory } from '@/utils/typeFactory';
import { Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Fragment } from 'react';

const TitleExercise = ({ title, instructions }) => {
	return (
		<TitleExerciseStyled>
			<Typography variant='h4' fontWeight={800} component='h3' color='primary.main'>
				{title}
			</Typography>
			{instructions.map((inst, idx) => (
				<Fragment key={idx}>{typeFactory(inst)}</Fragment>
			))}
		</TitleExerciseStyled>
	);
};

const TitleExerciseStyled = styled('div')(({ theme }) => ({
	marginBottom: theme.spacing(4),
}));

export default TitleExercise;

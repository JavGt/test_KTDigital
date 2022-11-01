import { Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

const TitleExercise = ({ title, description }) => {
	return (
		<TitleExerciseStyled>
			<Typography variant='h4' fontWeight={900} component='h1' color='primary.main'>
				{title}
			</Typography>
			<Typography variant='h6' component='h2'>
				{description}
			</Typography>
		</TitleExerciseStyled>
	);
};

const TitleExerciseStyled = styled('div')(({ theme }) => ({
	marginBottom: theme.spacing(4),
}));

export default TitleExercise;

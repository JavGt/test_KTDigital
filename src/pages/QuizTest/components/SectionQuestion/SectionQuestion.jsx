import { typeFactory } from '@/utils/typeFactory';
import { Box, Stack, Typography } from '@mui/material';
import { Fragment } from 'react';

const SectionQuestion = ({ question, numberQuestion }) => {
	return (
		<Stack height='100%' gap={2}>
			<Typography variant='h5' fontWeight={900}>
				Pregunta {numberQuestion}
			</Typography>
			<Stack height={'100%'} justifyContent={'center'} alignItems={'center'}>
				{question.map((qts, i) => (
					<Fragment key={i}>{typeFactory(qts)}</Fragment>
				))}
			</Stack>
		</Stack>
	);
};

export default SectionQuestion;

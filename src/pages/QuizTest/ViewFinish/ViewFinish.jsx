import { typeFactory } from '@/utils/typeFactory';
import { Box, Divider, Grow, Stack, Typography } from '@mui/material';
import dataExample from './dataExample.json';
import { styled } from '@mui/material/styles';
import { getAlphabet } from '@/utils/getAlphabet';
import { Fragment } from 'react';

const ViewFinish = ({ score }) => {
	const { finalScore, questions } = score;
	return (
		<Grow in={Object.keys(score).length > 0}>
			<Box>
				<Stack alignItems={'center'} gap={1}>
					<Typography variant='h5'>¡Felicidades! Has completado el ejercicio</Typography>
					<Typography variant='h5' fontWeight={900}>
						Tu calificación final es: {finalScore}
					</Typography>
				</Stack>

				<Divider sx={{ marginY: 2 }} />

				{questions.map((qn, idx) => (
					<Stack key={idx} marginY={2}>
						<Typography variant='h5'>Pregunta {qn.question + 1}</Typography>
						<Typography variant='h5'>
							Calificación obtenía por la pregunta {qn.qualification}
						</Typography>
						<Typography variant='h5'>
							Respuesta correctas: {qn.answersObtained} / {qn.correctAnswers}
						</Typography>
						<Typography>Opciones seleccionadas</Typography>
						{!qn.selectedOptions.length ? (
							<Box>
								<Typography variant='h5'>No seleccionaste ninguna opción</Typography>
							</Box>
						) : (
							qn.selectedOptions.map((opt, idx2) => (
								<OptionStyled key={idx2}>
									<Stack>
										<Typography variant='h5'>{getAlphabet(opt.index)}</Typography>
										<Box>
											{opt.contents.map((ctn, idx3) => (
												<Fragment key={idx3}>{typeFactory(ctn)}</Fragment>
											))}
										</Box>
									</Stack>
								</OptionStyled>
							))
						)}
					</Stack>
				))}
			</Box>
		</Grow>
	);
};
ViewFinish.defaultProps = {
	score: dataExample,
};

const OptionStyled = styled(Box)(({ theme }) => ({
	border: `1px solid ${theme.palette.primary.main}`,
	marginY: 10,
	borderRadius: 5,
	padding: 10,
}));

export default ViewFinish;

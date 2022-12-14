import { typeFactory } from '@/utils/typeFactory';
import { Box, Divider, Grow, Stack, Typography } from '@mui/material';
import { alpha, styled } from '@mui/material/styles';
import { getAlphabet } from '@/utils/getAlphabet';
import { Fragment } from 'react';
import { SectionQuestion } from '../components/SectionQuestion';
import winnerOne from '@/assets/img/icons/first-place-medal.png';
import winnerTwo from '@/assets/img/icons/second-place-medal.png';
import winnerThree from '@/assets/img/icons/third-place-medal.png';

const ViewFinish = ({ score, viewQuestionRating, viewOptions, viewCountQuestions }) => {
	const { finalScore, questions } = score;

	return (
		<>
			<Box>
				<Stack
					alignItems={'center'}
					direction={{ xs: 'column', sm: 'row' }}
					gap={1}
					justifyContent='space-between'
				>
					<div>
						<Typography variant='h5'>
							¡Felicidades! Has completado el ejercicio
						</Typography>
						<Typography variant='h5' fontWeight={900}>
							Tu calificación final es: {finalScore}%
						</Typography>
					</div>
					<Grow in={Object.keys(score).length > 0}>
						<Box
							my={3}
							sx={{
								filter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))',
							}}
						>
							<picture>
								<img
									src={
										finalScore === 100
											? winnerOne
											: finalScore >= 80
											? winnerTwo
											: winnerThree
									}
									alt='Imagen de medalla'
									height={120}
								/>
							</picture>
						</Box>
					</Grow>
				</Stack>
				<Divider sx={{ my: 2 }} />

				{(viewQuestionRating || viewOptions || viewCountQuestions) && (
					<>
						{questions.map((qn, idx) => (
							<Stack mb={5} key={idx} mt={2}>
								<Stack
									direction={{ xs: 'column', sm: 'row' }}
									mb={2}
									justifyContent='space-between'
								>
									<Typography id={idx} fontWeight='800' variant='h6'>
										Pregunta:{' '}
										<Typography component='span' variant='h6'>
											{idx + 1}
										</Typography>
									</Typography>

									{viewCountQuestions && (
										<Stack direction={'row'} gap={1} alignItems='center'>
											<Typography variant='body1'>Total de puntos: </Typography>
											<Box
												sx={{
													backgroundColor: 'primary.main',
													padding: '0.2rem 0.5rem',
												}}
											>
												<Typography
													color={'common.white'}
													component='span'
													variant='body1'
												>
													{qn.answersObtained}/{qn.correctAnswers}
												</Typography>
											</Box>
										</Stack>
									)}
								</Stack>
								<Box mb={2}>
									<SectionQuestion viewIdx={false} question={qn.question} />
								</Box>

								{viewOptions && (
									<>
										{!qn.selectedOptions.length ? (
											<Box
												sx={{
													padding: theme => theme.spacing(2),
													borderRadius: '0.5rem',
													backgroundColor: theme => alpha(theme.palette.error.main, 0.5),
												}}
											>
												<Typography fontWeight={600} color='common.white' variant='body1'>
													No seleccionaste ninguna opción
												</Typography>
											</Box>
										) : (
											<Stack gap={2}>
												{qn.selectedOptions.map((opt, idx2) => (
													<OptionStyled key={idx2}>
														<Stack direction={'row'} alignItems='center' gap={2}>
															<Typography
																variant='h5'
																color={'primary.main'}
																fontWeight={900}
															>
																({getAlphabet(opt.index)})
															</Typography>
															<Box>
																{opt.contents.map((ctn, idx3) => (
																	<Fragment key={idx3}>
																		{typeFactory(ctn, 'quiz')}
																	</Fragment>
																))}
															</Box>
														</Stack>
													</OptionStyled>
												))}
											</Stack>
										)}
									</>
								)}

								{viewQuestionRating && (
									<Stack ml={'auto'} mt={2} direction={'row'} alignItems='center' gap={1}>
										<Typography variant='body1'>
											Calificación obtenía por la pregunta:
										</Typography>
										<Box
											sx={{
												padding: '0.2rem 0.5rem',
												border: '1px solid',
											}}
										>
											<Typography variant='body1'>{qn.qualification}%</Typography>
										</Box>
									</Stack>
								)}
							</Stack>
						))}
					</>
				)}
			</Box>
		</>
	);
};
ViewFinish.defaultProps = {
	viewQuestionRating: true,
	viewOptions: true,
	viewCountQuestions: true,
};

const OptionStyled = styled(Box)(({ theme }) => ({
	backgroundColor: alpha(theme.palette.primary.main, 0.1),
	borderRadius: theme.shape.borderRadius,
	padding: theme.spacing(2),
	boxShadow: theme.shadows[1],

	transition: theme.transitions.create(['background-color', 'box-shadow'], {
		duration: theme.transitions.duration.shortest,
		easing: theme.transitions.easing.easeInOut,
	}),
	'&:hover': {
		backgroundColor: alpha(theme.palette.primary.main, 0.2),
		boxShadow: theme.shadows[20],
	},
}));

export default ViewFinish;

import quiz from '#/quiz.json';
import quizKT from '#/quizKtdra.json';
import styled from '@emotion/styled';
import { Box, Divider, Typography } from '@mui/material';

const QuizContainer = ({ data }) => {
	return (
		<Box
			sx={{
				minHeight: '100vh',
				backgroundColor: 'common.white',
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
			}}>
			<CardStyle>
				<HeaderStyle>
					<Typography variant='h4' component='h2'>
						Cuestionario
					</Typography>
					<Typography variant='h6' component='h3'>
						Contesta correctamente las preguntas que se te presenta.
					</Typography>
				</HeaderStyle>
				<Divider />
				<div className='component__questionBox'>
					<div className='size-questions'>
						<span>{`Pregunta ${1}/${data.length}`}</span>{' '}
						<span className=''>Opciones disponibles: {data.sizeCorrects}</span>
					</div>
					<div className='title'>
						<h3>{data.question}</h3>
						<div className='img'>
							{/* {data.length > 0 && (
								<img
									src={
										'https://mvpspace.sfo3.digitaloceanspaces.com/KTDRA/' +
										data.recursos[0]?.url
									}
									alt='Recurso de pregunta'
								/>
							)} */}
						</div>
					</div>
				</div>
				{/* {data.answers.map((e, i) => {
					const alphabet = alpha.map(i => String.fromCharCode(i));
					return (
						<AnswerBox
							key={i}
							number={alphabet[i]}
							answer={e}
							setSelected={setSelectAnswer}
							itemsSelected={stateSelected}
						/>
					);
				})} */}
				{/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
			</CardStyle>
		</Box>
	);
};

QuizContainer.defaultProps = {
	data: quizKT,
};

const CardStyle = styled(Box)(({ theme }) => ({
	height: '500px',
	width: '800px',
	backgroundColor: '#fff',
	borderRadius: theme.shape.borderRadius,
	boxShadow: theme.shadows[10],
	padding: theme.spacing(2),
}));

const HeaderStyle = styled(Box)(({ theme }) => ({
	height: '100px',
	width: '100%',
}));

export default QuizContainer;

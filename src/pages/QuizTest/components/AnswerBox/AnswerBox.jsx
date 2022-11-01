import { getAlphabet } from '@/utils/getAlphabet';
import { typeFactory } from '@/utils/typeFactory';
import { alpha, Box, Button, Chip, Divider, Stack, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useState } from 'react';
import CheckIcon from '@mui/icons-material/Check';

const AnswerBox = ({ number, answer, setSelected, itemsSelected }) => {
	const [selected, setSelectedState] = useState(null);
	const classComponent = itemsSelected && itemsSelected.find(x => x === answer._id);

	const { respuestas, pregunta } = answer;

	return (
		<Box
			sx={{
				width: '100%',
				display: 'grid',
				gridTemplateColumns: 'repeat(2, 1fr)',
				gap: theme => theme.spacing(5),
			}}>
			{/* Pregunta */}

			<Box>
				<Box>
					<Typography variant='h5' fontWeight={900}>
						Pregunta {number + 1}
					</Typography>
				</Box>
				<Box
					sx={{
						marginTop: theme => theme.spacing(2),
						display: 'flex',
						flexDirection: 'column',
						flexGrow: 1,
						alignItems: 'center',
						gap: theme => theme.spacing(2),
					}}>
					{pregunta.map(prg => typeFactory(prg))}
				</Box>
			</Box>

			{/* Opciones */}
			<Box
				sx={{
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'flex-start',
					gap: theme => theme.spacing(2),
				}}>
				<Typography variant='h5' fontWeight={900}>
					Opciones
				</Typography>
				{respuestas.map(rps => {
					const [isSelect, setIsSelect] = useState(false);

					const handleSelected = () => setIsSelect(!isSelect);

					return (
						<Box
							sx={{
								position: 'relative',
							}}>
							{isSelect && (
								<Chip
									deleteIcon={<CheckIcon />}
									size='small'
									sx={{
										position: 'absolute',
										top: -30,
										right: 0,
									}}
									label='Seleccionado'
									color='secondary'
									variant='filled'
								/>
							)}
							<ButtonAnswer select={isSelect} onClick={handleSelected}>
								<Box>
									{rps.respuesta.map(rps2 => (
										<>{typeFactory(rps2)}</>
									))}
								</Box>
							</ButtonAnswer>
						</Box>
					);
				})}
			</Box>
		</Box>
	);
};

export const ButtonAnswer = styled(Button)(({ theme, select }) => ({
	textTransform: 'none',
	width: '100%',
	backgroundColor: alpha(theme.palette.primary.main, 0.1),

	'&:hover': {
		backgroundColor: alpha(theme.palette.primary.main, 0.2),
	},

	...(select && {
		backgroundColor: theme.palette.secondary.main,
		color: theme.palette.common.white,
		boxShadow: theme.shadows[20],

		'&:hover': {
			backgroundColor: alpha(theme.palette.secondary.main, 0.9),
		},
	}),
}));

export default AnswerBox;

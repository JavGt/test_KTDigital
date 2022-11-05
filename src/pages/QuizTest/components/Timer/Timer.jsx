import { useTemporizador } from '@/hooks/useTimer';
import { LinearProgress, Stack, Typography } from '@mui/material';
import { useEffect } from 'react';

const Timer = ({ time, setFinish }) => {
	const { minutos, timeRemaining, segundos, finalizado } = useTemporizador(time);

	useEffect(() => {
		if (finalizado) setFinish();
	}, [finalizado]);

	return (
		<Stack
			direction={'row'}
			alignItems='center'
			gap={2}
			sx={{
				zIndex: 1,
				padding: ' 1rem',
				borderRadius: theme => theme.shape.borderRadius,
				backgroundColor: ({ palette }) => palette.grey[100],
				marginY: 2,
				position: 'sticky',
				top: 10,
			}}>
			<LinearProgress
				sx={{ flexGrow: 1 }}
				variant='determinate'
				value={(timeRemaining * 100) / time}
			/>

			<Typography variant='button' fontWeight={800}>
				{time
					? finalizado
						? 'Tiempo Finalizado'
						: `${minutos}:${segundos}`
					: 'Sin Tiempo'}
			</Typography>
		</Stack>
	);
};

export default Timer;

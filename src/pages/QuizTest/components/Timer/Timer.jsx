import { useChronometer } from '@/hooks/useTimer';
import { LinearProgress, Stack, Typography } from '@mui/material';
import { useEffect } from 'react';

const Timer = ({ time, setFinish }) => {
	const { remainingTime, originalTime } = useChronometer(time, true);

	// useEffect(() => {
	// 	// if (finalizado) setFinish();
	// }, [finished]);

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
			{/* <LinearProgress
				color={seconds > time / 2 ? 'success' : seconds > time / 3 ? 'warning' : 'error'}
				sx={{ flexGrow: 1 }}
				variant='determinate'
				value={(time - timeRemaining) * (100 / time)}
			/> */}

			<Typography variant='button' fontWeight={800}>
				{remainingTime}
			</Typography>
		</Stack>
	);
};

export default Timer;

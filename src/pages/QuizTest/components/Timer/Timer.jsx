import { useChronometer } from '@/hooks/useTimer';
import { LinearProgress, Stack, Typography } from '@mui/material';
import { useEffect } from 'react';

export default function Timer({ time, setFinish }) {
	const { remainingTime, originalTime, finished, fullTime, percentage } = useChronometer(
		time,
		true
	);

	useEffect(() => {
		if (finished) setFinish();
	}, [finished]);

	return (
		<Stack
			direction={'row'}
			alignItems='center'
			gap={2}
			sx={{
				zIndex: 1,
				padding: '.5rem 1rem',
				borderRadius: theme => theme.shape.borderRadius,
				backgroundColor: ({ palette }) => palette.common.white + '80',
				marginY: 2,
				position: 'sticky',
				backdropFilter: 'blur(5px)',
				top: 10,
			}}>
			<LinearProgress
				color={
					remainingTime > originalTime / 2
						? 'success'
						: remainingTime > originalTime / 3
						? 'warning'
						: 'error'
				}
				sx={{ flexGrow: 1 }}
				variant='determinate'
				value={percentage}
			/>

			<Typography variant='body1' fontWeight={800}>
				{fullTime}
			</Typography>
		</Stack>
	);
}

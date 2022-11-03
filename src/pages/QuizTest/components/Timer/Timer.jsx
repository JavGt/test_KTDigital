import { useTemporizador } from '@/hooks/useTimer';

const Timer = () => {
	const { segundosRestantes } = useTemporizador(2);
	return <div>{segundosRestantes}</div>;
};

export default Timer;

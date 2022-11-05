import { useEffect, useState } from 'react';

export const useTemporizador = time => {
	const [timeRemaining, setTimeRemaining] = useState(time);

	const [minutos, setMinutos] = useState(`${Math.floor(time / 60)}`);
	const [segundos, setSegundos] = useState(`${time % 60}`);
	const [finalizado, setFinalizado] = useState(false);

	useEffect(() => {
		const intervalo = setInterval(() => {
			setTimeRemaining(s => (s === 0 ? 0 : s - 1));
		}, 1000);

		return () => clearInterval(intervalo);
	}, []);

	useEffect(() => {
		setMinutos(() => {
			const minutos = Math.floor(timeRemaining / 60);
			return minutos < 10 ? `0${minutos}` : minutos;
		});

		setSegundos(() => {
			const segundos = timeRemaining % 60;
			return segundos < 10 ? `0${segundos}` : segundos;
		});

		if (timeRemaining === 0) setFinalizado(true);
	}, [timeRemaining]);

	return { minutos, timeRemaining, segundos, finalizado };
};

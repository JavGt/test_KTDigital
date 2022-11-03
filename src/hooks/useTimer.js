import { useEffect, useState } from 'react';

export const useTemporizador = segundos => {
	const [segundosRestantes, setSegundosRestantes] = useState(segundos);

	let intervalo = null;

	const stop = () => {
		clearInterval(intervalo);
	};

	const addTime = () => {
		setSegundosRestantes(segundosRestantes + 1);
	};

	const start = () => {
		intervalo = setInterval(() => {
			setSegundosRestantes(segundosRestantes - 1);
		}, 1000);
	};

	useEffect(() => {
		intervalo = setInterval(() => {
			setSegundosRestantes(segundosRestantes => segundosRestantes - 1);
		}, 1000);

		return () => stop();
	}, [segundos]);

	return { segundosRestantes };
};

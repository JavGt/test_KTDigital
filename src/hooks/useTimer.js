import { useEffect, useState, useRef } from 'react';

/**
 * @param {number} tiempo // seconds
 * @param {boolean} autoplay
 * @returns {{minutes: string, seconds: string, hours: string, finished: boolean}}
 */

// Pasos:
// convertir los segundos a mili segundos
// Almacenar la conversion en una referencia
// crear un estado donde se almacene el tiempo restante
// crear un estado donde se almacene si el tiempo termino
// crear un estado donde se almacene si el tiempo esta corriendo
// crear un estado donde se almacene si el tiempo esta pausado

export const useChronometer = (time = 60, autoplay = false) => {
	const originalTime = useRef(time * 100).current;

	const [remainingTime, setRemainingTime] = useState(time * 100);

	// Actions
	const [finished, setFinished] = useState(false);
	const [running, setRunning] = useState(autoplay);
	const [paused, setPaused] = useState(false);

	// format time
	const [hours, setHours] = useState('00');
	const [minutes, setMinutes] = useState('00');
	const [seconds, setSeconds] = useState('00');

	let interval = useRef(null);

	const onStop = () => {
		clearInterval(interval.current);
	};

	const onPlay = () => {
		interval.current = setInterval(() => {
			setRemainingTime(remainingTime => remainingTime - 50);
		}, 500);
	};

	useEffect(() => {
		if (running) {
			onPlay();
		} else {
			onStop();
		}
		return () => onStop();
	}, [running]);

	return {
		remainingTime,
		originalTime,
	};
};

import { useEffect, useState, useRef } from 'react';

/**
 * @param {number} time // seconds
 * @param {boolean} autoplay
 * @returns {
 * 	{
 * 		finished,
 * 		running,
 * 		paused,
 * 		onReset,
 * 		onPlay,
 * 		onStop,
 * 		remainingTime,
 * 		originalTime,
 * 		hours,
 * 		minutes,
 * 		seconds,
 * 		fullTime,
 *  }
 * }
 */

export const useChronometer = (time = 60, autoplay = false) => {
	const originalTime = useRef(time * 1000).current;

	const [remainingTime, setRemainingTime] = useState(time * 1000);

	// Actions
	const [finished, setFinished] = useState(false);
	const [running, setRunning] = useState(false);
	const [paused, setPaused] = useState(false);

	let interval = useRef(null);

	const onStop = () => {
		if (interval.current) clearInterval(interval.current);

		setRunning(false);
		setPaused(true);
	};

	const onPlay = () => {
		if (remainingTime === 0) return;

		if (!running)
			interval.current = setInterval(
				() => setRemainingTime(remainingTime => remainingTime - 1000),
				1000
			);

		setRunning(true);
	};

	const onReset = () => setRemainingTime(originalTime);

	useEffect(() => {
		autoplay && onPlay();

		return () => onStop();
	}, []);

	useEffect(() => {
		if (remainingTime <= 0) {
			setFinished(true);
			onStop();
		}
	}, [remainingTime]);

	// format time
	const formateTime = time => {
		const validateTime = time => Math.floor(time).toString().padStart(2, '0');

		const hours = validateTime(time / 1000 / 60 / 60);
		const minutes = validateTime((time / 1000 / 60) % 60);
		const seconds = validateTime((time / 1000) % 60);

		const fullTime =
			hours > 0 ? `${hours}:${minutes}:${seconds}` : `${minutes}:${seconds}`;

		return { hours, minutes, seconds, fullTime };
	};

	const percentage = (originalTime - remainingTime) * (100 / originalTime);

	return {
		percentage,
		finished,
		running,
		paused,
		onReset,
		onPlay,
		onStop,
		remainingTime,
		originalTime,
		...formateTime(remainingTime),
	};
};

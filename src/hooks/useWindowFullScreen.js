import { useEffect } from 'react';

const useWindowFullScreen = () => {
	const keydownHandler = ({ key }) => key === 'f' && applyFullScreen();

	useEffect(() => {
		window.addEventListener('keydown', keydownHandler);

		return () => window.removeEventListener('keydown', keydownHandler);
	}, []);

	const minimizeWindow = () => document.exitFullscreen && document.exitFullscreen();

	const applyFullScreen = () => document.documentElement.requestFullscreen();

	const toggleFullScreen = () =>
		!document.fullscreenElement ? applyFullScreen() : minimizeWindow();

	return { toggleFullScreen, minimizeWindow, applyFullScreen };
};

export { useWindowFullScreen };

import React from 'react';
import { alpha, styled } from '@mui/material/styles';
import { Divider, Typography } from '@mui/material';

const PanelBook = () => {
	const refImg = React.useRef(null);
	const img = 'https://grupoktdra.com/assets/portadas/DGB_Etica-I.jpg';

	const handleMoveMouse = e => {
		const { current: img } = refImg;

		const imgWidth = img.offsetWidth;
		const imgHeight = img.offsetHeight;

		const imgX = img.getBoundingClientRect().left + imgWidth / 2;
		const imgY = img.getBoundingClientRect().top + imgHeight / 2;

		const mouseX = e.pageX;
		const mouseY = e.pageY;

		const rotateX = (imgY - mouseY) / 10;
		const rotateY = (mouseX - imgX) / 10;

		img.style.transform = `rotate3d(1, 0, 0, ${rotateX}deg) rotateY(${rotateY}deg) `;
	};

	const handleLeaveMouse = () => {
		const { current: img } = refImg;
		img.style.transform = 'rotate3d(0, 0, 0, 0deg) rotateY(0deg)';
	};

	return (
		<ContainerImg>
			<img
				onMouseLeave={handleLeaveMouse}
				onMouseMoveCapture={handleMoveMouse}
				ref={refImg}
				src={img}
			/>
		</ContainerImg>
	);
};

const ContainerImg = styled('div')(({ theme }) => ({
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',

	height: '200px',
	[theme.breakpoints.up('md')]: {
		height: `calc(100vh - ${theme.mixins.toolbar.minHeight + 150}px)`,
	},

	'& img': {
		// Sombra
		marginTop: '5rem',
		height: '100%',
		boxShadow: theme.shadows[20],
	},
}));

export default PanelBook;

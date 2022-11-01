import { styled } from '@mui/material/styles';
import { MathJaxContext } from 'better-react-mathjax';
import { Quiz } from './components/Quiz';

const QuizTest = () => {
	const config = {
		loader: { load: ['[tex]/html'] },
		tex: {
			packages: { '[+]': ['html'] },
			inlineMath: [
				['$', '$'],
				['\\(', '\\)'],
			],
			displayMath: [
				['$$', '$$'],
				['\\[', '\\]'],
			],
		},
	};

	return (
		<MathJaxContext config={config}>
			<QuizBackground>
				<Quiz />
			</QuizBackground>
		</MathJaxContext>
	);
};

const QuizBackground = styled('div')(({ theme }) => ({
	minHeight: '100vh',
	width: '100%',
	background: theme.palette.common.white,
	display: 'grid',
	placeItems: 'center',
}));

export default QuizTest;

import { Container } from '@mui/material';

// Components
import { ViewImportant } from './components/ViewImportant';
import { FormAddQuiz } from './components/FormAddQuiz';
import { HeaderCreateQuiz } from './components/HeaderCreateQuiz';
import { MathJaxContext } from 'better-react-mathjax';

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

export default function CreateQuiz() {
	return (
		<MathJaxContext config={config}>
			<Container sx={{ py: 7 }} maxWidth='md'>
				<HeaderCreateQuiz />

				<ViewImportant />

				<FormAddQuiz />
			</Container>
		</MathJaxContext>
	);
}

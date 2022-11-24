import { Box, Container, Step, StepLabel, Stepper } from '@mui/material';
// Components
import { ViewImportant } from './components/ViewImportant';
import { FormAddQuiz } from './components/FormAddQuiz';
import { HeaderCreateQuiz } from './components/HeaderCreateQuiz';
import { MathJaxContext } from 'better-react-mathjax';
// Config
import { config } from '@/config/MathJax/config';

export default function CreateQuiz() {
	return (
		<MathJaxContext config={config}>
			<Box py={5}>
				<Container maxWidth='md'>
					<HeaderCreateQuiz />

					<FormAddQuiz />

					<ViewImportant />
				</Container>
			</Box>
		</MathJaxContext>
	);
}

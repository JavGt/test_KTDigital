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

const Steeper = ({ children, activeStep }) => {
	const steps = ['Información del quiz', 'Preguntas', 'Revisión'];
	return (
		<Box my={5}>
			<Stepper alternativeLabel activeStep={activeStep}>
				{steps.map((label, index) => (
					<Step key={label}>
						<StepLabel StepIconProps={{ completed: false }}>{label}</StepLabel>
					</Step>
				))}
			</Stepper>
		</Box>
	);
};

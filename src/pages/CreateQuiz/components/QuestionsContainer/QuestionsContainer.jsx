import {
	useState,
	useReducer,
	forwardRef,
	useImperativeHandle,
	createContext,
} from 'react';
import { Box, Button, IconButton, Stack, Typography } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { useEffect } from 'react';
import { useRef } from 'react';
import { MultipleOptions } from '../InputInstruction';

const StoreEditorEmpty = { question: [], options: [] };

const QuestionsContainer = ({ data }) => {
	const [questions, setQuestions] = useState([]);

	const EditActions = useRef();

	const addNewQuestion = () => EditActions.current.setData(StoreEditorEmpty);

	useEffect(() => {
		if (!data.length) addNewQuestion();
		else setQuestions(data);
	}, [data]);

	const addQuestion = (question, index) => {
		setQuestions(prev => {
			if (index === undefined) return [...prev, question];

			prev[index] = question;
			return prev;
		});
	};

	return (
		<Stack gap={2} direction='column' mb={4}>
			<Stack direction='row' alignItems='center' justifyContent='space-between'>
				<Typography variant='h5' component='h2' gutterBottom fontWeight={600}>
					Preguntas
				</Typography>

				<IconButton onClick={addNewQuestion}>
					<AddIcon />
				</IconButton>
			</Stack>

			<QuestionsEditor ref={EditActions} addQuestion={addQuestion} />

			<ViewQuestion />
		</Stack>
	);
};

const QuestionsEditor = forwardRef(({ addQuestion }, ref) => {
	const [questionEdit, setQuestionEdit] = useState([]);

	useImperativeHandle(ref, () => ({
		setData: data => setQuestionEdit(prev => [...prev, data]),
	}));

	const onCompleteEdit = (question, index) => {
		setQuestionEdit(prev => prev.filter((_, i) => i !== index));
		addQuestion(question, index);
	};

	const onCancelEdit = index =>
		questionEdit.length > 1
			? setQuestionEdit(prev => prev.filter((_, i) => i !== index))
			: alert('No se puede cancelar, no hay preguntas');

	return (
		<>
			{!!questionEdit.length &&
				questionEdit.map((question, idx) => (
					<Box key={idx}>
						<EditedQuestion
							index={idx}
							question={question}
							onCompleteEdit={onCompleteEdit}
							onCancelEdit={onCancelEdit}
						/>
					</Box>
				))}
		</>
	);
});

const EditedQuestion = ({ question, index, onCompleteEdit, onCancelEdit }) => {
	const questionRef = useRef();
	const optionsRef = useRef();

	const handleCancelEdit = () => onCancelEdit(index);

	const handleSave = () => {
		const question = questionRef.current.getData();
		const options = optionsRef.current.getData();
		if (!question.length || !options.length)
			return alert('No se puede guardar, faltan datos');

		onCompleteEdit({ question, options }, index);
	};

	return (
		<>
			<Questions questions={question.question} ref={questionRef} />

			<Options options={question.options} ref={optionsRef} />

			<Buttons onCancel={handleCancelEdit} onSave={handleSave} />
		</>
	);
};

const Buttons = ({ onCancel, onSave }) => {
	return (
		<Stack direction='row' gap={2} alignItems='center' justifyContent='flex-end'>
			<Button onClick={onCancel} variant='outlined' color='error'>
				Cancelar
			</Button>
			<Button onClick={onSave} variant='outlined' color='success'>
				Guardar
			</Button>
		</Stack>
	);
};

const Questions = forwardRef(({}, ref) => {
	const [data, setData] = useState([]);

	useImperativeHandle(ref, () => ({
		getData: () => data,
	}));

	const handleSave = data => setData(data);

	return (
		<>
			<MultipleOptions setData={handleSave} label='Pegunta' />
		</>
	);
});

const Options = forwardRef(({}, ref) => {
	const [data, setData] = useState([]);

	useImperativeHandle(ref, () => ({
		getData: () => data,
	}));

	return (
		<>
			<MultipleOptions label='Opciones' />
		</>
	);
});

const ViewQuestion = props => {
	console.log('ViewQuestion -> props', props);
	const [question, setQuestion] = useState([]);

	return <></>;
};

export default QuestionsContainer;

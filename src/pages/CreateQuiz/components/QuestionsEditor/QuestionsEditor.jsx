import { Box } from '@mui/material';
import { useImperativeHandle } from 'react';
import { useState } from 'react';
import { forwardRef } from 'react';
import { EditedQuestion } from '../QuestionsContainer/QuestionsContainer';

const QuestionsEditor = forwardRef(({ onComplete }, ref) => {
	const [storeEditor, setStoreEditor] = useState([]);

	useImperativeHandle(ref, () => ({
		setData: data => setStoreEditor(prev => [...prev, data]),
	}));

	const onCompleteEdit = (question, index) => {
		if (!Object.keys(question).length)
			return alert('No se puede guardar, no hay preguntas');

		setStoreEditor(prev => prev.filter((_, i) => i !== index));
		onComplete(question);
	};

	const onCancelEdit = index => {
		return storeEditor.length > 1
			? setStoreEditor(prev => prev.filter((_, i) => i !== index))
			: alert('No se puede cancelar, no hay preguntas');
	};

	const addStore = (addStore, index) => {
		setStoreEditor(prev =>
			prev.map((store, i) => (i === index ? { ...store, ...addStore } : store))
		);
	};

	return (
		<>
			{!!storeEditor.length &&
				storeEditor.map((question, idx) => (
					<Box sx={{ border: '1px solid' }} key={idx}>
						<EditedQuestion
							index={idx}
							question={question}
							onCompleteEdit={onCompleteEdit}
							onCancelEdit={onCancelEdit}
							addStore={option => addStore(option, idx)}
						/>
					</Box>
				))}
		</>
	);
});

export default QuestionsEditor;

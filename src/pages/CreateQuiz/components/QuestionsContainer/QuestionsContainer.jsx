import { useState, forwardRef, useImperativeHandle } from 'react';
import {
	Box,
	Button,
	FormControl,
	IconButton,
	InputLabel,
	MenuItem,
	Select,
	Stack,
	Typography,
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { useEffect } from 'react';
import { useRef } from 'react';
import { MultipleOptions } from '../InputInstruction';
import { objType } from '../SelectType/SelectType';
import { AddTextOption } from '../AddTextOption';
import { AddImagenOption } from '../AddImagenOption';
import { AddLatexOption } from '../AddLatexOption';
import { createContext } from 'react';
import { useContext } from 'react';
import { QuestionsEditor } from '../QuestionsEditor';

const StoreEditorEmpty = { questions: [], options: [] };

// *** QuestionsContainer ***
const QuestionsContainer = ({ data }) => {
	const questionsEditorRef = useRef();

	const questionsViewerRef = useRef();

	const addStoreEditor = () => questionsEditorRef.current.setData(StoreEditorEmpty);

	const addStoreView = data => questionsViewerRef.current.setData(data);

	useEffect(() => {
		if (!data.length) addStoreEditor();
		else addStoreView(data);
	}, [data]);

	return (
		<Stack gap={2} direction='column' mb={4}>
			<Stack direction='row' alignItems='center' justifyContent='space-between'>
				<Typography variant='h5' component='h2' gutterBottom fontWeight={600}>
					Cuerpo del quiz
				</Typography>

				<IconButton onClick={addStoreEditor}>
					<AddIcon />
				</IconButton>
			</Stack>

			<QuestionsEditor ref={questionsEditorRef} />

			<ViewQuestion />
		</Stack>
	);
};

// *** QuestionsEditor ***

//  *** EditedQuestion ***
export const EditedQuestion = ({
	question,
	index,
	onCompleteEdit,
	onCancelEdit,
	addStore,
}) => {
	const questionRef = useRef();
	const optionsRef = useRef();

	const handleCancelEdit = () => onCancelEdit(index);

	const handleSave = () => {
		const questions = questionRef.current.getData();
		const options = optionsRef.current.getData();

		if (!questions.length || !options.length)
			return alert('No se puede guardar, faltan datos');

		onCompleteEdit({ questions, options }, index);
	};

	return (
		<>
			<WrapperOptionsQuizEdit
				options={question.questions}
				ref={questionRef}
				label='Preguntas'
				setValue={addStore}
			/>

			{/* <WrapperOptionsQuizEdit
				options={question.options}
				ref={optionsRef}
				label='Opciones'
			/> */}

			<Buttons onCancel={handleCancelEdit} onSave={handleSave} />
		</>
	);
};

//  *** WrapperOptionsQuizEdit ***
const WrapperOptionsQuizEdit = forwardRef(({ options, label, setValue }, ref) => {
	const [OptionsArray, setOptionsArray] = useState(options);

	useImperativeHandle(ref, () => ({
		getData: () => OptionsArray,
	}));

	const addOption = option => setValue(option);

	return (
		<>
			<FactoryOption options={objType} setValue={addOption} label={label} />
			{<pre>{JSON.stringify(OptionsArray, null, 2)}</pre>}
		</>
	);
});

export const factoryOptionContext = createContext();

const useFactoryOption = () => useContext(factoryOptionContext);
// *** FactoryOption ***
const FactoryOption = ({ setValue, label, value, options }) => {
	const [option, setOption] = useState(value ?? {});

	const [type, setType] = useState(() =>
		value ? options.find(option => option.type === value.type) : 0
	);

	const handleSave = () => {
		setValue({ type: options[type].value, value: option });
		setOption({});
		setType(0);
	};

	return (
		<factoryOptionContext.Provider
			value={{
				option,
				setOption,
				setType,
				type,
				handleSave,
			}}
		>
			<Stack>
				<Typography
					htmlFor='outlined-input-instructions'
					variant='h5'
					component='label'
					fontWeight={500}
				>
					{label}
				</Typography>
				<SelectFactoryOption options={options} type={type} setType={setType} />

				{type !== 0 && <FactoryInputOption type={type} />}
			</Stack>
		</factoryOptionContext.Provider>
	);
};

// *** SelectFactoryOption ***
const SelectFactoryOption = ({
	options,
	type,
	setType,
	label = 'Selecciona el tipo de contenido',
}) => {
	const handleChange = event => setType(event.target.value);

	return (
		<FormControl>
			<InputLabel id='outlined-input-instructions'>{label}</InputLabel>

			<Select
				value={type}
				onChange={handleChange}
				labelId='outlined-input-instructions'
				id='outlined-input-instructions'
				label='Selecciona el tipo de contenido'
			>
				{options.map(item => (
					<MenuItem disabled={item.disabled} key={item.id} value={item.id}>
						{item.name}
					</MenuItem>
				))}
			</Select>
		</FormControl>
	);
};

const withOption = Component => {
	return function () {
		const {
			option,
			setOption,
			setType,
			type,
			handleSave: handleFinish,
		} = useFactoryOption();

		const handleSave = () => {
			if (!option) return alert('No se puede guardar una opción vacía');

			if (type === 0) return alert('No se puede guardar una opción vacía');

			handleFinish();

			setType(0);
		};

		const handleCancel = () => setType(0);

		return (
			<>
				<Component value={option} setValue={setOption} />

				<Stack mt={2} direction='row' gap={'8px'} justifyContent='flex-end'>
					<Button onClick={handleCancel} variant='outlined' color='error'>
						Cancelar
					</Button>

					<Button onClick={handleSave} variant='outlined' color='success'>
						Agregar
					</Button>
				</Stack>
			</>
		);
	};
};

const TextOption = withOption(AddTextOption);
const ImagenOption = withOption(AddImagenOption);
const LatexOption = withOption(AddLatexOption);

const FactoryInputOption = ({ type }) => {
	return (
		<Box>
			{type === 1 ? (
				<TextOption />
			) : type === 2 ? (
				<ImagenOption />
			) : type === 3 ? (
				<LatexOption />
			) : (
				<Typography variant='h5' component='h2' gutterBottom fontWeight={600}>
					Opción no disponible. 😥
				</Typography>
			)}
		</Box>
	);
};

//---
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
	const [question, setQuestion] = useState([]);

	return <></>;
};

export default QuestionsContainer;

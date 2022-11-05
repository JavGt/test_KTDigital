const typesReducer = { addQuestion: 'addQuestion' };

function quizReducer(state, action) {
	switch (action.type) {
		case typesReducer.addQuestion:
			return action.payload;
		default:
			throw new Error('No se ha definido el tipo de acción');
	}
}

const emptyQuizQuestion = {
	question: [],
	options: [],
	availableOptions: 0,
};

export { quizReducer, typesReducer, emptyQuizQuestion };

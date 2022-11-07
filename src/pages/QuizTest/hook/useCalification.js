import { getAvailableOptions } from '../components/Quiz/Quiz';

export const useCalification = () => {
	const calificationQuiz = (questionsAnswered, originalData) => {
		const questions = originalData.map((qtn, idx) => {
			const { options } = qtn;

			const { selectedOptions } = questionsAnswered[idx] ?? {
				selectedOptions: [],
			};

			const correctAnswers = getAvailableOptions(options);

			const answersObtained = selectedOptions?.reduce(
				(acc, item) => (options[item.index].correct ? acc + 1 : acc),
				0
			);

			const qualification = Math.floor((answersObtained * 100) / correctAnswers);

			return {
				selectedOptions,
				qualification,
				question: idx,
				correctAnswers,
				answersObtained,
			};
		});

		const finalScore = Math.floor(
			questions.reduce((acc, item) => acc + item.qualification ?? 0, 0) /
				originalData.length
		);

		return { finalScore, questions };
	};
	return { calificationQuiz };
};

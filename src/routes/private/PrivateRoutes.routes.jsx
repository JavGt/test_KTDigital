import { QuizTest } from '@/pages/QuizTest';
import { Home } from '@/components/Home';
import { LayoutReader } from '@/components/Layout/LayoutReader';
import { Book } from '@/pages/Book';
import { BookReader } from '@/pages/BookReader';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { CreateQuiz } from '@/pages/CreateQuiz';

export const RoutesPrivate = createBrowserRouter([
	{
		path: '/',
		element: <LayoutReader />,
		children: [
			{
				index: true,
				element: <Home />,
			},
			{
				path: '/book:bookId',
				element: <Book />,
			},
			{
				path: '/reader:bookId',
				element: <BookReader />,
			},
		],
	},
	{
		path: '/test',
		element: <QuizTest />,
	},
	{
		path: '/create-quiz',
		element: <CreateQuiz />,
	},
]);

const PrivateRoutes = () => {
	return <RouterProvider router={RoutesPrivate} />;
};

export default PrivateRoutes;

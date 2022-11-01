import QuizOutlinedIcon from '@mui/icons-material/QuizOutlined';
import QuizIcon from '@mui/icons-material/Quiz';

//
import RocketLaunchOutlinedIcon from '@mui/icons-material/RocketLaunchOutlined';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';

import LibraryBooksOutlinedIcon from '@mui/icons-material/LibraryBooksOutlined';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';

import StickyNote2OutlinedIcon from '@mui/icons-material/StickyNote2Outlined';
import StickyNote2Icon from '@mui/icons-material/StickyNote2';

const checkTheme = (theme, view = 'filled') => {
	switch (theme) {
		case 'Introducción':
			return <RocketLaunchOutlinedIcon />;
		case 'Evaluación diagnostica':
			return <QuizOutlinedIcon />;
		default:
			return <StickyNote2OutlinedIcon />;
	}
};

export { checkTheme };

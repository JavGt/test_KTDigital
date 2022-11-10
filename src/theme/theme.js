import { createTheme } from '@mui/material/styles';

const mode = 'light';

const colors = {
	primary: '#06038D',
	secondary: '#071D49',
	tertiary: '#FF6900',
	alternate: '#FFC300',
	black: '#000814',
	success: '#39B54A',
	error: '#C1272D',
	alert: '#FFD217',
	light: '#F5F4FA',
	gray_light: '#F2F4F8',
	gray: '#BEBDC6',
	bookDemo: {
		primary: '#6cbd45',
		secondary: '#96cc78',
		tertiary: '#bddda7',
		variant: '#e1e8d7',
		alternate: '#0082c9',
		alternate1: '#2698d4',
		alternate2: '#83b7e3',
		alternate3: '#c4daf1',
	},
};

const theme = createTheme({
	components: {
		MuiCssBaseline: { styleOverrides: { body: { backgroundColor: colors.light } } },
	},
	palette: {
		mode,
		primary: { main: colors.primary },
		secondary: { main: colors.secondary },
		tertiary: { main: colors.tertiary },
		alternate: { main: colors.alternate },
		common: {
			white: colors.light,
			black: colors.black,
			gray: colors.gray,
			gray_light: colors.gray_light,
		},
		error: { main: colors.error },
		success: { main: colors.success },
		warning: { main: colors.alert },
		book: {
			primary: { main: colors.bookDemo.primary },
			secondary: { main: colors.bookDemo.secondary },
			tertiary: { main: colors.bookDemo.tertiary },
			variant: { main: colors.bookDemo.variant },
			alternate: { main: colors.bookDemo.alternate },
			alternate1: { main: colors.bookDemo.alternate1 },
			alternate2: { main: colors.bookDemo.alternate2 },
			alternate3: { main: colors.bookDemo.alternate3 },
		},
	},
	typography: { fontFamily: 'Albert Sans', fontSize: 15 },
	shape: { borderRadius: 3 },
});

export { theme };

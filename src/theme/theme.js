import { createTheme } from '@mui/material/styles';
import { blue } from '@mui/material/colors';

const mode = 'light';

const colors = {
	primaryDark: '#040262',
	primary: '#06038D',
	primaryLight: '#3735a3',

	secondaryDark: '#041433',
	secondary: '#071D49',
	secondaryLight: '#384a6d',

	tertiaryDark: '#b24900',
	tertiary: '#FF6900',
	tertiaryLight: '#ff8733',

	alternateDark: '#b28800',
	alternate: '#FFC300',
	alternateLight: '#ffcf33',

	text: '#00050e',
	subText: '#333943',

	white: '#FFFFFF',
	background: '#F3F6F9',

	successDark: '#277e33',
	success: '#39B54A',
	successLight: '#60c36e',

	errorDark: '#871b1f',
	error: '#C1272D',
	errorLight: '#cd5257',

	alertDark: '#b29310',
	alert: '#FFD217',
	alertLight: '#ffdb45',

	greyDark: '#85848a',
	gray: '#BEBDC6',
	greyLight: '#cbcad1',
};

const theme = createTheme({
	palette: {
		mode,

		primary: {
			main: colors.primary,
			dark: colors.primaryDark,
			light: colors.primaryLight,
		},

		secondary: {
			main: colors.secondary,
			dark: colors.secondaryDark,
			light: colors.secondaryLight,
		},

		tertiary: {
			main: colors.tertiary,
			dark: colors.tertiaryDark,
			light: colors.tertiaryLight,
		},

		alternate: {
			main: colors.alternate,
			dark: colors.alternateDark,
			light: colors.alternateLight,
		},

		background: {
			default: colors.background,
			paper: colors.white,
		},

		common: {
			white: colors.white,
			black: colors.black,
			gray: colors.gray,
			gray_light: colors.gray_light,
		},
		divider: colors.gray,

		success: {
			main: colors.success,
			dark: colors.successDark,
			light: colors.successLight,
			contrastText: colors.white,
		},
		error: {
			main: colors.error,
			dark: colors.errorDark,
			light: colors.errorLight,
		},
		warning: {
			main: colors.alert,
			dark: colors.alertDark,
			light: colors.alertLight,
		},
		info: {
			main: blue[500],
		},
		text: {
			primary: colors.text,
		},
	},
	typography: {
		htmlFontSize: 16,
		fontFamily: 'Albert Sans',
		fontSize: 14,
	},
	shape: {
		borderRadius: 10,
	},

	spacing: 8,
	components: {
		MuiButton: {
			styleOverrides: {
				root: {
					fontWeight: 500,
					fontSize: '14px',
					padding: '10px 24px',
					letterSpacing: '0.1px',
					borderRadius: 100,
					textTransform: 'capitalize',
					lineHeight: '20px',
				},
			},
		},
	},
});

export { theme };

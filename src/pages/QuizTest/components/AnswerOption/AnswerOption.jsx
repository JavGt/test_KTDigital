import { alpha, styled } from '@mui/material/styles';
import { Stack, Typography, Button } from '@mui/material';
import { getAlphabet } from '@/utils/getAlphabet';
import { Fragment } from 'react';
import { typeFactory } from '@/utils/typeFactory';
import { memo } from 'react';

const AnswerOption = ({ option, onSelected, index, selected }) => {
	const { contents } = option;
	const handleSelected = () => onSelected({ contents, index });

	return (
		<ButtonAnswer selected={selected} onClick={handleSelected}>
			<Stack gap={1} direction='row' alignItems={'center'}>
				<Typography variant='body1' fontWeight={900}>
					({getAlphabet(index)})
				</Typography>
				<Stack alignItems='center'>
					{contents.map((opt, idx) => (
						<Fragment key={idx}>{typeFactory(opt)}</Fragment>
					))}
				</Stack>
			</Stack>
		</ButtonAnswer>
	);
};
const ButtonAnswer = styled(Button)(({ theme, selected }) => ({
	border: '1px solid',
	borderColor: alpha(theme.palette.primary.main, 0.2),

	transitions: theme.transitions.create(['background-color', 'color'], {
		duration: theme.transitions.duration.shortest,
	}),

	'@media (hover: hover)': {
		'&:hover': {
			backgroundColor: alpha(theme.palette.primary.main, 0.2),
		},
	},

	...(selected && {
		backgroundColor: alpha(theme.palette.secondary.main, 0.8),
		color: theme.palette.primary.contrastText,
		boxShadow: theme.shadows[20],

		'&:hover': {
			backgroundColor: alpha(theme.palette.secondary.main, 0.9),
			color: theme.palette.primary.contrastText,
		},
	}),
}));

const areEqual = (prevProps, nextProps) => prevProps.selected === nextProps.selected;

export default memo(
	AnswerOption
	// areEqual
);

import SearchIcon from '@mui/icons-material/Search';
import { InputBase } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useRef, useState } from 'react';

const Search = styled('div')(({ theme }) => ({
	position: 'relative',
	borderRadius: theme.shape.borderRadius * 2,
	backgroundColor: theme.palette.common.white,
	width: '0px',

	transition: theme.transitions.create('width'),

	'&:focus-within': {
		width: '300px',
	},

	[theme.breakpoints.up('sm')]: {
		width: '0px',
	},
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
	padding: theme.spacing(0, 2),
	height: '100%',
	position: 'absolute',
	pointerEvents: 'none',
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
	color: theme.palette.primary.main,
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
	'& .MuiInputBase-input': {
		padding: theme.spacing(1, 1, 1, 0),
		paddingLeft: `calc(1em + ${theme.spacing(4)})`,

		[theme.breakpoints.up('sm')]: {
			width: '100%',

			'&:focus': {
				color: theme.palette.primary.main,
				fontWeight: 'bold',
			},
		},
	},
}));

const SearchNav = () => {
	const [value, setValue] = useState('');

	const inputRef = useRef(null);
	const handleFocus = () => inputRef.current.focus();

	return (
		<>
			{/* <PopUpSearch open={open} anchorEl={anchorEl} close={handleClose} /> */}
			<Search ref={inputRef}>
				<SearchIconWrapper>
					<SearchIcon />
				</SearchIconWrapper>
				<StyledInputBase
					value={value}
					onChange={e => setValue(e.target.value)}
					onFocus={handleFocus}
					placeholder='Buscar'
					inputProps={{ 'aria-label': 'search' }}
				/>
			</Search>
		</>
	);
};

export default SearchNav;

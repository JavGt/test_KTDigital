import Menu from '@mui/material/Menu';

const PopUpSearch = ({ open, anchorEl, close }) => {
	return (
		<Menu open={open} onClose={close} anchorEl={anchorEl} onClick={close}>
			PopUpSearch
		</Menu>
	);
};

export default PopUpSearch;

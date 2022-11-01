import { useRef, useState } from 'react';

import { styled, alpha } from '@mui/material/styles';
import { useBoolean } from '@/hooks/useBoolean';

import step from '../../../../navTest.json';
import {
	List,
	ListItem,
	ListItemIcon,
	ListItemText,
	Collapse,
	ListSubheader,
	Box,
	ListItemButton,
	Typography,
	IconButton,
} from '@mui/material';

import { checkTheme } from '@/utils/checkTheme';

// Icons
import MenuBookRoundedIcon from '@mui/icons-material/MenuBookRounded';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import { ExpandMore } from '@mui/icons-material';

const SubHeader = () => {
	return (
		<HeaderBook>
			<ListItem>
				<ListItemIcon>
					<MenuBookRoundedIcon sx={{ color: theme => theme.palette.primary.dark }} />
				</ListItemIcon>

				<ListItemText
					primary={
						<Typography color='primary.main' fontWeight={700} variant='subtitle1'>
							Ética I
						</Typography>
					}
					secondary={
						<Typography fontWeight={400} color='secondary.light' variant='body2'>
							DGB
						</Typography>
					}
				/>
			</ListItem>
		</HeaderBook>
	);
};

const StepperNav = () => {
	const ref = useRef(null);
	const [allClosed, setAllClosed] = useState(false);

	return (
		<ContentIndice>
			<List subheader={<SubHeader />}>
				{step.Indice.map((st, indice) => (
					<ItemN0 ref={ref} st={st} key={indice} indice={indice + 1} />
				))}
			</List>
		</ContentIndice>
	);
};

const ItemN0 = ({ st, indice }) => {
	const { value, toggle } = useBoolean(false);

	return (
		<>
			<ListItem
				divider
				disablePadding
				secondaryAction={
					st.hijos.length > 0 ? (
						<IconButton disablePadding onClick={toggle}>
							{value ? <CloseRoundedIcon /> : <ExpandMore />}
						</IconButton>
					) : null
				}>
				<ListItemButton>
					<ListItemIcon>
						<Typography color='primary.main' variant='h2'>
							{indice}
						</Typography>
					</ListItemIcon>
					<ListItemText
						primary={
							<Typography fontSize={'1rem'} fontWeight={600} variant='body2'>
								{st.nombre}
							</Typography>
						}
						secondary={
							<Typography fontSize={'.8rem'} variant='body2'>
								{st.seccion}
							</Typography>
						}
					/>
				</ListItemButton>
			</ListItem>
			<Collapse in={value}>
				<Box sx={{ display: 'flex' }}>
					<LineConnector />
					<List disablePadding>
						{st.hijos.map((sub, subIndice) => (
							<ItemN1 st={sub} key={subIndice} indice={indice + '.' + (subIndice + 1)} />
						))}
					</List>
				</Box>
			</Collapse>
		</>
	);
};

const LineConnector = styled(Box)(({ theme, color }) => ({
	backgroundColor: theme.palette.secondary.main,
	width: '.5rem',
}));

const ItemN1 = ({ st, indice }) => {
	const { value, toggle } = useBoolean(false);

	return (
		<>
			<ListItem
				disablePadding
				secondaryAction={
					st.hijos.length > 0 ? (
						<IconButton disablePadding onClick={toggle}>
							{value ? <CloseRoundedIcon /> : <ExpandMore />}
						</IconButton>
					) : null
				}>
				<ListItemButton>
					<ListItemIcon>
						<Typography color='primary.main' variant='h5'>
							{indice}
						</Typography>
					</ListItemIcon>

					<ListItemText
						primary={
							<Typography fontWeight={600} variant='body2' fontSize={'.8rem'}>
								{st.seccion}
							</Typography>
						}
						secondary={
							<Typography fontSize={'.7rem'} variant='body2'>
								{st.nombre}
							</Typography>
						}
					/>
				</ListItemButton>
			</ListItem>
			<Collapse in={value}>
				<Box sx={{ marginLeft: '1rem', display: 'flex' }}>
					<LineConnector color={'primary.dark'} />

					<List disablePadding>
						{st.hijos.map((subSub, subSubIndice) => (
							<ItemN2
								st={subSub}
								key={subSubIndice}
								indice={indice + '.' + (subSubIndice + 1)}
							/>
						))}
					</List>
				</Box>
			</Collapse>
		</>
	);
};

const ItemN2 = ({ st, indice }) => {
	return (
		<ListItem disablePadding>
			<ListItemButton>
				<ListItemIcon>
					<Typography color='primary.main' variant='h6'>
						{indice}
					</Typography>
				</ListItemIcon>
				<ListItemText
					primary={
						<Typography
							fontWeight={600}
							variant='body2'
							fontSize={'.8rem'}
							sx={{
								fontSize: '.8rem',
							}}>
							{st.seccion}
						</Typography>
					}
					secondary={
						<Typography variant='body2' fontSize={'.8rem'}>
							{st.nombre}
						</Typography>
					}
				/>

				<ListItemIcon>{checkTheme(st.nombre)}</ListItemIcon>
			</ListItemButton>
		</ListItem>
	);
};

const ContentIndice = styled(Box)(({ theme }) => ({
	overflow: 'auto',

	'&::-webkit-scrollbar': {
		width: '.1rem',
	},

	'&::-webkit-scrollbar-track-piece': {
		background: theme.palette.common.gray_light,
		left: '0px',
	},
	'&::-webkit-scrollbar-thumb': {
		background: theme.palette.secondary.dark,
	},
}));

const HeaderBook = styled(ListSubheader)(({ theme }) => ({
	borderBottom: `1px solid ${theme.palette.common.gray}`,
}));

export default StepperNav;

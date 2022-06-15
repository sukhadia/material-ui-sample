import { Box, styled, TextField } from '@mui/material';

export const StyledTextInput = styled(TextField)(({ theme }) => ({
  margin: `1rem !important`,
  width: '25ch',
}));

export const ButtonGroup = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  width: '100%',
  flexWrap: 'wrap',
  [`& > *`]: {
    margin: `1rem !important`,
    minWidth: '15ch',
    whiteSpace: 'nowrap',
    p: 2,
  },
}));

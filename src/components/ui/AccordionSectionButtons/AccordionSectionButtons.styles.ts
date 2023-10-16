import { styled } from '@mui/material/styles';

export const ButtonContainer = styled('div')({
  '& > button:not(:last-of-type)': {
    marginRight: '20px',
  },
});

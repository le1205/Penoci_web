// @mui
import { styled, alpha } from '@mui/material/styles';
import { Box, Typography, Stack, TextField, InputAdornment } from '@mui/material';
// utils
import { bgGradient } from '../../utils/cssStyles';
// components
import Iconify from '../../components/iconify';

// ----------------------------------------------------------------------

const StyledRoot = styled(Stack)(({ theme }) => ({
  padding: theme.spacing(15, 2.5),
  alignItems: 'start',
  ...bgGradient({
    color: '#F3F4F8',
    imgUrl: '/assets/background/bg_grey.png',
  }),
}));

// ----------------------------------------------------------------------

export default function SupportHero() {
  return (
    <StyledRoot>
      <Typography variant="h2" sx={{ textAlign: 'left', color: 'black', mb: 5, ml: 25 }}>
        Report Fraud
      </Typography>
    </StyledRoot>
  );
}

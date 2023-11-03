// @mui
import { alpha, styled } from '@mui/material/styles';
import {
  Stack,
  Button,
  Divider,
  Container,
  Typography,
  Unstable_Grid2 as Grid,
} from '@mui/material';
// components
import Image from 'src/components/image';
import Iconify from 'src/components/iconify';
import SvgColor from 'src/components/svg-color';

// ----------------------------------------------------------------------

const StyledAppStoreButton = styled(Button)(({ theme }) => ({
  flexShrink: 0,
  padding: '5px 12px',
  margin: theme.spacing(1),
  color: theme.palette.common.white,
  border: `solid 1px ${alpha(theme.palette.common.black, 0.24)}`,
  background: `linear-gradient(180deg, ${theme.palette.grey[900]} 0%, ${theme.palette.common.black} 100%)`,
  '& .MuiButton-startIcon': {
    marginLeft: 0,
  },
}));

// ----------------------------------------------------------------------

export default function HomeAppDown() {
  return (
    <Container sx={{ py: { xs: 8, md: 15 } }}>
      <Grid container spacing={3} justifyContent={{ lg: 'space-between' }}>
        <Grid xs={12} md={6} lg={5.5}>
          <Image
            alt="mobile app"
            src="/assets/images/home/qr1.png"
            sx={{
              maxWidth: 564,
            }}
          />
        </Grid>

        <Grid xs={12} md={6} lg={6}>
          <Image
            alt="mobile app"
            src="/assets/images/home/qr2.png"
            sx={{
              maxWidth: 600,
              mt: 10,
            }}
          />
          <Typography
            sx={{
              px: 5,
              pt: 5,
              color: 'black',
              fontSize: { xs: '20px', md: '35px' },
              fontWeight: 'bold',
            }}
          >
            Download the Penoci App
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
}

// ----------------------------------------------------------------------

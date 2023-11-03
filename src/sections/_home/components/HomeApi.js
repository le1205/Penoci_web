import { useRef } from 'react';
// @mui
import { styled, alpha } from '@mui/material/styles';
import { Box, Stack, Button, Container, Typography, Unstable_Grid2 as Grid } from '@mui/material';
// utils
import { bgGradient } from 'src/utils/cssStyles';
// hooks
import useResponsive from 'src/hooks/useResponsive';
import useBoundingClientRect from 'src/hooks/useBoundingClientRect';
// config
import { HEADER } from 'src/config-global';
// routes
import { paths } from 'src/routes/paths';
// components
import Image from 'src/components/image';
import Iconify from 'src/components/iconify';
import SvgColor from 'src/components/svg-color';

// ----------------------------------------------------------------------

const StyledRoot = styled('div')(({ theme }) => ({
  // ...bgGradient({
  //   color: alpha(theme.palette.background.default, 0.9),
  //   imgUrl: '/assets/background/overlay_1.jpg',
  // }),
  position: 'relative',
  overflow: 'hidden',
  [theme.breakpoints.up('md')]: {
    height: `calc(100vh - ${HEADER.H_MAIN_DESKTOP}px)`,
  },
}));

// ----------------------------------------------------------------------

export default function HomeApi() {
  const containerRef = useRef(null);

  const isMdUp = useResponsive('up', 'md');

  const container = useBoundingClientRect(containerRef);

  const offsetLeft = container?.left;

  return (
    <StyledRoot>
      <Container sx={{ height: 1 }}>
        <Grid container columnSpacing={3} alignItems="center" sx={{ height: 1 }}>
          <Grid item xs={12} md={6}>
            <Stack
              spacing={3}
              justifyContent="center"
              alignItems={{ xs: 'center', md: 'flex-start' }}
              sx={{
                textAlign: { xs: 'center', md: 'left' },
              }}
            >
              <Typography sx={{ fontSize: '50px', fontWeight: 'bold' }}>
                The world's trusted <br />
                currency data api
              </Typography>

              <Typography sx={{ color: 'text.secondary' }}>
                Get your digital asset moving internationally.
                <br /> Save up to 2x when you send with Penoci
              </Typography>

              <Button
                color="inherit"
                size="large"
                variant="contained"
                // endIcon={<Iconify icon="carbon:launch" />}
                target="_blank"
                rel="noopener"
                sx={{ backgroundColor: '#180CB2', color: 'white', textTransform: 'none' }}
                // href={paths.figmaPreview}
              >
                API Integration
              </Button>
            </Stack>
          </Grid>

          <Grid item xs={12} md={6}>
            <Image
              visibleByDefault
              disabledEffect
              alt="home hero"
              src="/assets/images/home/api.png"
            />
          </Grid>
        </Grid>
      </Container>
    </StyledRoot>
  );
}

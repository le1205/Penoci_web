import { useRef } from 'react';
// @mui
import { styled, alpha } from '@mui/material/styles';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
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
  ...bgGradient({
    color: alpha(theme.palette.background.default, 0.9),
    imgUrl: '/assets/background/overlay_1.jpg',
  }),
  position: 'relative',
  overflow: 'hidden',
  [theme.breakpoints.up('md')]: {
    height: `calc(100vh - ${HEADER.H_MAIN_DESKTOP}px)`,
  },
}));

// ----------------------------------------------------------------------

export default function HomeHero() {
  const containerRef = useRef(null);

  const isMdUp = useResponsive('up', 'md');

  const container = useBoundingClientRect(containerRef);

  const offsetLeft = container?.left;

  return (
    <StyledRoot>
      <Container
        sx={{
          pt: { xs: 3, sm: 5 },
          height: { md: 'auto' },
        }}
      >
        <Grid container columnSpacing={3} alignItems="start" sx={{ height: 1 }}>
          <Grid item xs={12} sx={{ textAlign: { xs: 'start', md: 'start' }, py: 10 }}>
            <div className="flex justify-between">
              <Stack spacing={2} justifyContent="start">
                <Typography sx={{ fontSize: '35px', fontWeight: 'bold' }}>
                  We know that you don’t <br /> trust your money with
                  <br /> just anyone.
                </Typography>

                <div className="flex">
                  <Button
                    color="inherit"
                    size="large"
                    variant="contained"
                    // endIcon={<Iconify icon="carbon:launch" />}
                    target="_blank"
                    rel="noopener"
                    sx={{
                      backgroundColor: '#291BDB',
                      color: 'white',
                      textTransform: 'none',
                      width: '250px',
                      marginTop: '30px',
                    }}
                    // href={paths.figmaPreview}
                  >
                    Get started now &nbsp;
                    <ArrowForwardIcon sx={{ color: 'white' }} />
                  </Button>
                </div>
              </Stack>
              <div>
                <Typography sx={{ fontSize: '25px', color: '#9E9CAF' }}>
                  That’s why we are diligent about keeping you and <br /> your money safe. It’s our
                  number one priority.
                </Typography>
                <Image
                  src="/assets/images/home/secu.png"
                  alt="sec"
                  sx={{ width: 300, py: 5, marginLeft: 'auto' }}
                />
              </div>
            </div>
          </Grid>
        </Grid>
      </Container>
    </StyledRoot>
  );
}

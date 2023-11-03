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
        <Grid container columnSpacing={3} alignItems="center" sx={{ height: 1 }}>
          <Grid item xs={12} sx={{ textAlign: { xs: 'center', md: 'center' } }}>
            <Stack
              spacing={2}
              justifyContent="center"
              // alignItems={{ xs: 'center', md: 'flex-start' }}
              sx={{
                py: 5,
                // textAlign: { xs: 'center', md: 'left' },
              }}
            >
              <Typography sx={{ fontSize: '50px', fontWeight: 'bold' }}>
                Accept crypto payments from your <br />
                mobile number with verified addresses &nbsp;
              </Typography>

              <Typography sx={{ color: 'text.secondary', fontSize: '25px' }}>
                Get your digital asset moving internationally. Save up to 2x <br />
                when you send with Penoci
              </Typography>
              <div className="flex justify-center gap-[50px]">
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
                  }}
                  // href={paths.figmaPreview}
                >
                  Get started now
                </Button>
                <Button
                  color="inherit"
                  size="large"
                  variant="contained"
                  // endIcon={<Iconify icon="carbon:launch" />}
                  target="_blank"
                  rel="noopener"
                  sx={{
                    borderRadius: '15px',
                    borderColor: '#291BDB',
                    borderWidth: 1,
                    borderStyle: 'solid',
                    backgroundColor: 'white',
                    color: 'black',
                    width: '250px',
                    textTransform: 'none',
                  }}
                  // href={paths.figmaPreview}
                >
                  Send Now
                </Button>
              </div>
            </Stack>
          </Grid>

          <Grid item xs={12}>
            {isMdUp && (
              <Image
                visibleByDefault
                disabledEffect
                alt="home hero"
                src="/assets/images/home/phones.png"
                sx={{
                  width: '100% ', // Adjust as needed
                  height: '70%', // Adjust as needed
                }}
              />
            )}
          </Grid>
        </Grid>
      </Container>
    </StyledRoot>
  );
}

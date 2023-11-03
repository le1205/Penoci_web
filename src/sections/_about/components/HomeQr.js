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
  backgroundColor: '#291BDB',
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
          <Grid item xs={12} sx={{ mt: '20px' }}>
            {isMdUp && (
              <div className="col">
                <Image
                  visibleByDefault
                  disabledEffect
                  alt="home hero"
                  src="/assets/images/home/about.jpg"
                  sx={{
                    width: '100% ', // Adjust as needed
                    height: '70%', // Adjust as needed
                  }}
                />
              </div>
            )}
          </Grid>
          <Grid item xs={12} sx={{ textAlign: { xs: 'start', md: 'start' } }}>
            <div className="flex justify-between">
              <Stack
                spacing={2}
                justifyContent="start"
                // alignItems={{ xs: 'center', md: 'flex-start' }}
                sx={
                  {
                    // textAlign: { xs: 'center', md: 'left' },
                  }
                }
              >
                <Typography sx={{ fontSize: '25px', fontWeight: 'bold', color: 'white' }}>
                  We care about your <br />
                  privacy
                </Typography>

                <div className="flex ">
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
                  <div className="flex mx-5">
                    <Box component="img" src="/assets/icons/ic_player.svg" alt="player" />
                    <Typography sx={{ fontSize: '20px', color: '#9E9CAF', mt: '10px', mx: '8px' }}>
                      What exactly about Penoci?
                    </Typography>
                  </div>
                </div>
              </Stack>
              <Typography sx={{ fontSize: '25px', color: '#9E9CAF' }}>
                Non-custodial Bitcoin trading <br />
                solution, we don’t hold your funds.
              </Typography>
            </div>
          </Grid>
        </Grid>
      </Container>
    </StyledRoot>
  );
}

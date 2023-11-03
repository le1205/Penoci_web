import { useRef, useState } from 'react';
import ScrollTrigger from 'react-scroll-trigger';
import { m } from 'framer-motion';
import { Box, Paper, Container, Typography, Grid, Stack, Button, Divider } from '@mui/material';
import { keyframes } from '@mui/system';
import useResponsive from 'src/hooks/useResponsive';
import useBoundingClientRect from 'src/hooks/useBoundingClientRect';
import Image from 'src/components/image';
import { MotionViewport, varFade } from 'src/components/animate';

export default function HomeQr() {
  const containerRef = useRef(null);
  const [triggered, setTriggered] = useState(false); // Define the setTriggered function

  const isMdUp = useResponsive('up', 'md');
  const container = useBoundingClientRect(containerRef);
  const offsetLeft = container?.left;

  const slideUp = keyframes`
  0% {
    transform: translateY(100%);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
`;

  return (
    <Container
      component={MotionViewport}
      sx={{
        pt: { xs: 10, md: 15 },
        pb: { xs: 5, md: 10 },
      }}
    >
      <Paper
        sx={{
          pb: 10,
          borderRadius: 3,
          textAlign: 'center',
          height: '600px',
          backgroundImage: `url('/assets/images/home/bg_green.png')`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <Container sx={{ height: 1 }}>
          <Grid container columnSpacing={3} alignItems="center" sx={{ height: 1 }}>
            <Grid item xs={12} md={8}>
              <Stack
                spacing={3}
                justifyContent="space-between"
                alignItems={{ xs: 'center', md: 'flex-start' }}
                sx={{
                  px: 10,
                  textAlign: { xs: 'center', md: 'left' },
                }}
              >
                <div className="mt-[-120px]">
                  <Typography sx={{ fontSize: '45px', fontWeight: 'bold', color: 'black' }}>
                    Your personalized
                    <br /> Penoci QR Sticker will be <br />
                    delivered to your Phone
                    <br /> number
                  </Typography>
                </div>
                <Typography sx={{ color: 'black', paddingTop: '20px' }}>
                  Get your digital asset moving internationally.
                  <br /> Save up to 2x when you send with Penoci
                </Typography>
              </Stack>
            </Grid>

            <Grid item xs={12} md={4}>
              {isMdUp && (
                <ScrollTrigger onEnter={() => setTriggered(true)}>
                  <Image
                    visibleByDefault
                    disabledEffect
                    alt="home hero"
                    src="/assets/images/home/app-screens-1.png"
                    sx={{
                      maxWidth: '500px',
                      animation: `${slideUp} 2s ease-out forwards`,
                    }}
                  />
                </ScrollTrigger>
              )}
            </Grid>
          </Grid>
        </Container>
      </Paper>
    </Container>
  );
}

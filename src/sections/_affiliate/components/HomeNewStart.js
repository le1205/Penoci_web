import { useRef, useState } from 'react';
import { m } from 'framer-motion';
import Typist from 'react-typist';
// @mui
import { Box, Paper, Container, Typography, Grid, Stack, Button, Divider } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
//hook
import useResponsive from 'src/hooks/useResponsive';
import useBoundingClientRect from 'src/hooks/useBoundingClientRect';
// components
import Image from 'src/components/image';
import { MotionViewport, varFade } from 'src/components/animate';

// ----------------------------------------------------------------------

export default function HomeNewStart() {
  const containerRef = useRef(null);

  const isMdUp = useResponsive('up', 'md');

  const container = useBoundingClientRect(containerRef);

  const offsetLeft = container?.left;

  return (
    <Container
      component={MotionViewport}
      sx={{
        pt: { xs: 10, md: 15 },
        pb: { xs: 5, md: 10 },
      }}
    >
      <Grid
        container
        columnSpacing={3}
        alignItems="center"
        justifyContent="space-between"
        sx={{ height: 1, py: '20px' }}
      >
        <Grid item xs={12} md={5} display={'flex'} sx={{ mb: 10 }}>
          <Box width="100%" height="100%" sx={{ position: 'relative', top: '-35px' }}>
            <div
              style={{
                backgroundColor: '#F2F2F5',
                width: 100,
                height: 100,
                position: 'relative',
                borderRadius: '50%',
              }}
            >
              <svg
                style={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%) rotate(90deg)', // rotate by 90 degrees
                }}
                xmlns="http://www.w3.org/2000/svg"
                width="50"
                height="50"
                fill="blue"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M7.646 1.146a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 2.707 2.354 7.854a.5.5 0 1 1-.708-.708l6-6z"
                />
                <path fillRule="evenodd" d="M7.5 1v14a.5.5 0 0 0 1 0V1a.5.5 0 0 0-1 0z" />
              </svg>
            </div>
          </Box>
        </Grid>
        <Grid item xs={12} md={6} display={'flex'} sx={{ mt: 10 }}>
          <Box width="100%" height="100%" sx={{ position: 'relative', top: '35px' }}>
            <Box sx={{ position: 'absolute', bottom: '70px', left: '30px' }}>
              <Typist cursor={{ show: false }}>
                <Typist.Delay ms={50} />
                <Typography
                  variant="caption"
                  sx={{ color: 'black', fontSize: '28px', fontWeight: 'bold' }}
                >
                  Let's work together: how to become
                  <br /> our affiliate
                </Typography>
                <br />
                <Typography
                  variant="caption"
                  sx={{ py: '10px', color: 'text.secondray', fontSize: '15px' }}
                >
                  Sharing is caring, and we appreciate it! Refer Penoci products to your friends &
                  family and earn exclusive rewards.
                </Typography>
              </Typist>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}

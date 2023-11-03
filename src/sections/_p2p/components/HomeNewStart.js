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
            <Image src="/assets/images/home/p2p_transfer.png" alt="p2p" />
            <Box sx={{ position: 'absolute', top: '25px', left: '30px' }}>
              <Typist cursor={{ show: false }}>
                <Typist.Delay ms={50} />
                <Typography variant="caption" sx={{ color: 'white', fontSize: '20px' }}>
                  Peer 2 Peer Transfer
                </Typography>
                <br />
                <Typography variant="caption" sx={{ py: '10px', color: 'white', fontSize: '30px' }}>
                  Send money to be picked up from more than 50000+ locations worldwide
                </Typography>
              </Typist>
            </Box>
            <Box sx={{ position: 'absolute', bottom: '15px', right: '30px' }}>
              <Typography variant="caption" sx={{ color: 'white', fontSize: '20px' }}>
                Find Number
              </Typography>
              <ArrowForwardIcon sx={{ color: 'white' }} />
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} md={5} display={'flex'} sx={{ mt: 10 }}>
          <Box width="100%" height="100%" sx={{ position: 'relative', top: '35px' }}>
            <Image src="/assets/images/home/track_transfer.png" alt="track" />
            <Box sx={{ position: 'absolute', bottom: '70px', left: '30px' }}>
              <Typist cursor={{ show: false }}>
                <Typist.Delay ms={50} />
                <Typography variant="caption" sx={{ color: 'black', fontSize: '20px' }}>
                  Track your transfer
                </Typography>
                <br />
                <Typography variant="caption" sx={{ py: '10px', color: 'black', fontSize: '30px' }}>
                  Get real time updates on any transfer you send
                </Typography>
              </Typist>
            </Box>
            <Box sx={{ position: 'absolute', bottom: '15px', right: '30px' }}>
              <Typography variant="caption" sx={{ color: 'black', fontSize: '20px' }}>
                Track a transfer
              </Typography>
              <ArrowForwardIcon sx={{ color: 'black' }} />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}

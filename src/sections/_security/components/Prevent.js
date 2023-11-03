import { useRef } from 'react';
// @mui
import { styled, alpha } from '@mui/material/styles';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import {
  Box,
  Stack,
  Button,
  Container,
  Typography,
  Paper,
  Divider,
  Unstable_Grid2 as Grid,
} from '@mui/material';
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

// ----------------------------------------------------------------------

export default function Prevent() {
  const containerRef = useRef(null);

  const isMdUp = useResponsive('up', 'md');

  const container = useBoundingClientRect(containerRef);

  const offsetLeft = container?.left;

  const data = [
    {
      title: 'Whom to buy your crypto',
      description:
        'Get your digital asset moving internationally. Save up to 2x when you send with Penoci',
    },
    {
      title: 'Another title',
      description:
        'Get your digital asset moving internationally. Save up to 2x when you send with Penoci',
    },
    {
      title: 'Another title',
      description:
        'Get your digital asset moving internationally. Save up to 2x when you send with Penoci',
    },
  ];

  return (
    <Paper
      sx={{
        textAlign: 'center',
        backgroundImage: `url('/assets/images/home/bg_blue2.png')`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'contain',
        backgroundPosition: 'center',
      }}
    >
      <Container
        sx={{
          pt: { xs: 3, sm: 5 },
          height: '800px',
        }}
      >
        <Grid container columnSpacing={3} alignItems="start" sx={{ height: 1 }}>
          <Grid item xs={12} sx={{ textAlign: { xs: 'start', md: 'start' }, px: 25 }}>
            <div className="flex justify-between">
              <Grid item xs={12} md={6}>
                <Stack spacing={30} justifyContent="space-between">
                  <Typography sx={{ fontSize: '35px', fontWeight: 'bold', color: 'white' }}>
                    Want to learn more <br /> about how you can
                    <br /> prevent fraud?
                  </Typography>
                  <Image
                    src="/assets/images/home/sec.png"
                    alt="sec"
                    sx={{ width: 300, marginLeft: 'auto' }}
                  />
                </Stack>
              </Grid>
              <Grid item xs={12} md={5}>
                {data.map((item, index) => (
                  <Box key={index} sx={{ py: 1 }}>
                    <Typography sx={{ fontSize: '25px', fontWeight: 'bold', color: 'white' }}>
                      {item.title}
                    </Typography>
                    <Typography sx={{ fontSize: '17px', color: 'white' }}>
                      {item.description}
                    </Typography>
                    <Divider sx={{ py: 4 }} />
                  </Box>
                ))}
              </Grid>
            </div>
          </Grid>
        </Grid>
      </Container>
    </Paper>
  );
}

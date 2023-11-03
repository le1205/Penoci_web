import PropTypes from 'prop-types';
// next
import NextLink from 'next/link';
// @mui
import {
  Stack,
  Typography,
  Paper,
  Avatar,
  Button,
  Container,
  Box,
  Link,
  InputAdornment,
  TextField,
  Grid,
} from '@mui/material';
import Image from 'src/components/image';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import SearchIcon from '@mui/icons-material/Search';
// hooks
import useResponsive from 'src/hooks/useResponsive';
// routes
import { paths } from 'src/routes/paths';
// components
import Iconify from 'src/components/iconify';
import TextMaxLine from 'src/components/text-max-line';
import { MotionViewport, varFade } from 'src/components/animate';
// ----------------------------------------------------------------------

export default function ReferPage() {
  const isMdUp = useResponsive('up', 'md');

  return (
    <Container
      component={MotionViewport}
      sx={{
        pt: { xs: 10, md: 15 },
        pb: { xs: 5, md: 10 },
      }}
    >
      <Grid container sx={{ height: 1, gap: 9 }}>
        <Grid item xs={12} md={3.5}>
          <Typography sx={{ color: 'black', fontSize: '40px', font: 'bold' }}>
            Refer & Earn
          </Typography>
          <Typography sx={{ color: 'text.secondary', fontSize: '20px', py: '20px' }}>
            Our dedicated fraud and security <br />
            teams work to keep your money
            <br /> safe
          </Typography>
        </Grid>
        <Grid item xs={12} md={3.5}>
          <Box sx={{ borderRadius: 1.5, bgcolor: '#F1F1F6', p: 2, position: 'relative' }}>
            <Box
              sx={{
                bgcolor: '#D7FF1D',
                borderRadius: '50%',
                width: 100,
                height: 100,
                position: 'absolute',
                top: 20,
                left: '25%',
                transform: 'translateX(-50%)',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Image src="/assets/images/home/pen.png" sx={{ width: 60, marginLeft: '15px' }} />
            </Box>
            <div className="mt-24">
              <Typography sx={{ color: 'black', fontSize: '30px', fontWeight: 'bold', pt: 6 }}>
                Refer & Earn
              </Typography>
              <Typography sx={{ color: 'text.secondary', fontSize: '20px', py: 2 }}>
                Our dedicated fraud and security <br />
                teams work to keep your money
                <br /> safe
              </Typography>
            </div>
          </Box>
        </Grid>
        <Grid item xs={12} md={3.5}>
          <Box sx={{ borderRadius: 1.5, bgcolor: '#F1F1F6', p: 2, position: 'relative' }}>
            <Box
              sx={{
                bgcolor: '#D7FF1D',
                borderRadius: '50%',
                width: 100,
                height: 100,
                position: 'absolute',
                top: 20,
                left: '25%',
                transform: 'translateX(-50%)',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Image src="/assets/images/home/pen.png" sx={{ width: 60, marginLeft: '15px' }} />
            </Box>
            <div className="mt-24">
              <Typography sx={{ color: 'black', fontSize: '30px', fontWeight: 'bold', pt: 6 }}>
                Refer & Earn
              </Typography>
              <Typography sx={{ color: 'text.secondary', fontSize: '20px', py: 2 }}>
                Our dedicated fraud and security <br />
                teams work to keep your money
                <br /> safe
              </Typography>
            </div>
          </Box>
        </Grid>
        <Box sx={{ borderRadius: 1.5, bgcolor: '#291BDB', p: 2, position: 'relative' }}>
          <div className="mt-24">
            <Typography sx={{ color: 'white', fontSize: '30px', fontWeight: 'bold', pt: 6 }}>
              Refer & Earn
            </Typography>
            <Typography sx={{ color: 'white', fontSize: '20px', py: 2 }}>
              Our dedicated fraud and security <br />
              teams work to keep your money
              <br /> safe
            </Typography>
          </div>
        </Box>
        <Box sx={{ borderRadius: 1.5, bgcolor: '#F1F1F6', p: 2, position: 'relative' }}>
          <Box
            sx={{
              bgcolor: '#D7FF1D',
              borderRadius: '50%',
              width: 100,
              height: 100,
              position: 'absolute',
              top: 20,
              left: '25%',
              transform: 'translateX(-50%)',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Image src="/assets/images/home/pen.png" sx={{ width: 60, marginLeft: '15px' }} />
          </Box>
          <div className="mt-24">
            <Typography sx={{ color: 'black', fontSize: '30px', fontWeight: 'bold', pt: 6 }}>
              Refer & Earn
            </Typography>
            <Typography sx={{ color: 'text.secondary', fontSize: '20px', py: 2 }}>
              Our dedicated fraud and security <br />
              teams work to keep your money
              <br /> safe
            </Typography>
          </div>
        </Box>
      </Grid>
    </Container>
  );
}

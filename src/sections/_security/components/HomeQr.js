import { useRef } from 'react';
import { m } from 'framer-motion';
// @mui
import { Box, Paper, Container, Typography, Grid, Stack, Button, Divider } from '@mui/material';
//hook
import useResponsive from 'src/hooks/useResponsive';
import useBoundingClientRect from 'src/hooks/useBoundingClientRect';
// components
import Image from 'src/components/image';
import { MotionViewport, varFade } from 'src/components/animate';

// ----------------------------------------------------------------------

export default function HomeQr() {
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
    // Add more objects for more items
  ];
  return (
    <Container
      component={MotionViewport}
      sx={{
        pt: { xs: 10, md: 15 },
        pb: { xs: 5, md: 10 },
      }}
    >
      <Typography sx={{ fontSize: '45px', fontWeight: 'bold', color: 'black' }}>
        How P2P works
      </Typography>
      <Grid
        container
        columnSpacing={3}
        alignItems="center"
        justifyContent="space-between"
        sx={{ height: 1 }}
      >
        <Grid item xs={12} md={3}>
          <div className="mt-[-220px]">
            <Typography sx={{ fontSize: '30px', fontWeight: 'bold', color: '#CCF21A' }}>
              <Box component="span" sx={{ borderBottom: '5px solid #D7FF1D' }}>
                Buy Crypto
              </Box>
            </Typography>
            <Typography sx={{ fontSize: '30px', fontWeight: 'bold', color: 'black', py: 5 }}>
              <Box component="span" sx={{ borderBottom: '2px solid black' }}>
                Sell Crypto
              </Box>
            </Typography>
          </div>
        </Grid>

        <Grid item xs={12} md={4}>
          <div className="mt-[15px]">
            {data.map((item, index) => (
              <Box key={index}>
                <Typography sx={{ fontSize: '25px', fontWeight: 'bold', color: 'black', py: 2 }}>
                  {item.title}
                </Typography>
                <Typography sx={{ fontSize: '17px', color: 'text.secondary' }}>
                  {item.description}
                </Typography>
                <Divider sx={{ py: 1 }} />
              </Box>
            ))}
          </div>
          <div className="flex justify-between mt-[50px]">
            <Button
              color="inherit"
              size="large"
              variant="contained"
              // endIcon={<Iconify icon="carbon:launch" />}
              target="_blank"
              rel="noopener"
              sx={{ backgroundColor: '#D7FF1D', color: 'black', textTransform: 'none' }}
              // href={paths.figmaPreview}
            >
              Sign up now
            </Button>
            <Button
              color="inherit"
              size="large"
              variant="contained"
              // endIcon={<Iconify icon="carbon:launch" />}
              target="_blank"
              rel="noopener"
              sx={{
                backgroundColor: 'white',
                color: 'black',
                textTransform: 'none',
                borderColor: 'black',
                borderWidth: 1,
                borderRadius: '15px',
                borderStyle: 'solid',
              }}
              // href={paths.figmaPreview}
            >
              Buy Now
            </Button>
          </div>
        </Grid>

        <Grid item xs={12} md={5}>
          {isMdUp && (
            <Image
              visibleByDefault
              disabledEffect
              alt="home hero"
              src="/assets/images/home/send.png"
              // sx={{
              //   maxWidth: '500px', // change the size by setting maxWidth or height
              // }}
            />
          )}
        </Grid>
      </Grid>
    </Container>
  );
}

// next
import { useRouter } from 'next/router';
// @mui
import { alpha, styled } from '@mui/material/styles';
import Masonry from '@mui/lab/Masonry';
import {
  Link,
  Stack,
  Button,
  Divider,
  Container,
  TextField,
  Typography,
  IconButton,
  InputAdornment,
  Box,
  Unstable_Grid2 as Grid,
} from '@mui/material';
import CallMadeIcon from '@material-ui/icons/CallMade';
// hooks
import useResponsive from 'src/hooks/useResponsive';
// _mock
import { _socials } from 'src/_mock';
// components
import Logo from 'src/components/logo';
import Iconify from 'src/components/iconify';
//
import { pageLinks, navConfig } from '../nav/config-navigation';
import ListDesktop from './ListDesktop';
import ListMobile from './ListMobile';

// ----------------------------------------------------------------------

export default function Footer() {
  const isMdUp = useResponsive('up', 'md');

  const { pathname } = useRouter();

  const mobileList = navConfig.find((i) => i.title === 'Pages')?.children || [];

  const desktopList = pageLinks.sort((listA, listB) => Number(listA.order) - Number(listB.order));

  const renderLists = isMdUp ? desktopList : mobileList;

  const isHome = pathname === '/--';

  const items = [
    { text: 'Twitter', imgSrc: '/assets/icons/ic_arrow.svg' },
    { text: 'Discord Chat', imgSrc: '/assets/icons/ic_arrow.svg' },
    { text: 'Blog', imgSrc: '/assets/icons/ic_arrow.svg' },
    { text: 'Forum', imgSrc: '/assets/icons/ic_arrow.svg' },
    { text: 'Reddit', imgSrc: '/assets/icons/ic_arrow.svg' },
    { text: 'Telegram', imgSrc: '/assets/icons/ic_arrow.svg' },
    // Add more items as needed
  ];

  const mainFooter = (
    <div className="mt-[50px]">
      <img alt="ft" src="/assets/background/footer.png" />
      <Box
        sx={{
          width: '100%',
          bgcolor: '#180CB2',
        }}
      >
        <Divider />

        <Container
          sx={{
            overflow: 'hidden',
            py: { xs: 8, md: 10 },
          }}
        >
          <Grid container spacing={3} justifyContent={{ md: 'space-between' }}>
            <Grid item xs={12} md={7}>
              <Stack spacing={{ xs: 3, md: 5 }}>
                <Stack spacing={3}>
                  <div className="-mx-2.5">
                    <img alt="logo" src="/favicon/logo2.svg" />
                  </div>
                  <Typography
                    variant="body2"
                    sx={{ color: 'white', fontSize: '20px', fontWeight: 'bold' }}
                  >
                    FAQ
                  </Typography>
                  <Divider sx={{ borderColor: 'white', height: '2px' }} />
                  <div className="flex justify-between">
                    <Typography
                      variant="body2"
                      sx={{ color: 'white', fontSize: '20px', fontWeight: 'bold' }}
                    >
                      Developer
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ color: 'white', fontSize: '15px', fontWeight: 'bold' }}
                    >
                      Advertise Re port Fraud
                    </Typography>
                  </div>
                  <Divider sx={{ borderColor: 'white', height: '2px' }} />
                  <div className="flex justify-between">
                    <Typography
                      variant="body2"
                      sx={{ color: 'white', fontSize: '20px', fontWeight: 'bold' }}
                    >
                      Resources
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ color: 'white', fontSize: '15px', fontWeight: 'bold' }}
                    >
                      Referral program
                      <br /> Fraud Awareness Track <br />a transfer
                    </Typography>
                  </div>
                  <Divider sx={{ borderColor: 'white', height: '2px' }} />
                  <Typography
                    variant="body2"
                    sx={{ color: 'white', fontSize: '20px', fontWeight: 'bold' }}
                  >
                    Contact Us
                  </Typography>
                  <Divider sx={{ borderColor: 'white', height: '2px' }} />
                  <Typography
                    variant="body2"
                    sx={{ color: 'white', fontSize: '20px', fontWeight: 'bold' }}
                  >
                    Terms and Conditions
                  </Typography>
                  <Divider sx={{ borderColor: 'white', height: '2px' }} />
                  <Typography
                    variant="body2"
                    sx={{ color: 'white', fontSize: '20px', fontWeight: 'bold' }}
                  >
                    Privacy Policy
                  </Typography>
                </Stack>
              </Stack>
            </Grid>
            <Grid item xs={1} md={true}>
              <Divider orientation="vertical" sx={{ height: '100%', borderColor: 'white' }} />
            </Grid>
            <Grid item xs={12} md={4}>
              <Box display="flex" justifyContent="center">
                <Typography
                  variant="body2"
                  sx={{ color: 'white', fontSize: '20px', fontWeight: 'bold' }}
                >
                  Sign up for our newsletter
                </Typography>
              </Box>
              <br /> <br />
              <Typography
                variant="body2"
                sx={{ color: 'white', fontSize: '20px', fontWeight: 'bold' }}
              >
                mail :
              </Typography>
              <br />
              <TextField
                label="Email"
                variant="outlined"
                type="email"
                sx={{
                  width: '350px',
                  borderRadius: '15px',
                  '& fieldset': {
                    borderRadius: '25px',
                  },
                }}
              />
              <Stack spacing={1.5} sx={{ my: 5 }}>
                <Typography
                  variant="body2"
                  sx={{ color: 'white', fontSize: '20px', fontWeight: 'bold' }}
                >
                  Social
                </Typography>
                {items.map((item, index) => (
                  <div className="flex" key={index}>
                    <Typography
                      variant="body2"
                      sx={{ color: 'white', fontSize: '17px', fontWeight: 'bold' }}
                    >
                      {item.text}
                    </Typography>
                    &nbsp;&nbsp;
                    <CallMadeIcon style={{ color: 'white' }} />
                  </div>
                ))}
                <Typography
                  variant="body2"
                  sx={{ color: 'white', fontSize: '20px', fontWeight: 'bold', pt: '15px' }}
                >
                  Customer support :
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ color: 'white', fontSize: '17px', fontWeight: 'bold', pt: '10px' }}
                >
                  customer@Penoci .com
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ color: 'white', fontSize: '17px', fontWeight: 'bold', pt: '10px' }}
                >
                  hello@Penoci .com
                </Typography>
              </Stack>
              {/* {isMdUp ? (
                <Masonry columns={4} spacing={2} defaultColumns={4} defaultSpacing={2}>
                  {renderLists.map((list) => (
                    <ListDesktop key={list.subheader} list={list} />
                  ))}
                </Masonry>
              ) : (
                <Stack spacing={1.5}>
                  {renderLists.map((list) => (
                    <ListMobile key={list.subheader} list={list} />
                  ))}
                </Stack>
              )} */}
            </Grid>
          </Grid>
          <br />
          <Divider sx={{ borderColor: 'white' }} />

          <div className="flex justify-between">
            <Stack spacing={2} sx={{ mt: '25px' }} alignItems="start">
              <Stack spacing={1}>
                <Typography variant="caption" sx={{ color: 'white' }}>
                  © 2023, Penoci Ltd. All rights reserved. Send money online to 200 countries and
                  territories with more than 100,000 Penoci agent locations.
                </Typography>
              </Stack>
              <Typography variant="caption" sx={{ color: 'white' }}>
                We use cookies so we can improve our website. Your info will not be sold or used
                otherwise. Read about our cookies
              </Typography>
            </Stack>
            <Stack spacing={2} sx={{ mt: '25px' }} alignItems="end">
              <div className="flex gap-5">
                <Button
                  sx={{
                    borderRadius: '15px',
                    borderColor: 'white',
                    backgroundColor: '#180CB2',
                    borderWidth: 1,
                    color: 'white',
                    borderStyle: 'solid',
                  }}
                >
                  Don't Allow
                </Button>
                <Button
                  sx={{
                    borderRadius: '15px',
                    borderColor: 'white',
                    backgroundColor: '#180CB2',
                    color: 'white',
                    borderWidth: 1,
                    borderStyle: 'solid',
                  }}
                >
                  Allow
                </Button>
              </div>
            </Stack>
          </div>
        </Container>
      </Box>
    </div>
  );

  return <footer>{mainFooter}</footer>;
}

// ----------------------------------------------------------------------

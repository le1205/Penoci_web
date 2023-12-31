import PropTypes from 'prop-types';
// @mui
import { useTheme } from '@mui/material/styles';
import {
  Box,
  Link,
  Stack,
  Button,
  AppBar,
  Toolbar,
  Container,
  Divider,
  Typography,
} from '@mui/material';
// hooks
import useOffSetTop from 'src/hooks/useOffSetTop';
import useResponsive from 'src/hooks/useResponsive';
// utils
import { bgBlur } from 'src/utils/cssStyles';
// routes
import { paths } from 'src/routes/paths';
import Iconify from 'src/components/iconify';
// config
import { HEADER } from 'src/config-global';
// components
import Logo from 'src/components/logo';
import Label from 'src/components/label';
import SettingsDrawer from 'src/components/settings/drawer';
//
import { NavMobile, NavDesktop, navConfig } from '../nav';
import Searchbar from '../../components/Searchbar';
import HeaderShadow from '../../components/HeaderShadow';

// ----------------------------------------------------------------------

export default function Header({ headerOnDark }) {
  const theme = useTheme();

  const isMdUp = useResponsive('up', 'md');

  const isOffset = useOffSetTop();

  return (
    <AppBar color="transparent" sx={{ boxShadow: 'none' }}>
      <Toolbar
        disableGutters
        sx={{
          height: {
            xs: HEADER.H_MOBILE,
            md: HEADER.H_MAIN_DESKTOP,
          },
          transition: theme.transitions.create(['height', 'background-color'], {
            easing: theme.transitions.easing.easeInOut,
            duration: theme.transitions.duration.shorter,
          }),
          ...(headerOnDark && {
            color: 'common.white',
          }),
          ...(isOffset && {
            ...bgBlur({ color: theme.palette.background.default }),
            color: 'text.primary',
            height: {
              md: HEADER.H_MAIN_DESKTOP - 16,
            },
          }),
        }}
      >
        <Container sx={{ height: 1, display: 'flex', alignItems: 'center' }}>
          <Box sx={{ lineHeight: 0, position: 'relative' }}>
            <a href="/">
              <img alt="logo" src="/favicon/logo.svg" />
            </a>
          </Box>
          &nbsp;&nbsp;
          <Divider orientation="vertical" flexItem sx={{ height: 50, mt: '15px' }} />
          &nbsp;&nbsp;&nbsp;&nbsp;
          <a href={paths.p2p.landing}>
            <Typography sx={{ fontSize: '20px', color: '#000', fontWeight: 'bold' }}>
              P2P
              <br />
              <Box component="span" sx={{ color: '#949494', fontSize: '15px' }}>
                Peer2Peer
              </Box>
            </Typography>
          </a>
          <Stack
            spacing={2}
            flexGrow={1}
            direction="row"
            alignItems="center"
            justifyContent="flex-end"
          >
            {isMdUp && <NavDesktop data={navConfig} />}
            <Divider orientation="vertical" flexItem sx={{ height: 50, mt: '15px' }} />
            <Stack spacing={1} direction="row" alignItems="center">
              <img alt="logo" src="/assets/icons/ic_earth.svg" />
              <Typography sx={{ fontSize: '20px', color: '#000', fontWeight: 'bold' }}>
                EN
              </Typography>
              <Iconify width={16} icon="carbon:chevron-down" sx={{ ml: 1 }} />
            </Stack>
          </Stack>
        </Container>
      </Toolbar>

      {isOffset && <HeaderShadow />}
    </AppBar>
  );
}

Header.propTypes = {
  headerOnDark: PropTypes.bool,
};

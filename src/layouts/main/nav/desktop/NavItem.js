import PropTypes from 'prop-types';
import { forwardRef } from 'react';

// next
import NextLink from 'next/link';
// @mui
import { Link, Typography, Box } from '@mui/material';
// components
import Iconify from 'src/components/iconify';
//
import { StyledNavItem } from './styles';

// ----------------------------------------------------------------------

export const NavItem = forwardRef(
  ({ item, open, active, subItem, isExternalLink, ...other }, ref) => {
    const { title, path, children, s_title } = item;

    const renderContent = (
      // <StyledNavItem
      //   ref={ref}
      //   disableRipple
      //   subItem={subItem}
      //   active={active}
      //   open={open}
      //   {...other}
      // >
      <Typography sx={{ fontSize: '20px', color: '#000', fontWeight: 'bold' }}>
        {title}
        <br />
        <Box component="span" sx={{ color: '#949494', fontSize: '15px' }}>
          {s_title}
        </Box>
      </Typography>
      // {!!children && <Iconify width={16} icon="carbon:chevron-down" sx={{ ml: 1 }} />}
      // </StyledNavItem>
    );

    // ExternalLink
    if (isExternalLink) {
      return (
        <Link href={path} target="_blank" rel="noopener" color="inherit" underline="none">
          {renderContent}
        </Link>
      );
    }

    // Has child
    if (children) {
      return renderContent;
    }

    // Default
    return (
      <Link component={NextLink} href={path} color="inherit" underline="none">
        {renderContent}
      </Link>
    );
  }
);

NavItem.propTypes = {
  active: PropTypes.bool,
  isExternalLink: PropTypes.bool,
  item: PropTypes.object,
  open: PropTypes.bool,
  subItem: PropTypes.bool,
};

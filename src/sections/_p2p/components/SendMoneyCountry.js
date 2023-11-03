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
} from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import SearchIcon from '@mui/icons-material/Search';
// hooks
import useResponsive from 'src/hooks/useResponsive';
// routes
import { paths } from 'src/routes/paths';
// components
import Iconify from 'src/components/iconify';
import TextMaxLine from 'src/components/text-max-line';

// ----------------------------------------------------------------------

export default function SendMoneyCountry({ tours }) {
  const isMdUp = useResponsive('up', 'md');

  // const viewAllBtn = (
  //   <Button
  //     component={NextLink}
  //     href={paths.travel.tours}
  //     color="inherit"
  //     endIcon={<Iconify icon="carbon:chevron-right" />}
  //   >
  //     View All
  //   </Button>
  // );

  return (
    <Container
      sx={{
        pt: { xs: 5, md: 10 },
        pb: 10,
      }}
    >
      <Stack
        direction="row"
        alignItems="center"
        justifyContent={{ xs: 'center', md: 'space-between' }}
        sx={{
          mb: { xs: 8, md: 10 },
          textAlign: { xs: 'center', md: 'unset' },
        }}
      >
        <Stack spacing={3}>
          <Typography variant="h2">
            Send money to over 165
            <br /> countries
          </Typography>
          <TextField
            id="search"
            type="search"
            size="small"
            placeholder="Search Country"
            sx={{
              mt: 1,
              minWidth: { xs: 60, md: 150 },
              backgroundColor: 'white',
              borderColor: 'black',
              borderWidth: 2,
              '& .MuiInputBase-input': {
                fontSize: '1.2rem', // Adjust placeholder size bigger
              },
            }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
            variant="outlined"
          />
        </Stack>

        {/* {isMdUp && viewAllBtn} */}
      </Stack>

      <Box
        sx={{
          gap: 3,
          display: 'grid',
          gridTemplateColumns: {
            xs: 'repeat(1, 1fr)',
            sm: 'repeat(2, 1fr)',
            md: 'repeat(3, 1fr)',
            lg: 'repeat(4, 1fr)',
          },
        }}
      >
        {tours.map((tour) => (
          <TourItem key={tour.id} tour={tour} />
        ))}
      </Box>

      {/* {!isMdUp && (
        <Stack alignItems="center" sx={{ mt: 8 }}>
          {viewAllBtn}
        </Stack>
      )} */}
    </Container>
  );
}

SendMoneyCountry.propTypes = {
  tours: PropTypes.array,
};

// ----------------------------------------------------------------------

function TourItem({ tour }) {
  const { coverImg, location } = tour;

  return (
    // <Link component={NextLink} href={paths.travel.tour} color="inherit" underline="none">
    <Paper
      variant="outlined"
      sx={{
        p: 3,
        borderRadius: 2,
        cursor: 'pointer',
        bgcolor: 'background.default',
        '&:hover': {
          boxShadow: (theme) => theme.customShadows.z24,
          bgcolor: 'background.paper',
        },
      }}
    >
      <Stack direction="row" alignItems="center" spacing={2.5}>
        <Avatar src={coverImg} sx={{ width: 64, height: 64 }} />

        <Stack spacing={0.5}>
          <TextMaxLine variant="h6" line={1}>
            {location}
          </TextMaxLine>
          <div className="flex">
            <Typography variant="body2" sx={{ color: 'text.secondary', fontSize: '15.5px' }}>
              Learn more
            </Typography>
            &nbsp;
            <ArrowForwardIcon sx={{ color: 'text.secondary', width: '2px', height: '20px' }} />
          </div>
        </Stack>
      </Stack>
    </Paper>
    // </Link>
  );
}

TourItem.propTypes = {
  tour: PropTypes.shape({
    coverImg: PropTypes.string,
    location: PropTypes.string,
  }),
};

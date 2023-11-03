import { m } from 'framer-motion';
// @mui
import { Button, Typography, TextField, Stack, Box } from '@mui/material';
//
import { varFade, MotionViewport } from '../../components/animate';

// ----------------------------------------------------------------------

export default function FaqsForm() {
  return (
    <Stack
      component={MotionViewport}
      spacing={3}
      sx={{ backgroundColor: '#F4F4F9', padding: '50px' }}
    >
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <m.div variants={varFade().inUp}>
          <Typography variant="h7">First name:</Typography>
          <TextField
            fullWidth
            label="First name"
            // variant="outlined"
            InputProps={{
              style: { backgroundColor: 'white' },
            }}
          />
        </m.div>
        <m.div variants={varFade().inUp}>
          <Typography variant="h7">Last name:</Typography>
          <TextField
            fullWidth
            label="Last name"
            // variant="outlined"
            InputProps={{
              style: { backgroundColor: 'white' },
            }}
          />
        </m.div>
      </Box>
      <m.div variants={varFade().inUp}>
        <Typography variant="h7">Your email:</Typography>
        <TextField
          fullWidth
          label="Email"
          // variant="outlined"
          InputProps={{
            style: { backgroundColor: 'white' },
          }}
        />
      </m.div>
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <m.div variants={varFade().inUp}>
          <Typography variant="h7">First name:</Typography>
          <TextField
            fullWidth
            label="First name"
            // variant="outlined"
            InputProps={{
              style: { backgroundColor: 'white' },
            }}
          />
        </m.div>
        <m.div variants={varFade().inUp}>
          <Typography variant="h7">Last name:</Typography>
          <TextField
            fullWidth
            label="Last name"
            // variant="outlined"
            InputProps={{
              style: { backgroundColor: 'white' },
            }}
          />
        </m.div>
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <m.div variants={varFade().inUp}>
          <Typography variant="h7">First name:</Typography>
          <TextField
            fullWidth
            label="First name"
            InputProps={{
              style: { backgroundColor: 'white' },
            }}
          />
        </m.div>
        <m.div variants={varFade().inUp}>
          <Typography variant="h7">Last name:</Typography>
          <TextField
            fullWidth
            label="Last name"
            // variant="outlined"
            InputProps={{
              style: { backgroundColor: 'white' },
            }}
          />
        </m.div>
      </Box>

      <m.div variants={varFade().inUp}>
        <Typography variant="h7">Tell us more about your project goals:</Typography>
        <TextField
          fullWidth
          label="Enter your message here."
          multiline
          rows={4}
          InputProps={{
            style: { backgroundColor: 'white' },
          }}
        />
      </m.div>

      <m.div variants={varFade().inUp}>
        <Button
          size="large"
          variant="contained"
          sx={{ backgroundColor: '#291BDB', width: '373px' }}
        >
          Submit
        </Button>
      </m.div>
    </Stack>
  );
}

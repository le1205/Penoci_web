import { m } from 'framer-motion';
// @mui
import { Button, Typography, TextField, Stack, Box } from '@mui/material';
//
import { varFade, MotionViewport } from '../../components/animate';

// ----------------------------------------------------------------------

export default function FaqsForm() {
  return (
    <Stack component={MotionViewport} spacing={3}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <m.div variants={varFade().inUp}>
          <Typography variant="h7">First name:</Typography>
          <TextField sx={{ width: '300px', mt: '5px' }} label="First name" />
        </m.div>
        <m.div variants={varFade().inUp}>
          <Typography variant="h7">last name:</Typography>
          <TextField sx={{ width: '300px', mt: '5px' }} label="last name" />
        </m.div>
      </Box>

      <m.div variants={varFade().inUp}>
        <Typography variant="h7">Your email</Typography>
        <TextField fullWidth label="Email" sx={{ mt: '5px' }} />
      </m.div>

      <m.div variants={varFade().inUp}>
        <Typography variant="h7">Tell us more about your project goals:</Typography>
        <TextField
          fullWidth
          label="Please type your note here."
          multiline
          rows={4}
          sx={{ mt: '5px' }}
        />
      </m.div>

      <m.div variants={varFade().inUp}>
        <Button size="large" variant="contained" sx={{ backgroundColor: '#0000FF' }}>
          Submit Now
        </Button>
      </m.div>
    </Stack>
  );
}

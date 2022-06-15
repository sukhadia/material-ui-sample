import { Grid, Typography } from '@mui/material';
import React from 'react';

export const ReadOnlyField = ({ label, value, sx={} }) => {
  return (
    <Grid container sx={sx}>
      <Typography variant="body1" sx={{ mr: 2, fontWeight: 700 }}>
        {label}
      </Typography>
      <Typography variant="body1">{value}</Typography>
    </Grid>
  );
};

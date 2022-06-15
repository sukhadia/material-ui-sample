import { Grid } from '@mui/material';
import React from 'react';

export const TabContent = ({ children }) => {
  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      direction="column"
      sx={{ minWidth: '100%' }}>
      {children}
    </Grid>
  );
};

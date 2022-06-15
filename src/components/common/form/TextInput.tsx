import { Grid, InputLabel, TextField } from '@mui/material';
import React from 'react';

export const TextInput = ({
  label = null,
  id = null,
  value = null,
  sx = {},
}) => {
  return (
    <Grid container alignItems="center">
      <InputLabel
        id="demo-simple-select-label"
        sx={{ fontWeight: 700, color: 'black' }}>
        {label}
      </InputLabel>
      <TextField
        id={id}
        value={value}
        // size="small"
        variant={"standard" as any}
        // label={label}
        sx={{ ml: 1, ...(sx || {}) }}
      />
    </Grid>
  );
};

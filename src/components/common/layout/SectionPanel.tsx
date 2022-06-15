import { Grid, InputLabel, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { StyledTextInput } from "../../common";

export const SectionPanel = ({title, contents}) => {
  return (
    <Grid container flexDirection="column">
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          // alignItems: 'center',
          // // flexWrap: 'wrap',
          // p: 2,
          mt: 2,
          // // maxWidth: '100%',
          border: '1px solid grey',
        }}>
        <Box sx={{ background: 'lightgrey', p: 1, fontWeight: 700 }}>
          {title}
        </Box>
        {contents}
      </Box>
    </Grid>
  );
}
import { styled } from '@mui/material';
import { Grid, useMediaQuery } from '@mui/material';
import React from 'react';

export const StyledGrid = styled(Grid)(({ theme }) => ({
  padding: '.5rem',
  margin: '0 .5rem',
  width: '100%',
}));

export const SectionRow = ({ children }) => {
  const isMobile = useMediaQuery('(max-width:960px)');
  return (
    <StyledGrid
      className="section-row"
      container
      flexWrap={isMobile ? 'wrap' : 'nowrap'}
      alignItems="center"
      justifyContent="space-around">
      {children}
    </StyledGrid>
  );
};

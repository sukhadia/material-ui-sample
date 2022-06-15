import React from 'react';
import {
  AppBar,
  Drawer,
  Grid,
  IconButton,
  ThemeProvider,
  Toolbar,
  Typography,
  Box,
  Container,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import theme from './theme';
import Logo from '../assets/truist_logo.png';
import { Tree } from './Tree';

export const Layout = ({ title = '', menuItems = { nodes: [] }, children }) => {
  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);

  const toggleDrawer =
    (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === 'keydown' &&
        ((event as React.KeyboardEvent).key === 'Tab' ||
          (event as React.KeyboardEvent).key === 'Shift')
      ) {
        return;
      }

      setIsDrawerOpen(open);
    };

  const onMenuItemsListClick = () => {
    toggleDrawer(false);
  };

  return (
    <ThemeProvider theme={theme}>
      <Drawer
        anchor="left"
        open={isDrawerOpen}
        onClose={toggleDrawer(false)}
        sx={{ maxWidth: '50vw' }}>
        <Tree data={menuItems} onClick={onMenuItemsListClick} />
      </Drawer>
      <Box>
        <AppBar position="sticky">
          <Toolbar variant="dense">
            {!!menuItems && menuItems.nodes?.length > 0 && (
              <IconButton
                edge="start"
                color="inherit"
                aria-label="menu"
                onClick={toggleDrawer(true)}
                style={{
                  marginRight: '1rem',
                }}>
                <MenuIcon />
              </IconButton>
            )}
            <Grid container justifyContent="space-between" alignItems="center">
              <Typography variant="h6" color="inherit">
                {title || ''}
              </Typography>
              <img src={Logo} height="50" width="120" alt="Truist logo" />
            </Grid>
          </Toolbar>
        </AppBar>
      </Box>
      {/* <Container maxWidth="xl"> */}
      <Grid
        container
        direction="column"
        sx={{
          flexGrow: 1,
          width: '100%',
        }}>
        <Grid style={{ width: '100%', height: '100%' }}>{children}</Grid>
      </Grid>
      {/* </Container> */}
    </ThemeProvider>
  );
};

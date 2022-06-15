import * as React from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import { Box, Grid, Typography } from '@mui/material';
// import IconButton from '@mui/material/IconButton';
// import PhotoCamera from '@mui/icons-material/PhotoCamera';
// import Stack from '@mui/material/Stack';

// const Input = styled('input')({
//   display: 'none',
// });

document.onpaste = function (pasteEvent) {
  if (!window['allowScreenshot']) return;

  // consider the first item (can be easily extended for multiple items)
  var item = pasteEvent.clipboardData.items[0];

  if (item.type.indexOf('image') === 0) {
    var blob = item.getAsFile();

    var reader = new FileReader();
    reader.onload = function (event) {
      (document.getElementById('container') as HTMLImageElement).src = event
        .target.result as string;
    };

    reader.readAsDataURL(blob);
  }
};

export const AddScreenshot = () => {
  const [isShowPasteArea, setIsShowPasteArea] = React.useState(false);
  return (
    // <Stack direction="row" alignItems="center" spacing={2}>
    <>
      <Button
        variant="contained"
        onClick={() => {
          window['allowScreenshot'] = true;
          setIsShowPasteArea(true);
        }}>
        Add Screenshot
      </Button>
      {isShowPasteArea && (
        <Grid
          container
          id="screenshot_space"
          sx={{ maxWidth: '100%', mt: 2, p: 1 }}>
          <Typography
            variant="body2"
            sx={{
              mb: 1,
              mr: 1,
              fontSize: '.75rem',
              fontWeight: 700,
              whiteSpace: 'inherit',
            }}>
            Instructions:
          </Typography>
          <Typography
            variant="body2"
            sx={{
              maxWidth: '100%',
              mb: 1,
              fontSize: '.75rem',
              whiteSpace: 'inherit',
            }}>
            Focus on the window you want to capture, press ALT+Print Scrn
            (Windows+Shift+S to snip on Windows 10+), then Ctrl+V to paste.
            Preview will appear below.
          </Typography>
          <img id="container" style={{ maxWidth: '100%' }} />
        </Grid>
      )}
    </>

    // <label htmlFor="icon-button-file">
    //   <Input accept="image/*" id="icon-button-file" type="file" />
    //   <IconButton
    //     color="primary"
    //     aria-label="upload picture"
    //     component="span">
    //     <PhotoCamera />
    //   </IconButton>
    // </label>
    // </Stack>
  );
};

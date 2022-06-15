import {
  Box,
  FormControl,
  FormHelperText,
  Grid,
  Input,
  InputLabel,
  Link,
  MenuItem,
  Paper,
  Select,
} from '@mui/material';
import { useState } from 'react';
import { StyledTextInput } from '../../../common';

export const DocumentSearch = (props) => {
  // TODO move formData to a JSON file
  // const formData = {
  //   "fields": [
  //     {
  //       "name": "Search Type",
  //       "type": "SINGLE_SELECT",
  //       "options": [
  //         "Generic"
  //       ]
  //     },
  //     {
  //       "name": "Account #",
  //       "type": "TEXT",
  //       ""
  //     }
  //   ]
  // };

  const [searchType, setSearchType] = useState('');

  return (
    <>
      <Paper sx={{}}>
        <Grid
          container
          flexDirection="column"
          alignItems="center"
          sx={{ m: 5 }}>
          <FormControl sx={{ m: 2, width: '25ch', maxHeight: '3rem' }}>
            <InputLabel id="demo-simple-select-label">Search Type</InputLabel>
            <Select
              label="Foo"
              value={searchType}
              onChange={(e) => setSearchType(e.target.value)}
              // sx={{ maxHeight: 40 }}
              // style={{ maxHeight: 40 }}
            >
              <MenuItem value={10}>Generic</MenuItem>
            </Select>
          </FormControl>
          <FormControl>
            <StyledTextInput
              id="acctNum"
              value=""
              // onChange={(e) =>
              //   dispatch({
              //     type: LoginActions.SET_FORM_DATA,
              //     payload: { userId: e.currentTarget.value },
              //   })
              // }
              label="AccountNumber"
              variant={'standard' as any}
            />
            {/* <InputLabel htmlFor="my-input">Account Number</InputLabel>
        <Input id="my-input" aria-describedby="my-helper-text" />
        <FormHelperText id="my-helper-text">
          Required field. Please enter a valid account number.
        </FormHelperText> */}
          </FormControl>
        </Grid>
      </Paper>
      <Link
        href="https://applicationsrvcsdev1.bbtnet.com/LSTrex/viewer.jsp?DocID={20BB737C-0000-CB2B-B39E-6EEA02CD77EB}&numPages=-1&formDesc=1214&mimeTypes=application/pdf"
        target="_blank">
        Click Here (test sample doc link)!
      </Link>
      {/* <form method="post" action="https://ecmportaldev1.bbtnet.com/ECGViewer2/viewer">

      </form> */}
    </>
  );
};

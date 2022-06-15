import React from 'react';
import { DatePicker } from '@mui/lab';
import { Grid, TextField, FormControl, Stack, Button } from '@mui/material';
import { Box } from '@mui/system';
import { Select } from '../../../common/form/Select';
import { TextInput } from '../../../common/form/TextInput';
import { styled } from '@mui/material';
import { ButtonGroup } from '../../../common';
import { TruistTable } from '../../../TruistTable';

enum ActionTypes {
  SET_START_DT,
  SET_END_DT,
  SET_WORK_TYPE,
  CLEAR_ALL,
  SEARCH,
}

const DEFAULT_STATE = {
  startDt: null,
  endDt: null,
  searchResults: undefined,
  workType: '',
};

export const WorkSearch = (props) => {
  const reducer = (state, action) => {
    switch (action.type) {
      case ActionTypes.SET_START_DT:
        return { ...state, startDt: action.payload.startDt };
      case ActionTypes.SET_END_DT:
        return { ...state, endDt: action.payload.endDt };
      case ActionTypes.SET_WORK_TYPE:
        return { ...state, workType: action.payload.workType };
      case ActionTypes.CLEAR_ALL:
        return { ...state, ...DEFAULT_STATE };
      case ActionTypes.SEARCH:
        return {
          ...state,
          searchResults: [
            {
              acctNum: '2010822354',
              noteNum: '5998',
              workTye: 'Payment Analysis',
              assignedUser: 'D22424',
              lastWorked: '24-Nov-2021 08:14:21 AM',
              startDt: '24-Nov-2021 07:55:58 AM',
              stepNm: 'Retail Loan Ops Process',
            },
            {
              acctNum: '9000081369',
              noteNum: '98789',
              workTye: 'Right to Cancel',
              assignedUser: '',
              lastWorked: '23-Nov-2021 07:09:59 AM',
              startDt: '17-Nov-2021 05:37:55 AM',
              stepNm: 'Retail Loan Ops Process',
            },
          ],
        };
    }
  };
  const [state, dispatch] = React.useReducer(reducer, { ...DEFAULT_STATE });

  return (
    <>
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        direction="column">
        {/* <Grid container justifyContent="center" sx={{ pb: 2, maxWidth: '50rem' }}> */}
        <Stack spacing={3}>
          <Select
            id="search-type"
            value={10}
            label="Search Type"
            onChange={console.log}
            options={[{ value: 10, description: 'BMS' }]}
          />
          <TextInput id="account_number" label="Account Number" value="" />
          <TextInput id="tax_id" label="Tax ID/SSN" value="" />
          <Grid container>
            <Box sx={{ mr: 2 }}>
              <DatePicker
                label="Start Date"
                value={state.startDt}
                onChange={(startDt) =>
                  dispatch({
                    type: ActionTypes.SET_START_DT,
                    payload: {
                      startDt,
                    },
                  })
                }
                renderInput={(params) => <TextField {...params} />}
              />
            </Box>
            <Box>
              <DatePicker
                label="End Date"
                value={state.endDt}
                onChange={(endDt) =>
                  dispatch({
                    type: ActionTypes.SET_END_DT,
                    payload: {
                      endDt,
                    },
                  })
                }
                renderInput={(params) => <TextField {...params} />}
              />
            </Box>
          </Grid>
          <Select
            id="work-type"
            value={state.workType}
            label="Work Type"
            onChange={(workType) => {
              console.log('workType: ', workType);
              dispatch({
                type: ActionTypes.SET_WORK_TYPE,
                payload: {
                  workType,
                },
              });
            }}
            options={[
              { value: 10, description: 'Secured CC' },
              { value: 20, description: 'CC BP Auto Approved' },
              { value: 30, description: 'CC Maintenance' },
              { value: 40, description: '...' },
            ]}
          />
          <ButtonGroup>
            <Button
              variant="contained"
              color="primary"
              onClick={() => {
                dispatch({
                  type: ActionTypes.SEARCH,
                });
              }}>
              Search
            </Button>
            <Button
              variant="contained"
              color="primary"
              onClick={() =>
                dispatch({
                  type: ActionTypes.CLEAR_ALL,
                })
              }>
              Clear
            </Button>
          </ButtonGroup>
        </Stack>
      </Grid>
      {state.searchResults && (
        <TruistTable
          headers={[
            'Account Number',
            'Tax ID/SSN',
            'LDM #',
            'Interconnect AppID',
            'WebForm ID',
            'Work Type',
            'Assigned User',
            'Start Date',
            'Step Name',
          ]}
          data={[
            {
              acctNum: '4444444444444444',
              taxId: '',
              ldm: '2021090750004',
              interconnectAppId: '2021081360735 ',
              webFormId: '0',
              workType: 'Retail BankPro',
              assignedUser: '',
              startDt: '23-Nov-2021 07:59:37 AM',
              stepNm: 'Waiting for BankPro',
            },
            {
              acctNum: '4147240499025169',
              taxId: '',
              ldm: '',
              interconnectAppId: '',
              webFormId: '607715',
              workType: 'Auto Pay Add or Delete or Modify',
              assignedUser: '',
              startDt: '29-Nov-2021 07:31:42 AM ',
              stepNm: 'FIS Review Escalate',
            },
          ]}
        />
      )}
    </>
  );
};

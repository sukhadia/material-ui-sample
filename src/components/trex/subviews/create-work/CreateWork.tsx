import { Button, Grid, Tab, Tabs } from '@mui/material';
import { Box } from '@mui/system';
import React, { useReducer } from 'react';
import { AddScreenshot } from '../../../AddScreenshot';
import { ReadOnlyField } from '../../../common/form/ReadOnlyField';
import { Select } from '../../../common/form/Select';
import { TextInput } from '../../../common/form/TextInput';
import { SectionPanel } from '../../../common/layout/SectionPanel';
import { SectionRow } from '../../../common/layout/SectionRow';
import { TabPanel } from '../../../TabPanel';
import { UploadButton } from '../../../UploadButton';
import TextareaAutosize from '@mui/material/TextareaAutosize';

enum ActionTypes {
  SAVE_WORK_TYPE = 'SAVE_WORK_TYPE',
  CLEAR_WORK_TYPE = 'CLEAR_WORK_TYPE',
  SELECT_WORK_TYPE = 'SELECT_WORK_TYPE',
  SELECT_CONTENT_TAB = 'SELECT_CONTENT_TAB',
}

const EMPTY_WORK_TYPE = '';

export const CreateWork = (props) => {
  const reducer = (state, action) => {
    switch (action.type) {
      case ActionTypes.SELECT_WORK_TYPE:
        return { ...state, selectedWorkType: state.savedWorkType };
      case ActionTypes.SAVE_WORK_TYPE:
        return {
          ...state,
          savedWorkType: action.payload.workType,
        };
      case ActionTypes.CLEAR_WORK_TYPE:
        return {
          ...state,
          selectedWorkType: EMPTY_WORK_TYPE,
          savedWorkType: EMPTY_WORK_TYPE,
        };
      case ActionTypes.SELECT_CONTENT_TAB:
        return { ...state, contentTabIndex: action.payload.contentTabIndex };
    }
  };
  const [state, dispatch] = useReducer(reducer, {
    selectedWorkType: EMPTY_WORK_TYPE,
    savedWorkType: EMPTY_WORK_TYPE,
    contentTabIndex: 0,
  });

  const handleSaveWorkType = (value: string | number) => {
    dispatch({
      type: ActionTypes.SAVE_WORK_TYPE,
      payload: {
        workType: value,
      },
    });
  };

  const handleSelectWorkType = () => {
    dispatch({
      type: ActionTypes.SELECT_WORK_TYPE,
    });
  };

  const handleClearWorkType = () => {
    dispatch({
      type: ActionTypes.CLEAR_WORK_TYPE,
    });
  };

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    dispatch({
      type: ActionTypes.SELECT_CONTENT_TAB,
      payload: { contentTabIndex: newValue },
    });
  };

  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      direction="column">
      <Grid container justifyContent="center" sx={{ pb: 2, maxWidth: '50rem' }}>
        <Select
          id="demo-simple-select"
          value={state.savedWorkType}
          label=""
          onChange={handleSaveWorkType}
          options={[
            { value: 10, description: 'Secured CC' },
            { value: 20, description: 'CC BP Auto Approved' },
            { value: 30, description: 'CC Maintenance' },
            { value: 40, description: '...' },
          ]}
        />
      </Grid>
      <Box>
        <Button
          variant="contained"
          sx={{ mx: 2 }}
          onClick={handleSelectWorkType}>
          Select
        </Button>
        <Button variant="outlined" onClick={handleClearWorkType}>
          Clear
        </Button>
      </Box>
      {state.selectedWorkType > 0 && (
        <Grid container flexDirection="column" sx={{ maxWidth: '100%' }}>
          <SectionPanel
            title="Work Item Fields"
            contents={
              <>
                <SectionRow>
                  <TextInput
                    label="Account Number"
                    id="accountNumber"
                    value=""
                  />
                  <TextInput label="Tax ID/SSN" id="taxId" value="" />
                  <TextInput label="LDM Number" id="ldmNumber" value="" />
                </SectionRow>
              </>
            }
          />
          <SectionPanel
            title="Comments"
            contents={
              <>
                <SectionRow>
                  <TextareaAutosize
                    aria-label="comments"
                    minRows={5}
                    placeholder="Add comments here..."
                    style={{ margin: '0 2rem', width: '100%' }}
                  />
                </SectionRow>
              </>
            }
          />
          {/* <Tabs
            value={state.contentTabIndex}
            onChange={handleTabChange}
            variant="scrollable"
            scrollButtons="auto"
            aria-label="create work content tabs">
            <Tab label="Work Item Fields" />
            <Tab label="GL Uploads" />
          </Tabs>
          <TabPanel value={state.contentTabIndex} index={0}>
            <Box sx={{ mb: 5 }}>Work Item Fields Content</Box> <UploadButton />{' '}
            <AddScreenshot />
          </TabPanel>
          <TabPanel value={state.contentTabIndex} index={1}>
            <Box sx={{ mb: 5 }}>GL Uploads Content</Box> <UploadButton />
          </TabPanel> */}
        </Grid>
      )}
    </Grid>
  );
};

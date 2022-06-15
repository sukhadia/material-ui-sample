import {
  Button,
  Checkbox,
  FormControlLabel,
  Grid,
} from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { ButtonGroup, StyledTextInput } from '../../../common';
import { SectionPanel } from '../../../common/layout/SectionPanel';
import { TruistTable } from '../../../TruistTable';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import { ReadOnlyField } from '../../../common/form/ReadOnlyField';
import { TextInput } from '../../../common/form/TextInput';
import { SectionRow } from '../../../common/layout/SectionRow';

export const BeginWork = (props) => {
  return (
    <>
      <Grid container flexDirection="column">
        <Grid container alignItems="center">
          <FormControlLabel
            control={<Checkbox name="auto-gen-nxt" />}
            label="Auto Gen Next"
          />
        </Grid>
        <SectionPanel
          title="Work Item Fields"
          contents={
            <>
              <SectionRow>
                <ReadOnlyField
                  label="Work Type"
                  value="DRL_Business Advantage"
                />
                <TextInput
                  label="Short Name"
                  id="userId"
                  value="FINANCIALS 0056"
                />
                <ReadOnlyField
                  label="Start Time"
                  value="04/28/2015, 09:44 AM"
                />
              </SectionRow>
              <SectionRow>
                <ReadOnlyField label="Account #" value="9043231305" />
                <TextInput label="Risk Grade" id="riskGrade" value="1" />
                <ReadOnlyField
                  label="Start Time"
                  value="04/28/2015, 09:44 AM"
                />
              </SectionRow>
              <SectionRow>
                <ReadOnlyField
                  label="Work Type"
                  value="DRL_Business Advantage"
                />
                <TextInput
                  label="Short Name"
                  id="userId"
                  value="FINANCIALS 0056"
                />
                <ReadOnlyField
                  label="Start Time"
                  value="04/28/2015, 09:44 AM"
                />
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
              <SectionRow>
                <ButtonGroup>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={() => {}}>
                    Pend
                  </Button>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={() => {}}>
                    Escalate
                  </Button>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={() => {}}>
                    Re-Index
                  </Button>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={() => {}}>
                    View Docs
                  </Button>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={() => {}}>
                    Add Exception
                  </Button>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={() => {}}>
                    Send Email
                  </Button>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={() => {}}>
                    View History
                  </Button>
                </ButtonGroup>
              </SectionRow>
            </>
          }
        />
        <SectionPanel
          title="Documents"
          contents={
            <Box sx={{ p: 2 }}>
              <TruistTable
                headers={[
                  'Type',
                  'Form Type',
                  'Form Description',
                  'Account #',
                  'Scan Date',
                  'IS Scan Date',
                ]}
                data={[
                  {
                    type: '',
                    formType: '4003',
                    description: 'ACH Draft Authorization Form',
                    acctNum: '9043231305',
                    scandDt: '10/25/2021',
                  },
                ]}
              />
            </Box>
          }
        />
      </Grid>
    </>
  );
};

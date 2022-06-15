import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { RouteComponentProps } from '@reach/router';
import { Layout } from '../Layout';
import { Grid } from '@mui/material';
// import DrawerItems from "./queues.json"
import TreeData from './tree.json';
import { TabPanel } from '../TabPanel';
import { CreateWork } from './subviews/create-work/CreateWork';
import { DocumentSearch } from './subviews/document-search/DocumentSearch';
import { BeginWork } from './subviews/begin-work/BeginWork';
import { WorkSearch } from './subviews/work-search/WorkSearch';
import { TabContent } from '../common/layout/TabContent';
import { LocalizationProvider } from '@mui/lab';
import AdapterDateFns from '@mui/lab/AdapterDateFns';

interface TrexProps extends RouteComponentProps {
  appId?: string;
}

export enum TrexReducerActions {
  SET_QUEUE_PATH,
  SWITCH_TAB,
}

export const Trex = ({ appId }: TrexProps) => {
  const trexReducer = (state, action) => {
    switch (action.type) {
      case TrexReducerActions.SET_QUEUE_PATH:
        return { ...state, queuePath: action.payload.path };
      case TrexReducerActions.SWITCH_TAB:
        return { ...state, selectedTabIndex: action.payload.selectedTabIndex };
    }
  };

  const [state, dispatch] = React.useReducer(trexReducer, {
    selectedTabIndex: 0,
  });

  const TruistContext = React.createContext(state);

  const handleChange = (
    event: React.SyntheticEvent,
    selectedTabIndex: number
  ) => {
    dispatch({
      type: TrexReducerActions.SWITCH_TAB,
      payload: {
        selectedTabIndex,
      },
    });
  };

  console.log('tree data: ', TreeData.tree);

  return (
    <TruistContext.Provider value={[state, dispatch]}>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <Layout
          title="Card Automation Workflow (DEV Server1)"
          menuItems={TreeData.tree}>
          <Grid
            container
            justifyContent="center"
            sx={{
              bgcolor: 'background.paper',
            }}>
            <Tabs
              value={state?.selectedTabIndex}
              onChange={handleChange}
              variant="scrollable"
              scrollButtons="auto"
              aria-label="scrollable auto tabs example">
              <Tab label="Create Work" />
              <Tab label="Begin Work" />
              <Tab label="Work Search" />
              <Tab label="Doc Search" />
              <Tab label="Add Doc" />
              <Tab label="Queue Monitor" />
              <Tab label="User Maint" />
            </Tabs>
          </Grid>
          <TabPanel value={state?.selectedTabIndex} index={0}>
            <TabContent>
              <CreateWork />
            </TabContent>
          </TabPanel>
          <TabPanel value={state?.selectedTabIndex} index={1}>
            <TabContent>
              <BeginWork />
            </TabContent>
          </TabPanel>
          <TabPanel value={state?.selectedTabIndex} index={2}>
            <TabContent>
              <WorkSearch />
            </TabContent>
          </TabPanel>
          <TabPanel value={state?.selectedTabIndex} index={3}>
            <TabContent>
              <DocumentSearch />
            </TabContent>
          </TabPanel>
          <TabPanel value={state?.selectedTabIndex} index={4}>
            <TabContent>Add Doc</TabContent>
          </TabPanel>
          <TabPanel value={state?.selectedTabIndex} index={4}>
            <TabContent>Queue Monitor</TabContent>
          </TabPanel>
          <TabPanel value={state?.selectedTabIndex} index={5}>
            <TabContent>User Maintenance</TabContent>
          </TabPanel>
        </Layout>
      </LocalizationProvider>
    </TruistContext.Provider>
  );
};

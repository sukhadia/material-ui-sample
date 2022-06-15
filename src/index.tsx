import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from '@reach/router';

import './index.css';
import reportWebVitals from './reportWebVitals';
import Login from './Login';
import TreeSample from './TreeSample';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Trex } from './components/trex/Trex';
import { Performers } from './components/performers/Performers';
import { Queue } from './components/trex/Queue';
import { ThemeProvider } from '@mui/material';

// Create a react-query client
const queryClient = new QueryClient();


ReactDOM.render(
  <QueryClientProvider client={queryClient}>
    <React.StrictMode>
      <ThemeProvider theme={{}}>
        <Router>
          <Trex path="/" />
          <Performers path="performers/:appId" />
          <Queue path="queue/:queueId" />
          <Login path="login" />
          <TreeSample path="tree-sample" />
        </Router>
      </ThemeProvider>
    </React.StrictMode>
  </QueryClientProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

import { Box, Button, Grid, TextField, Typography, styled } from '@mui/material';
import { Alert } from '@mui/lab';
import { useReducer } from 'react';
import { RouteComponentProps } from '@reach/router';
import { Layout } from './components/Layout';
import { ButtonGroup, StyledTextInput } from './components/common';

enum LoginActions {
  SET_FORM_DATA,
  SET_LOGIN_SUCCESS,
  SET_LOGIN_FAILURE,
  CLOSE_ALERT,
  CLEAR_STATE,
  ENCODE_PASSWORD,
}



const StyledCompliance = styled('div')(() => ({
  fontSize: '9pt',
  color: '#9A9A9A',
  borderTop: '1px dashed #9A9A9A',
  margin: '4rem auto',
  paddingTop: '1em',
  textAlign: 'left',
}));

export const Login = (props: RouteComponentProps) => {
  const initialState = {
    userId: '',
    password: '',
  };

  const loginFormReducer = (state, action) => {
    switch (action.type) {
      case LoginActions.SET_FORM_DATA:
        if (action.payload.password) {
          //
          // return { ...state, ...action.payload, password: b64encodedPassword };
        }
        return { ...state, ...action.payload };
      case LoginActions.SET_LOGIN_SUCCESS:
        return { ...state, ...action.payload };
      case LoginActions.SET_LOGIN_FAILURE:
        return { ...state, ...action.payload };
      case LoginActions.CLOSE_ALERT:
        return { ...state, status: undefined };
      case LoginActions.CLEAR_STATE:
        return { ...state, ...initialState };

      default:
        throw new Error(`Invalid action: ${[state, action]}`);
    }
  };

  const [state, dispatch] = useReducer(loginFormReducer, initialState);

  const b64EncodeUnicode = (str) => {
    return btoa(
      encodeURIComponent(str).replace(/%([0-9A-F]{2})/g, function (match, p1) {
        return String.fromCharCode(0 + p1);
      })
    );
  };

  const onSubmit = async () => {
    const b64encodedPassword = b64EncodeUnicode(state.password);
    console.log('b64encodedPassword: ', b64encodedPassword);

    const response = await fetch('//localhost:3000/api/logon', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify({
        userId: state.userId,
        password: b64encodedPassword,
      }),
    });
    const data = await response.json();
    dispatch({
      type:
        response.status === 200
          ? LoginActions.SET_LOGIN_SUCCESS
          : LoginActions.SET_LOGIN_FAILURE,
      payload: data? { ...data } : {},
    });
  };

  return (
    <Layout title={'Retail Automation Workflow - DEV Server1 - Ver 3.0'}>
      <Box m="2rem">
        {state?.status === 'success' && (
          <Alert
            severity="success"
            action={
              <Button
                color="inherit"
                size="small"
                onClick={() => dispatch({ type: LoginActions.CLOSE_ALERT })}>
                DISMISS
              </Button>
            }>
            Login successful!
          </Alert>
        )}
        {state?.status === 'failure' && (
          <Alert
            severity="error"
            action={
              <Button
                color="inherit"
                size="small"
                onClick={() => dispatch({ type: LoginActions.CLOSE_ALERT })}>
                DISMISS
              </Button>
            }>
            Login attempt failed!
          </Alert>
        )}
      </Box>
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        wrap="nowrap">
        <Typography variant="h3" gutterBottom>
          Welcome
        </Typography>
        <Typography variant="body1" gutterBottom>
          Please login below
        </Typography>

        <form noValidate autoComplete="off">
          <Grid
            container
            direction="column"
            justifyContent="space-between"
            alignItems="center"
            sx={{
              width: '100%',
              maxWidth: 500,
            }}>
            <StyledTextInput
              id="userId"
              value={state.userId}
              onChange={(e) =>
                dispatch({
                  type: LoginActions.SET_FORM_DATA,
                  payload: { userId: e.currentTarget.value },
                })
              }
              label="User ID"
              variant={'standard' as any}
            />
            <StyledTextInput
              type="password"
              id="password"
              value={state.password}
              onChange={(e) =>
                dispatch({
                  type: LoginActions.SET_FORM_DATA,
                  payload: { password: e.currentTarget.value },
                })
              }
              label="Password"
              variant={'standard' as any}
            />
            <ButtonGroup>
              <Button variant="contained" color="primary" onClick={onSubmit}>
                Submit
              </Button>
              <Button
                variant="contained"
                onClick={() => dispatch({ type: LoginActions.CLEAR_STATE })}>
                Clear
              </Button>
            </ButtonGroup>
          </Grid>
        </form>
      </Grid>

      <StyledCompliance>
        You are authorized to use <b>AW</b> for approved business purposes only.
        Use for any other purpose is prohibited. All transactional records,
        reports, e-mail, software, and other data generated by or residing upon{' '}
        <b>AW</b> are the property of <b>TRUIST</b> and may be used by{' '}
        <b>TRUIST</b> for any purpose. Authorized and unauthorized activities
        may be monitored.
      </StyledCompliance>
    </Layout>
  );
};

export default Login;

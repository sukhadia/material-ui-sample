import React from 'react';

import { useQuery } from 'react-query';
import { Layout } from '../Layout';
import { TruistTable } from '../TruistTable';

export enum AppIds {
  LS = 'LS',
  LMS = 'LMS',
}

export const Performers = (props) => {
  const { isLoading, data, error } = useQuery(['performers', props.appId], () =>
    fetch(`//localhost:3000/api/performers/${props.appId}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
    }).then((resp) => resp.json())
  );
  
  return (
    <Layout>
      {error && <p>${error}</p>}
      {isLoading && <p>Loading...</p>}
      {data && (
        <TruistTable headers={['Name', 'Description', 'Status']} data={data?.services} />
      )}
    </Layout>
  );
};

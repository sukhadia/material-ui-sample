import { Typography } from "@mui/material";
import { Layout } from "../Layout";
import { TruistTable } from "../TruistTable";

export const Queue = (props) => {
  return (
    <Layout>
      <Typography variant="h6">(WIP) Selected queue {props.queueId}</Typography>
      <TruistTable
        headers={['Name', 'Description', 'Status', 'Controls']}
        data={[{
          name: 'Name',
          desc: 'Desc',
          status: 'Status',
          controls: '(TBD)'
        }]}
      />
    </Layout>
  );
}
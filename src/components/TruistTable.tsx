import React from "react";

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

export const TruistTable = ({headers, data}) => {
  return (< TableContainer component = { Paper } >
  <Table aria-label="simple table">
    <TableHead>
      <TableRow>
          {headers.map(header => <TableCell>{ header }</TableCell>)}
      </TableRow>
    </TableHead>
    <TableBody>
      {data.map((row, index) => (
        <TableRow key={`row_${index}`}>
          {Object.keys(row).map((key) => (
            <TableCell component="th" scope="row">
              {row[key]}
            </TableCell>
          ))}
        </TableRow>
      ))}
    </TableBody>
  </Table>
</TableContainer>);}
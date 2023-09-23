import * as React from 'react';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import '../../styles/contentlist.css';

export const ContentList = ({id, company, division, title, createdDate, updatedDate}) => {
    return ( (id%2===1) ?
        <TableRow
            key={id}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            className="css-34nofg-MuiTableRow-root-Pair "
        >
            <TableCell component="th" scope="row" align="center">{id}</TableCell>
            <TableCell align="center">{company}</TableCell>
            <TableCell align="center">{division}</TableCell>
            <TableCell align="center">{title}</TableCell>
            <TableCell align="center">{createdDate}</TableCell>
            <TableCell align="center">{updatedDate}</TableCell>
        </TableRow>
        :
        <TableRow
            key={id}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
        >
            <TableCell component="th" scope="row" align="center">{id}</TableCell>
            <TableCell align="center">{company}</TableCell>
            <TableCell align="center">{division}</TableCell>
            <TableCell align="center">{title}</TableCell>
            <TableCell align="center">{createdDate}</TableCell>
            <TableCell align="center">{updatedDate}</TableCell>
        </TableRow>
    );
}
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


export default class BasicTable extends React.Component {
    state = {
        listData: [
            {
                id: 1,
                company: 'Premium Art',
                division: 'Design',
                title: 'Content 1',
                createdData: '11-09-2023 7:08',
                updatedData: '11-09-2023 7:08' 
                },
                {
                id: 2,
                company: 'Buu Digital LTDA',
                division: 'Programmer',
                title: 'Toft Site',
                createdData: '11-09-2023 7:08',
                updatedData: '11-09-2023 7:08' 
                },
                {
                id: 3,
                company: 'Center Bob',
                division: 'FrontEnd',
                title: 'Tools for Building',
                createdData: '11-09-2023 7:08',
                updatedData: '11-09-2023 7:08' 
                }
        ],
        searchValue: '',
        whichColumn: 'company'
    };

    listSave = this.state.listData;

    handleChange = (e) => {
        this.setState({ searchValue : e.target.value})
    }

    clearBtn = () => {
        this.setState({ searchValue: '', listData: this.listSave});
    }

    searchBtn = () => {
        let newList = this.state.listData.filter(content => {
            console.log('Entrei no filter')
            console.log(content[this.state.whichColumn]);
            console.log(content[this.state.whichColumn].toLowerCase().includes(this.state.searchValue.toLowerCase()));
            return content[this.state.whichColumn].toLowerCase().includes(this.state.searchValue.toLowerCase());
        });
        this.setState({ listData : newList });
    }

    handleClick = (nameColumn) => {
        console.log('Entrei')
        console.log(nameColumn)
        this.setState({ whichColumn: nameColumn });
    }

    render() {

        const { listData, searchValue} = this.state;

        return (
            <div>
                <br/>
                <br/>
                <input
                    onChange={this.handleChange}
                    value={searchValue}
                />
                <br/>
                <br/>
                <button onClick={this.clearBtn}>Clear</button>
                <button type="search" onClick={this.searchBtn}>Search</button>
                <h1>Tables - Content List</h1>
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell align="center">#</TableCell>
                                <TableCell align="center">Company Name</TableCell>
                                <TableCell align="center">Division</TableCell>
                                <TableCell align="center">Title</TableCell>
                                <TableCell align="center">createdData</TableCell>
                                <TableCell align="center">updatedData</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {listData.map((row) => (
                                <TableRow
                                key={row.id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                <TableCell component="th" scope="row" align="center">
                                    {row.id}
                                </TableCell>
                                <TableCell align="center">{row.company}</TableCell>
                                <TableCell align="center">{row.division}</TableCell>
                                <TableCell align="center">{row.title}</TableCell>
                                <TableCell align="center">{row.createdData}</TableCell>
                                <TableCell align="center">{row.updatedData}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
          );
    }
}

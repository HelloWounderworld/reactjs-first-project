import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { ContentList } from '../../components/ContentList'
import '../../styles/content.css';


export default class BasicTable extends React.Component {
    state = {
        listData: [
            {
                id: 1,
                company: 'Premium Art',
                division: 'Design',
                title: 'Content 1',
                createdDate: '11-09-2023 7:08',
                updatedDate: '11-09-2023 7:08' 
                },
                {
                id: 2,
                company: 'Buu Digital LTDA',
                division: 'Programmer',
                title: 'Toft Site',
                createdDate: '11-09-2023 9:08',
                updatedDate: '11-09-2023 9:08' 
                },
                {
                id: 3,
                company: 'Center Bob',
                division: 'FrontEnd',
                title: 'Tools for Building',
                createdDate: '11-09-2023 7:08',
                updatedDate: '11-09-2023 7:08' 
                }
        ],
        rowNames: {
            id: '#',
            company: 'Company Name',
            division: 'Division',
            title: 'Title',
            createdDate: 'Created Date',
            updatedDate: 'Updated Date' 
        },
        searchValue: '',
        whichColumn: ''
    };

    listSave = this.state.listData;

    handleChange = (e) => {
        this.setState({ searchValue : e.target.value})
    }

    clearBtn = () => {
        this.setState({ searchValue: '', listData: this.listSave});
    }

    searchBtn = () => {
        console.log(this.state.searchValue);

        let newList = this.listSave.filter(content => {
            if (this.state.whichColumn !== '') {
                return content[this.state.whichColumn].toLowerCase().includes(this.state.searchValue.toLowerCase());
            } else {
                return content.company.toLowerCase().includes(this.state.searchValue.toLowerCase());
            }
        });
        this.setState({ listData : newList });
    }

    handleClick = (nameColumn) => {
        this.setState({ whichColumn: nameColumn });
    }

    disableSelectionColumn = () => {
        console.log('Entrei')
        this.setState({ whichColumn: '' });
    }

    render() {

        const { listData, searchValue, whichColumn, rowNames } = this.state;

        return (
            <div>
                <br/>
                <br/>
                <input
                    onChange={this.handleChange}
                    value={searchValue}
                    className="searchBar"
                />
                <br/>
                <br/>
                <button onClick={this.clearBtn} className="clearBtn">Clear</button>
                <button type="search" onClick={this.searchBtn} className="searchBtn">Search</button>
                <p className="tableContentList">Tables <b>- Content List</b></p>
                {whichColumn !== '' && (
                    <div>
                        <p className="selectedColumn">Column <b className="nameColumn">{rowNames[whichColumn]}</b> Selected</p>
                        <button onClick={this.disableSelectionColumn} className="disableSelection">Disable Selection</button>
                    </div>
                )}
                <TableContainer component={Paper} className="TableCustomize">
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                            <TableRow className="rowNames">
                                <TableCell align="center" onClick={() => this.handleClick('id')}>#</TableCell>
                                <TableCell align="center" onClick={() => this.handleClick('company')}>Company Name</TableCell>
                                <TableCell align="center" onClick={() => this.handleClick('division')}>Divisio</TableCell>
                                <TableCell align="center" onClick={() => this.handleClick('title')}>Title</TableCell>
                                <TableCell align="center" onClick={() => this.handleClick('createdDate')}>Created Date</TableCell>
                                <TableCell align="center" onClick={() => this.handleClick('updatedDate')}>Updated Date</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {listData.map((row) => (
                                <ContentList
                                    key={row.id}
                                    id={row.id}
                                    company={row.company}
                                    division={row.division}
                                    title={row.title}
                                    createdDate={row.createdDate}
                                    updatedDate={row.updatedDate}
                                />
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
          );
    }
}

import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { ContentList } from '../../components/ContentList';
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
            },
            {
                id: 4,
                company: 'Onco Farma',
                division: 'Drug Store',
                title: 'Administration',
                createdDate: '11-11-2021 8:08',
                updatedDate: '11-09-2022 13:08' 
            },
            {
                id: 5,
                company: 'Chillibeans',
                division: 'Automation',
                title: '3D provider',
                createdDate: '11-09-2023 7:08',
                updatedDate: '11-09-2023 7:08' 
            },
            {
                id: 6,
                company: 'Vivo',
                division: 'BackEnd',
                title: 'Internet',
                createdDate: '11-09-2023 7:08',
                updatedDate: '11-09-2023 7:08' 
            },
            {
                id: 7,
                company: 'IMPA',
                division: 'Math Reaserch',
                title: 'Dynamical System',
                createdDate: '11-09-2023 7:08',
                updatedDate: '11-09-2023 7:08' 
            },
            {
                id: 8,
                company: 'Sao Paulo of University',
                division: 'College',
                title: 'Class',
                createdDate: '11-09-2023 7:08',
                updatedDate: '11-09-2023 7:08' 
            },
            {
                id: 9,
                company: 'Abema Prime',
                division: 'News',
                title: 'Social Problems',
                createdDate: '11-09-2023 7:08',
                updatedDate: '11-09-2023 7:08' 
            },
            {
                id: 10,
                company: 'Yoake Mae no Players',
                division: 'Inteview',
                title: 'Yusuke Narita as main regular',
                createdDate: '11-09-2023 7:08',
                updatedDate: '11-09-2023 7:08' 
            },
            {
                id: 11,
                company: 'Apple',
                division: 'Developer',
                title: 'New Iphone 15',
                createdDate: '11-09-2023 7:08',
                updatedDate: '11-09-2023 7:08' 
            },
            {
                id: 12,
                company: 'Google',
                division: 'System Architecture',
                title: 'Will lose for ChatGpt?',
                createdDate: '11-09-2023 7:08',
                updatedDate: '11-09-2023 7:08' 
            },
            {
                id: 13,
                company: 'Tesla',
                division: 'IA/Data Science',
                title: 'ChatGpt',
                createdDate: '11-09-2023 7:08',
                updatedDate: '11-09-2023 7:08' 
            },
            {
                id: 14,
                company: 'Ford',
                division: 'Car',
                title: 'Engine',
                createdDate: '11-09-2023 7:08',
                updatedDate: '11-09-2023 7:08' 
            },
            {
                id: 15,
                company: 'YouTube',
                division: 'Youtuber',
                title: 'Entertainment',
                createdDate: '11-09-2023 7:08',
                updatedDate: '11-09-2023 7:08' 
            },    
        ],
        nameRows: {
            id: '#',
            company: 'Company Name',
            division: 'Division',
            title: 'Title',
            createdDate: 'Created Date',
            updatedDate: 'Updated Date'
        },
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
        if (this.state.whichColumn === 'id') {
            let newList = this.listSave.filter(content => {
                return content[this.state.whichColumn] === parseInt(this.state.searchValue);
        });
        this.setState({ listData : newList });
        } else {
            let newList = this.listSave.filter(content => {
                return content[this.state.whichColumn].toLowerCase().includes(this.state.searchValue.toLowerCase());
            });
            this.setState({ listData : newList });
        }
    }

    handleClick = (nameColumn) => {
        this.setState({ whichColumn: nameColumn });
    }

    render() {

        const { listData, searchValue, whichColumn, nameRows } = this.state;

        return (
            <body className='bodyContentPage'>
                <div>
                    <p className='hierarchy'>App {'>'} Content {'>'} ContentList</p>
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
                    <p className="selectedColumn">Column <b className="nameColumn">{ nameRows[whichColumn] }</b> selected</p>
                    <TableContainer component={Paper} className="TableCustomize">
                        <Table sx={{ minWidth: 650 }} aria-label="simple table">
                            <TableHead>
                                <TableRow className="rowNames">
                                    {(whichColumn === 'id') ? <TableCell align="center" onClick={() => this.handleClick('id')} className="nameColumn">#</TableCell> : <TableCell align="center" onClick={() => this.handleClick('id')}>#</TableCell>}
                                    {(whichColumn === 'company') ? <TableCell align="center" onClick={() => this.handleClick('company')} className="nameColumn">Company Name</TableCell> : <TableCell align="center" onClick={() => this.handleClick('company')}>Company Name</TableCell>}
                                    {(whichColumn === 'division') ? <TableCell align="center" onClick={() => this.handleClick('division')} className="nameColumn">Divisio</TableCell> : <TableCell align="center" onClick={() => this.handleClick('division')}>Divisio</TableCell>}
                                    {(whichColumn === 'title') ? <TableCell align="center" onClick={() => this.handleClick('title')} className="nameColumn">Title</TableCell> : <TableCell align="center" onClick={() => this.handleClick('title')}>Title</TableCell>}
                                    {(whichColumn === 'createdDate') ? <TableCell align="center" onClick={() => this.handleClick('createdDate')} className="nameColumn">Created Date</TableCell> : <TableCell align="center" onClick={() => this.handleClick('createdDate')}>Created Date</TableCell>}
                                    {(whichColumn === 'updatedDate') ? <TableCell align="center" onClick={() => this.handleClick('updatedDate')} className="nameColumn">Updated Date</TableCell> : <TableCell align="center" onClick={() => this.handleClick('updatedDate')}>Updated Date</TableCell>}
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
            </body>
          );
    }
}

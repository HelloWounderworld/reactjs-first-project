import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { TableVirtuoso } from 'react-virtuoso';
import '../../styles/contentbet.css';

const columns = [
  {
    width: 100,
    label: '#',
    dataKey: 'id',
  },
  {
    width: 120,
    label: 'Company Name',
    dataKey: 'company',
    numeric: true,
  },
  {
    width: 120,
    label: 'Division',
    dataKey: 'division',
    numeric: true,
  },
  {
    width: 120,
    label: 'Title',
    dataKey: 'title',
    numeric: true,
  },
  {
    width: 120,
    label: 'Created Date',
    dataKey: 'createdDate',
    numeric: true,
  },
  {
    width: 120,
    label: 'Updated Date',
    dataKey: 'updatedDate',
    numeric: true,
  },
];

const VirtuosoTableComponents = {
  Scroller: React.forwardRef((props, ref) => (
    <TableContainer component={Paper} {...props} ref={ref} />
  )),
  Table: (props) => (
    <Table {...props} sx={{ borderCollapse: 'separate', tableLayout: 'fixed' }} />
  ),
  TableHead,
  TableRow: ({ item: _item, ...props }) => <TableRow {...props} />,
  TableBody: React.forwardRef((props, ref) => <TableBody {...props} ref={ref} />),
};

export default class ReactVirtualizedTable extends React.Component {
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
            {
                id: 16,
                company: 'McKisey',
                division: 'Consultant',
                title: 'Solve problem',
                createdDate: '11-09-2023 7:08',
                updatedDate: '11-09-2023 7:08' 
            },
            {
                id: 17,
                company: 'Softbank',
                division: 'Software Engineer',
                title: 'Software',
                createdDate: '11-09-2023 7:08',
                updatedDate: '11-09-2023 7:08' 
            },
            {
                id: 18,
                company: 'Space X',
                division: 'Rocket',
                title: 'Horiemon',
                createdDate: '11-09-2023 7:08',
                updatedDate: '11-09-2023 7:08' 
            },
            {
                id: 19,
                company: 'Clear',
                division: 'Broker',
                title: 'Investiment',
                createdDate: '11-09-2023 7:08',
                updatedDate: '11-09-2023 7:08' 
            },
            {
                id: 20,
                company: 'Banco do Brasil',
                division: 'Bank',
                title: 'Keep Money',
                createdDate: '11-09-2023 7:08',
                updatedDate: '11-09-2023 7:08' 
            },
            {
                id: 21,
                company: 'Avenue',
                division: 'Broker',
                title: 'Investment',
                createdDate: '11-09-2023 7:08',
                updatedDate: '11-09-2023 7:08' 
            },
            {
                id: 22,
                company: 'NuInvest',
                division: 'Broker',
                title: 'Investment',
                createdDate: '11-09-2023 7:08',
                updatedDate: '11-09-2023 7:08' 
            },
            {
                id: 23,
                company: 'Konami',
                division: 'Game',
                title: 'Card Game',
                createdDate: '11-09-2023 7:08',
                updatedDate: '11-09-2023 7:08' 
            },
            {
                id: 24,
                company: 'AmericanTrade',
                division: 'Broker',
                title: 'Investiment',
                createdDate: '11-09-2023 7:08',
                updatedDate: '11-09-2023 7:08' 
            },
            {
                id: 25,
                company: 'Oxford',
                division: 'College',
                title: 'Class',
                createdDate: '11-09-2023 7:08',
                updatedDate: '11-09-2023 7:08' 
            },
            {
                id: 26,
                company: 'Cambridge',
                division: 'College',
                title: 'Class',
                createdDate: '11-09-2023 7:08',
                updatedDate: '11-09-2023 7:08' 
            },
            {
                id: 27,
                company: 'X Japan',
                division: 'Music',
                title: 'Yoshiki Hayashi',
                createdDate: '11-09-2023 7:08',
                updatedDate: '11-09-2023 7:08' 
            },
            {
                id: 28,
                company: 'Gackt',
                division: 'Music',
                title: 'Gackt Kamui',
                createdDate: '11-09-2023 7:08',
                updatedDate: '11-09-2023 7:08' 
            },
            {
                id: 29,
                company: 'Gorillaz',
                division: 'Music',
                title: 'Band Rock',
                createdDate: '11-09-2023 7:08',
                updatedDate: '11-09-2023 7:08' 
            },
            {
                id: 30,
                company: 'Tohei',
                division: 'Animation',
                title: 'Anime',
                createdDate: '11-09-2023 7:08',
                updatedDate: '11-09-2023 7:08' 
            },
            {
                id: 31,
                company: 'TOHO',
                division: 'Animation',
                title: 'Anime',
                createdDate: '11-09-2023 7:08',
                updatedDate: '11-09-2023 7:08' 
            },
            {
                id: 32,
                company: 'BitCoin',
                division: 'Broker',
                title: 'Investiment',
                createdDate: '11-09-2023 7:08',
                updatedDate: '11-09-2023 7:08' 
            },
            {
                id: 33,
                company: 'Tech Camp',
                division: 'Course',
                title: 'Mako Yukinari',
                createdDate: '11-09-2023 7:08',
                updatedDate: '11-09-2023 7:08' 
            },
            {
                id: 34,
                company: 'Udemy',
                division: 'Course',
                title: 'International Platform',
                createdDate: '11-09-2023 7:08',
                updatedDate: '11-09-2023 7:08' 
            },
            {
                id: 35,
                company: 'Alura',
                division: 'Course',
                title: 'Internacional Platform',
                createdDate: '11-09-2023 7:08',
                updatedDate: '11-09-2023 7:08' 
            },     
            {
                id: 36,
                company: 'Khan Academy',
                division: 'Math',
                title: 'Internacional Platform',
                createdDate: '11-09-2023 7:08',
                updatedDate: '11-09-2023 7:08' 
            },
            {
                id: 37,
                company: 'Stack Overflow',
                division: 'Open Problem',
                title: 'Platform',
                createdDate: '11-09-2023 7:08',
                updatedDate: '11-09-2023 7:08' 
            },
            {
                id: 38,
                company: '4ch',
                division: 'Platform',
                title: 'Yukihiro',
                createdDate: '11-09-2023 7:08',
                updatedDate: '11-09-2023 7:08' 
            },
            {
                id: 39,
                company: 'Twitter',
                division: 'Social Network',
                title: 'Entertainment',
                createdDate: '11-09-2023 7:08',
                updatedDate: '11-09-2023 7:08' 
            },
            {
                id: 40,
                company: 'Instagram',
                division: 'Social Network',
                title: 'Entertainment',
                createdDate: '11-09-2023 7:08',
                updatedDate: '11-09-2023 7:08' 
            }
        ],
        nameRows: {
            id: '#',
            company: 'Company Name',
            division: 'Division',
            title: 'Title',
            createdDate: 'Created Date',
            updatedDate: 'Updated Date'
        },
        listNameColumn:[
            {label: 'id', value: '#'},
            {label: 'company', value: 'Company Name'},
            {label: 'division', value: 'Division'},
            {label: 'title', value: 'Title'},
            {label: 'createdDate', value: 'Created Date'},
            {label: 'updatedDate', value: 'Updated Date'}
        ],
        searchValue: '',
        whichColumn: 'id'
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
        this.setState({ whichColumn: nameColumn.target.value });
    }

    fixedHeaderContent = () => {
        return (
          <TableRow>
            {columns.map((column) => (
              <TableCell
                key={column.dataKey}
                variant="head"
                align={'center'}
                style={{ width: column.width }}
                sx={{
                  backgroundColor: 'background.paper',
                }}
              >
                {column.label}
              </TableCell>
            ))}
          </TableRow>
        );
      }
      rowContent = (_index, row) => {
        return (
          <React.Fragment>
            {columns.map((column) => (
                (row.id%2 === 1) ?
                <TableCell
                    key={column.dataKey}
                    align={'center'}
                    className="css-34nofg-MuiTableRow-root-Pair"
                >
                    {row[column.dataKey]}
                </TableCell>
                :
                <TableCell
                    key={column.dataKey}
                    align={'center'}
                >
                    {row[column.dataKey]}
                </TableCell>
            ))}
          </React.Fragment>
        );
      }

    render() {

        const { listData, searchValue, whichColumn, nameRows, listNameColumn } = this.state;

        return (
            <body className="bodyContentbetPage">
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
                    <div>
                        <span className="chooseColumn">Select a Column</span>
                        <select className="selectionColumn" onChange={this.handleClick}>
                            {listNameColumn.map((columnName) => (
                               <option key={columnName.label} value={columnName.label}>{columnName.value}</option> 
                            ))}
                        </select>
                    </div>
                    <p className="selectedColumn">Column <b className="nameColumn">{ nameRows[whichColumn] }</b> selected</p>
                    <Paper style={{ height: 630, width: '100%' }}>
                        <TableVirtuoso
                            data={listData}
                            components={VirtuosoTableComponents}
                            fixedHeaderContent={this.fixedHeaderContent}
                            itemContent={this.rowContent}
                        />
                    </Paper>
                </div>
            </body>
          );
    }
}
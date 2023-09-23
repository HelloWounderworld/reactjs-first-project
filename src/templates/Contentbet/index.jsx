import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { ContentListbet } from '../../components/ContentListbet';
import { TableVirtuoso } from 'react-virtuoso';

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

function fixedHeaderContent() {
  return (
    <TableRow>
      {columns.map((column) => (
        <TableCell
          key={column.dataKey}
          variant="head"
        //   align={column.numeric || false ? 'right' : 'left'}
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

function rowContent(_index, row) {
  return (
    <React.Fragment>
      {columns.map((column) => (
        <TableCell
            key={column.dataKey}
        //   align={column.numeric || false ? 'right' : 'left'}
            align={'center'}
        >
          {row[column.dataKey]}
        </TableCell>
      ))}
      {/* <ContentListbet /> */}
    </React.Fragment>
  );
}

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

    render() {

        const { listData, searchValue, whichColumn, nameRows } = this.state;

        return (
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
                <Paper style={{ height: 400, width: '100%' }}>
                    <TableVirtuoso
                        data={listData}
                        components={VirtuosoTableComponents}
                        fixedHeaderContent={fixedHeaderContent}
                        itemContent={rowContent}
                    />
                </Paper>
            </div>
          );
    }
}
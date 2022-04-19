import * as React from 'react';
// import { DataGrid, GridToolbar } from '@mui/x-data-grid';

import DataTable from 'react-data-table-component';
import { Button } from '@mui/material';
// import { useDemoData } from '@mui/x-data-grid-generator';

const VISIBLE_FIELDS = ['name', 'branch', 'semister', 'year', 'file','approve'];

// const columns = [
//   { field: 'id', headerName: 'ID', width: 90 },
//   {
//     field: 'name',
//     headerName: 'File Name',
//     width: 150,
//     editable: true,
//   },
//   {
//     field: 'branch',
//     headerName: 'Branch',
//     width: 150,
//     editable: true,
//   },
//   {
//     field: 'semister',
//     headerName: 'Semister',
//     type: 'number',
//     width: 110,
//     editable: true,
//   },
//   {
//     field: 'year',
//     headerName: 'Year',
//     type: 'number',
//     width: 110,
//     editable: true,
//   },
//   {
//     field: 'file',
//     headerName: 'File',
//     width: 110,
//     editable: true,
//   },
//   {
//     field: 'approved',
//     headerName: 'Approve/Reject',
//     width: 110,
//     editable: true,
//   },

  
// ];
const columns = [
  {
      name: 'Title',
      selector: row => row.title,
      sortable: true,
  },
  {
      name: 'Branch',
      selector: row => row.branch,
      sortable: true,
  },
  {
      name: 'Year',
      selector: row => row.year,
      sortable: true,
  },
  {
      name: 'Semister',
      selector: row => row.semister,
      sortable: true,
  },
  {
      name: 'File',
      selector: row => row.file,
  },
  {
      name: 'Approved',
      selector: row => row.approved,
  },

];

// const data = [
//   {
//       id: 1,
//       title: 'Beetlejuice',
//       year: '1988',
//   },
//   {
//       id: 2,
//       title: 'Ghostbusters',
//       year: '1984',
//   },
// ]
export default function ApproveFile() {
  const  data  = [
    { id:1,
      title:"HiisAdminbjul",
      branch:"asss",
      semister:2,
      year:2,
      file:<Button>File</Button>,
      approved:<><Button>Approve</Button></>

  },
    { id:2,
      title:"HiisAdminbjul",
      branch:"asss",
      semister:2,
      year:2,
      file:<Button>File</Button>,
      approved:<><Button>Approve</Button></>

  },
] 


  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataTable data={data} columns={columns} />
    </div>
  );
}
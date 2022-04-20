import { useState } from "react";
// import { DataGrid, GridToolbar } from '@mui/x-data-grid';

import DataTable from "react-data-table-component";
import { Button, CircularProgress } from "@mui/material";
import axios from "axios";
import baseApi, { localUrl, prodUrl } from "../config";
import { useEffect } from "react";

import ArticleIcon from "@mui/icons-material/Article";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import CancelIcon from "@mui/icons-material/Cancel";
import PreviewIcon from "@mui/icons-material/Preview";
import Swal from "sweetalert2";
// import { useDemoData } from '@mui/x-data-grid-generator';

const VISIBLE_FIELDS = [
    "name",
    "branch",
    "semister",
    "year",
    "file",
    "approve",
];

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
    const [data, setData] = useState();
    const [isChanged, setIsChanged] = useState(false);
    const handleApprove = async (id, isApproved) => {
        const headers = {
            Authorization: "Bearer my-token",
            "My-Custom-Header": "foobar",
        };
        const data = {
            id: id,
            isApproved,
        };

        try {
            const res = await fetch(`${prodUrl}/admin/file`, {
                method: "PUT",
                headers: {
                    authToken:
                        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjIzZTBjNmRkMTY2OGVkYzQ4N2NkMjA5IiwidHlwZSI6IkFETUlOIn0sImlhdCI6MTY1MDM4OTI0Mn0.riEresLX0S-0o7vsF_82Xc-t1Bimf4GDqwCgyK_PlTQ",
                    "Content-Type": "application/json; charset=utf-8",
                },
                body: JSON.stringify(data),
            });
            console.log(res);
            if (res.status === 200) {
                Swal.fire(
                    `${isApproved ? "Approved" : "Rejected"}`,
                    `This paper is ${isApproved ? "Approved" : "Rejected"}`,
                    "success"
                );
            }
            setIsChanged(!isChanged);
        } catch (error) {
            console.log(error);
            Swal.fire("Unsuccessfull", "Something went wrong", "error");
        }
    };
    const columns = [
        {
            name: "User",
            selector: (row) => row.createdBy,
            sortable: true,
        },
        {
            name: "Branch",
            selector: (row) => row.branch,
            sortable: true,
            wrap:true
        },
        {
            name: "Year and Branch",
            selector: (row) => row.year,
            sortable: true,
        },

        {
            name: "Is Approved",
            selector: (row) => row.isApproved,
            sortable: true,
        },
        {
            name: "Action",
            selector: (row) => row.approved,
            cell: (row: { _id: any }) => (
                <>
                    <a target='_blank' href={row.file}>
                        <Button variant='contained'>
                            <PreviewIcon />
                        </Button>
                    </a>
                    <Button
                        color='success'
                        variant='contained'
                        onClick={() => handleApprove(row._id, true)}
                        className='btn btn-primary'
                        disabled={row.approved}>
                        <CheckCircleOutlineIcon />
                    </Button>
                    {"     "}
                    <Button
                        color='error'
                        variant='contained'
                        onClick={() => handleApprove(row._id, false)}
                        className='btn btn-danger'
                        disabled={row.approved === false}>
                        <CancelIcon />
                    </Button>
                </>
            ),

            ignoreRowClick: true,
            allowOverflow: true,
            button: true,
        },
    ];

    useEffect(() => {
        const getFiles = async () => {
            const res = await baseApi.get("/admin/files", {
                headers: {
                    authToken:
                        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjIzZTBjNmRkMTY2OGVkYzQ4N2NkMjA5IiwidHlwZSI6IkFETUlOIn0sImlhdCI6MTY1MDM4OTI0Mn0.riEresLX0S-0o7vsF_82Xc-t1Bimf4GDqwCgyK_PlTQ",
                    "Content-Type": "application/json; charset=utf-8",
                },
            });
            // setData(res.data);
            console.log(res);
            const tempData = [];
            res.data.map((file) => {
                const tempFile = {
                    _id: file._id,
                    createdBy: file.createdBy,
                    branch: file.branch,
                    semester: file.semester,
                    year: 'Year:'+file.year+', Semester:'+file.semester,
                    approved: file.approved,
                    file: file.file,
                    isApproved: (
                        <>
                            {file.approved === true ? (
                                <Button variant='contained' color='success'>
                                    Approved
                                </Button>
                            ) : file.approved === false ? (
                                <Button variant='contained' color='error'>
                                    Rejected
                                </Button>
                            ) : (
                                <Button variant='contained' color='warning'>
                                    Not responded
                                </Button>
                            )}
                        </>
                    ),
                };
                tempData.push(tempFile);
            });
            setData(tempData);
        };
        getFiles();
    }, [isChanged]);
    // useEffect(() => {}, [data]);

    return (
        <div style={{ height: "100vh", width: "100%" }}>
            {data ? (
                <DataTable data={data} columns={columns} />
            ) : (
                <CircularProgress />
            )}
        </div>
    );
}

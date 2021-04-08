import React, { useState } from 'react';
import { Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { AgGridReact} from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';
import useData from '../../Data';

const useStyles = makeStyles(theme => ({
    grid: {
        marginTop: theme.spacing(5),
    },
}));

const Users = () => {

    const {data, loading} = useData('https://jsonplaceholder.typicode.com/users');
    let [columnDefs, setColumnDefs] = useState([{
        headerName: "ID", field:"id", sortable: true, filter: true
    },{
        headerName: "Name", field:"name", sortable: true, filter: true
    },{
        headerName: "User Name", field:"username", sortable: true, filter: true
    },{
        headerName: "City", field:"address.city", sortable: true, filter: true
    },{
        headerName: "Zip", field:"address.zipcode", sortable: true, filter: true
    }, {
        headerName: "Email", field:"email", sortable: true, filter: true
    },{
        headerName: "Phone Number", field:"phone", sortable: true, filter: true
    },]);
    const classes = useStyles();

    return (
        <Container>
            {
                loading? 'loading...':
                <div className={classes.grid}>
                <div className={"ag-theme-balham"} 
                    style={{height: '300px'}}>
                    <AgGridReact rowHeight="40" 
                        columnDefs={columnDefs}
                        rowData={data}></AgGridReact>
                </div>    
                </div>
            }            
        </Container>
    )
}

export default Users;
import React from 'react';
import { Container } from '@material-ui/core';
import { AgGridReact} from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';

class Users extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            columnDefs: [{
                headerName: "ID", field:"id", sortable: true, filter: true
            },{
                headerName: "First Name", field:"first", sortable: true, filter: true
            }, {
                headerName: "Last Name", field:"last", sortable: true, filter: true
            }, {
                headerName: "Updated", field:"updated"
            }],
            rowData: [{
                id: "sjfhd2343hflsdk", first: "Tom", last: "Smith", updated: "4/9/2020"
            }, {
                id: "jdjfhdf8r3r34rf", first: "Billy", last: "Jones", updated: "4/9/2020"
            }, {
                id: "edfenjknksjdfns", first: "Chris", last: "Johnson", updated: "4/9/2020"
            }]
        }
    }

    render() {
        return (
            <Container>
                <div className={"ag-theme-balham"} 
                    style={{height: '300px'}}>
                    <AgGridReact rowHeight="40" 
                        columnDefs={this.state.columnDefs}
                        rowData={this.state.rowData}></AgGridReact>
                </div>                
            </Container>
        )
    }
}

export default Users;
import React, { Component } from 'react'
import ReactTable from 'react-table';
import "react-table/react-table.css";

export default class UserGrid extends Component {
    constructor(){
        super();
        this.state={
            data:[
                {
                    firstName:'name1',
                    lastName:'asf',
                    age:21,
                    status:'active',
                    visits:2
                },
                {
                    firstName:'name1',
                    lastName:'asf',
                    age:21,
                    status:'active',
                    visits:2
                },
                {
                    firstName:'name1',
                    lastName:'asf',
                    age:21,
                    status:'active',
                    visits:2
                },
                {
                    firstName:'name1',
                    lastName:'asf',
                    age:21,
                    status:'active',
                    visits:2
                },
                {
                    firstName:'name1',
                    lastName:'asf',
                    age:21,
                    status:'active',
                    visits:2
                }
            ]
        }
    }
  render() {
    return (
      <div>
        <ReactTable
          data={this.state.data}
          columns={[
                {
                  Header: "First Name",
                  accessor: "firstName"
                },
                {
                  Header: "Last Name",
                  accessor: "lastName"
                },
            
                {
                  Header: "Age",
                  accessor: "age"
                },
                {
                  Header: "Status",
                  accessor: "status"
                },
                {
                  Header: "Visits",
                  accessor: "visits"
                }
          ]}
          defaultPageSize={this.state.data.length}
          showPagination={false}
          filterable={true}
          className="-striped -highlight"
        />
      </div>
    )
  }
}

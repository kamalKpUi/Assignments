import React, { Component } from 'react'

export default class UserTable extends Component {
  constructor(){
    super();
    this.state = {
      data:[]
    }
  }
  componentWillReceiveProps(nextprops){
    if(nextprops.data){
      this.setState({data:nextprops.data})
    }
  }
  render() {
    var tableHeaders,tableBody;
    if(this.props.data){

  
    if(this.props.data){
      console.log(Math.floor(Math.random() * 10) + 1);
      
      var dataColumns = ['id', 'first_name','last_name', 'avatar'];
      var arrayD = [];
      arrayD.push(this.props.data);
      tableHeaders = (
          <thead>
            <tr>
                {dataColumns.map(function(column){
                    return <th>{column}</th>
                })}
            </tr>
          </thead>
      )
      tableBody = arrayD.map(function(row) {
          return(
              <tbody>
                <tr>
                    {dataColumns.map(function(column){
                        if(column === 'avatar'){
                            return <td>
                                        <a href={row[column]}>
                                            <img alt = "avatar" src={row[column]} width="40px"/>
                                        </a>
                                    </td>
                        }
                        return <td>{row[column]}</td>
                    })}
                </tr>
              </tbody>
          )
      })
    }
  }
    return (
      <div>
        <table className="table table-bordered table-hover" width="100%">
            {tableHeaders}
            {tableBody}
        </table>
      </div>
    )
  }
}

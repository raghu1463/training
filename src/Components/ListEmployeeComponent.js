import React, { Component } from 'react';
import EmployeeService from '../Services/EmployeeService';

class ListEmployeeComponent extends Component {
constructor(props)
{
    super(props)
    this.state={
        employees:[]
    }

        this.addEmployee=this.addEmployee.bind(this);
        this.deleteEmployee=this.deleteEmployee.bind(this);
        this.editEmployee=this.editEmployee.bind(this);
        this.viewEmployee=this.viewEmployee.bind(this);
        
}
componentDidMount()
{
    EmployeeService.getEmployees().then(
    (res)=>
    {
        this.setState({employees:res.data});
    });
}
addEmployee()
{
    this.props.history.push(`/add-employee`);
}
deleteEmployee(id)
{
    EmployeeService.deleteEmployee(id).then(
       res=>{
           this.setState({employees: this.state.employees.filter(employee=>employee.id!==id)});
       }
    
    );
}
editEmployee(id)
{
    this.props.history.push(`/update-employee/${id}`);
}
viewEmployee(id)
{
    this.props.history.push(`/view-employee/${id}`);
}


    render() {
        return (
            <div className='container'>
               <h2 className='text-center'>Employee List</h2> 
               <div className='row'>
               <button type="button" className="btn btn-primary" onClick={this.addEmployee}>Add Employee</button>
               </div>
               <br></br>
               <div className='row'>
               <table className="table">
               <thead className="table-dark">
               <tr>
                   <th>Employee FirstName</th>
                   <th>Employee LastName</th>
                   <th>Employee EmailID</th>
                   <th>Actions</th>
               </tr>
               </thead>
               <tbody>
                   {
                       this.state.employees.map(
                           employee=>
                           <tr key={employee.id}>
                           <td>{employee.firstName}</td>
                           <td>{employee.lastName}</td> 
                           <td>{employee.email}</td>
                           <td>
                           <button type="button" className="btn btn-success" onClick={()=>this.editEmployee(employee.id)}>Update</button>&nbsp;
                           <button type="button" className="btn btn-info" onClick={()=>this.viewEmployee(employee.id)}>View</button>&nbsp;
                           <button type="button" className="btn btn-danger" onClick={()=>this.deleteEmployee(employee.id)}>Delete</button>
                           </td>
                           </tr>

                    )
                   }
    
               </tbody>
            </table>
               </div>
            </div>
        );
    }
}

export default ListEmployeeComponent;

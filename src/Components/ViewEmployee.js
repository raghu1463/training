import React, { Component } from 'react';
import EmployeeService from '../Services/EmployeeService';
class Viewemployee extends Component {
    constructor(props)
{
  super(props)

  this.state={
      id:this.props.match.params.id,
      firstName:'',
      lastName:'',
      email:''
  }

  this.changeFirstNameHandler=this.changeFirstNameHandler.bind(this);
  this.changeLastNameHandler=this.changeLastNameHandler.bind(this);
  this.changeEmailIdHandler=this.changeEmailIdHandler.bind(this);

  


  this.cancel=this.cancel.bind(this);
}
componentDidMount()
    {
       EmployeeService.getEmployeeById(this.state.id).then(
           (res)=>
           {
               let employee=res.data;
               this.setState(
                   {
                       firstName:employee.firstName,
                       lastName:employee.lastName,
                       email:employee.email
                   }
               );
           }
       )
    }
    viewEmployee=(e)=>
    {
        e.preventDefault();
        let employee={
            firstName:this.state.firstName,
            lastName:this.state.lastName,
            email:this.state.email
        };
        console.log('employee=>'+JSON.stringify(employee));
        EmployeeService.viewEmployee(employee,this.state.id).then(
            res=>
            {
                this.props.history.push(`/employees`);
            }
        );
    }


cancel()
{
  this.props.history.push(`/employees`);

}

changeFirstNameHandler=(event)=>
{
    this.setState({firstName:event.target.value});
}
changeLastNameHandler=(event)=>
{
    this.setState({lastName:event.target.value});
}
changeEmailIdHandler=(event)=>
{
    this.setState({email:event.target.value});
}
    render() {
        return (
            <div>
            <div className='container'>
            <div className="card">
        <div className="card-header text-center">
            View Employee Details
        </div>
        <div className="card-body">
          <form>
              <div className='form-group'>
              <input placeholder='First Name' name='firstName' className='form-control'
                 value={this.state.firstName} onChange={this.changeFirstNameHandler}
              />
              </div>
              <br></br>
              <div className='form-group'>
              <input placeholder='Last Name' name='lastName' className='form-control'
                 value={this.state.lastName} onChange={this.changeLastNameHandler}
              />
              </div>
              <br></br>
              <div className='form-group'>
              <input placeholder='Email-ID' name='email' className='form-control'
                value={this.state.email} onChange={this.changeEmailIdHandler}
              />
              </div>
              <br></br>
              
              <button type="button" className="btn btn-danger" onClick={this.cancel}>Home</button>&nbsp;


          </form>
        </div>
</div>
</div>
        </div>
        );
    }
}

export default Viewemployee;

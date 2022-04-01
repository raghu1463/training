import axios from 'axios';
const Employee_api_base_url="http://localhost:8080/api/employees";
class EmployeeService
{
    getEmployees()
    {
        return axios.get(Employee_api_base_url);
    }
    createEmployee(employee)
    {
        return axios.post(Employee_api_base_url,employee);
    }
    getEmployeeById(employeeId)
    {
        return axios.get(Employee_api_base_url+'/'+employeeId);
    }
    updateEmployee(employee,employeeId)
    {
        return axios.put(Employee_api_base_url+'/'+employeeId,employee);
    }
    deleteEmployee(employeeId)
    {
        return axios.delete(Employee_api_base_url+'/'+employeeId);
    }

}
export default new EmployeeService();
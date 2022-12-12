import {Component} from 'react';

class EmployeeTable extends Component {
    render() {
        const { rows } = this.props;
        console.log('rows:', rows);
        return (
            <table>
                 <tr>
                    <th>First_name </th>
                    <th>Last_name </th>
                    <th>Gender</th>
                    <th>Date of Birth </th>
                    <th>Date of Joining</th>
                    <th>Account Number </th>
                    <th>Bank Name </th>
                 </tr>
                <tbody>
                {
                    rows.map((row, ind) => {
                        return (
                            <tr key={`row-${ind}`}>
                                <td>{row.First_name}</td>
                                <td>{row.Last_name}</td>
                                <td>{row.Date_Of_birth}</td>
                                <td>{row.Date_Of_joining}</td>
                                <td>{row.bank_Account_No}</td>
                                <td>{row.Bank_Name}</td>
                                <td>{row.gender}</td>
                            </tr>
                        )
                    })
                }
                </tbody>
            </table>
        )
    }
}

export default EmployeeTable;

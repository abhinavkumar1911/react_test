import React from 'react';
import { Component } from 'react';
import './detail.css';


class UserAdd extends Component {

    constructor(props) {
        super(props);
        this.state = {
            First_name: '',
            Last_Name: '',
            gender: '',
            Date_Of_birth: '',
            Date_Of_joining: '',
            bank_Account_No: '',
            Bank_Name: '',
            
            employeelist: []
        }
    }

    UserAdd = () => {
        const{First_name,Last_Name,gender,Date_Of_birth,Date_Of_joining,bank_Account_No,Bank_Name,employeelist}=this.state;
        this.setState({
            employeelist:[
                ...employeelist,
                {
                    First_name,
                    Last_Name,
                    gender,
                    Date_Of_birth,
                    Date_Of_joining,
                    bank_Account_No,
                    Bank_Name
                     

                }
            ],
            First_name:'',
            Last_Name:'',
            gender :'',
            Date_Of_birth:'',
            Date_Of_joining:'Date',
            bank_Account_No:'Date',
            Bank_Name:'',
            
        }); 
    }

    refreshpage = () => {
        window.location.reload();
    }
   
    render() {
        console.log('call from render');
        console.log('state',this.state);
        const { employeelist } = this.state;
        return (
            //add user details 
            <div class="row">
                <div class="col-1>">
                    <div className='main'>
                        <div className="useradd-container">
                            <h1 className='header'>ENTER USER DETAILS</h1>
                           <label for="fname" className='field'>FIRST_NAME</label>
                            <input type="text" id="fname" required="yes" value={this.state.First_name}
                                onChange={(e) => this.setState({ First_name: e.target.value })} maxLength='10' /><br /><br />


                            <label for="lname" className='field'>LAST_NAME</label>
                            <input type="text" id="lname" required="yes" value={this.state.Last_Name}
                                onChange={(e) => this.setState({ Last_Name: e.target.value })} maxLength='10' /> <br /><br />

                            <label for="gender" className='field' >GENDER</label>
                            <input type="radio" value="Male" name="gender" id = "gender-Male" onChange={(e) => this.setState({ gender: e.target.value })}/> Male
                            <input type="radio" value="Female" name="gender" id = "gender-Female" onChange={(e) => this.setState({ gender: e.target.value })}/> Female
                            <input type="radio" value="Other" name="gender" id = "gender-other" onChange={(e) => this.setState({ gender: e.target.value })}/> Other

                            <br /><br />

                            <label for="birth" className='field'>DATE OF BIRTH</label>
                            <input type='date' id="dob" required="yes"onChange={(e) => this.setState({ Date_Of_birth: e.target.value })}/><br /><br />

                            <label for="join" className='field'>DATE OF JOINING</label>
                            <input type='date' id="doj" required="yes" onChange={(e) => this.setState({ Date_Of_joining: e.target.value })} /><br /><br />

                            <label for="account" className='field'>BANK ACCOUNT NO </label>
                            <input type='text' id="ban_acc" required="yes" pattern='[0]{1}[0-9]{9}' maxLength='15'
                                value={this.state.bank_Account_No} onChange={(e) => this.setState({
                                    bank_Account_No:
                                        e.target.value
                                })} /><br /><br />

                            <label for="bank_name" className='field'>BANK NAME</label>
                            <input type='text' id="ban_name" required="yes" value={this.state.value} onChange=
                                {(e) => this.setState({ Bank_Name: e.target.value })} maxLength='10' pattern='[a-z][A-Z]' /><br /><br />


                            <button className='save' id='save' type='button' onClick={this.UserAdd} > SAVE </button>
                            <button className='reset' id='reset' type='reset' onClick={this.refreshpage}> CLOSE </button>
                        </div>          
                    </div>
                </div>
                    
                <div class="col-2">
                    
                    <div className='userdisplay-container'>
                        <h1 className='header-right'>DISPLAY USER DETAILS</h1><br></br>
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
                    employeelist.map((row, ind) => {
                        return (
                            <tr key={`row-${ind}`}>
                                <td>{row.First_name}</td>
                                <td>{row.Last_Name}</td>
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

                </div></div>
                
            </div>
            
        


        )
    }


}
export default UserAdd;



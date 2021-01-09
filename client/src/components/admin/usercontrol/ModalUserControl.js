import React, { Component } from 'react'
// import ErrorNotice from '../../misc/ErrorNotice'
import '../../../assets/modal.css'
export default class ModalUserControl extends Component {
    state={
        email:"quang@gmail.com",
        password:"quang123",
        passwordCheck:"quang123",
        displayName:"quang",
        address:"1 vo van ngan",
        phoneNumber:"0939911113",
        error:undefined
    }
    handleClose=()=>{
        this.props.toggleModal()
    }

    componentDidMount(){
        if(this.props.editingUser){
            const {id,email,displayName,address,phoneNumber} =  this.props.editingUser
            console.log("MODAL EDIT")
            this.setState({
                id,
                email,
                password: "",
                passwordCheck: "",
                displayName,
                address,
                phoneNumber
            })
        }else{
            console.log("MODAL CREATE")
        }
    }

  

    componentDidUpdate(){
        console.log("MODAL=-----DID UPDATE")
    }

    componentWillUnmount(){
        console.log("MODAL=-----WILL UNMOUNT")
        this.props.clearIsEditing()
    }

    // handleChange=(event)=>{
    //     this.setState({
    //      [event.target.name]: event.target.value
    //     })
  
    //  }

    handleEmail=(event)=>{
        this.setState({
        email: event.target.value
        })
     }

     handlePassword=(event)=>{
        this.setState({
        password: event.target.value
        })
     }

     handlePasswordCheck=(event)=>{
        this.setState({
        passwordCheck: event.target.value
        })
     }

     handleDisplayName=(event)=>{
        this.setState({
        displayName: event.target.value
        })
     }

     handleAdress=(event)=>{
        this.setState({
        address: event.target.value
        })
     }

     handlePhoneNumber=(event)=>{
        this.setState({
        phoneNumber: event.target.value
        })
     }

    handleSubmit=(event)=>{
        event.preventDefault();
        const {id,email,password,passwordCheck,displayName,address,phoneNumber}=this.state
        if(this.props.editingUser){
            this.props.updateUser(id,email,password,passwordCheck,displayName,address,phoneNumber)
        }else{
            this.props.addUser(email,password,passwordCheck,displayName,address,phoneNumber)
        }
        this.props.toggleModal()

    }

    // handleError=()=>{
    //     this.setState({
    //         error:undefined
    //     })
    // }

    render() {

        const {id,email,password,passwordCheck,displayName,address,phoneNumber}=this.state
        return (
            <div className="modal">
                <div className="content p-3">
                    <button type="button" onClick={this.handleClose} className="close btn btn-outline-primary">
                        Close
                    </button>
                    <h5>{this.props.editingUser?'Update':'Create'} User</h5>
                    {/* {this.state.error && (
                        <ErrorNotice message={this.props.error} clearError={() => this.handleError(undefined)} />
                     )} */}
                    <form onSubmit={this.handleSubmit}>
                    {this.props.editingUser?(
                        <div className="form-group">
                            <label>User Email</label>
                            <input type="text" disabled style={{backgroundColor:"#gray"}} name="email" className="form-control" placeholder="User Email" value={email} onChange={this.handleEmail}/>
                        </div>):
                        (
                        <div className="form-group">
                            <label>User Email</label>
                            <input type="text" name="email" className="form-control" placeholder="User Email" value={email} onChange={this.handleEmail}/>
                        </div>
                        )}
                        <div className="form-group">
                            <label>User Password</label>
                            <input type="text" name="password" className="form-control" placeholder="User Password" value={password} onChange={this.handlePassword}/>
                        </div>
                        <div className="form-group">
                            <label>User Password Check</label>
                            <input type="text" name="passwordCheck" className="form-control" placeholder="User Password Check" value={passwordCheck} onChange={this.handlePasswordCheck}/>
                        </div>
                        <div className="form-group">
                            <label>User Display Name</label>
                            <input type="text" name="displayName" className="form-control" placeholder="User Display Name" value={displayName} onChange={this.handleDisplayName}/>
                        </div>
                        <div className="form-group">
                            <label>User Address</label>
                            <input type="text" name="address" className="form-control" placeholder="User address" value={address} onChange={this.handleAdress}/>
                        </div>
                        <div className="form-group">
                            <label>User Phone Number</label>
                            <input type="text" name="phoneNumber" className="form-control" placeholder="User phone number" value={phoneNumber} onChange={this.handlePhoneNumber}/>
                        </div>
                        <button type="submit" class="btnadmin btn-outline-primary-admin">
                            {this.props.editingUser?"UPDATE":"ADD"}
                        </button>
                    </form>
                </div>
            </div>
        )
    }
}

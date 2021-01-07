import React, { Component } from 'react'
// import ErrorNotice from '../../misc/ErrorNotice'
import '../../../assets/modal.css'
export default class ModalStaffControl extends Component {
    state={
        email:"quang@gmail.com",
        password:"quang123",
        passwordCheck:"quang123",
        displayName:"quang",
        type:"0",
        error:undefined
    }
    handleClose=()=>{
        this.props.toggleModal()
    }

    componentDidMount(){
        if(this.props.editingAdmin){
            const {id,email,password,passwordCheck,displayName,type} =  this.props.editingAdmin
            console.log("MODAL EDIT")
            this.setState({
                id,
                email,
                password,
                passwordCheck,
                displayName,
                type
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

     handleType=(event)=>{
        this.setState({
        type: event.target.value
        })
     }

    handleSubmit=(event)=>{
        event.preventDefault();
        const {id,email,password,passwordCheck,displayName,type}=this.state
        if(this.props.editingAdmin){
            this.props.updateAdmin(id,email,password,passwordCheck,displayName,type)
        }else{
            JSON.stringify(type)
            this.props.addAdmin(email,password,passwordCheck,displayName,type)
        }
        this.props.toggleModal()

    }

    // handleError=()=>{
    //     this.setState({
    //         error:undefined
    //     })
    // }

    render() {

        const {id,email,password,passwordCheck,displayName,type}=this.state
        return (
            <div className="modal">
                <div className="content p-3">
                    <button type="button" onClick={this.handleClose} className="close btn btn-outline-primary">
                        Close
                    </button>
                    <h5>{this.props.editingAdmin?'Update':'Create'} Admin</h5>
                    {/* {this.state.error && (
                        <ErrorNotice message={this.props.error} clearError={() => this.handleError(undefined)} />
                     )} */}
                    <form onSubmit={this.handleSubmit}>
                        <div className="form-group">
                            <label>Admin Email</label>
                            <input type="text" name="email" className="form-control" placeholder="Admin Email" value={email} onChange={this.handleEmail}/>
                        </div>
                        <div className="form-group">
                            <label>Admin Password</label>
                            <input type="text" name="password" className="form-control" placeholder="Admin Password" value={password} onChange={this.handlePassword}/>
                        </div>
                        <div className="form-group">
                            <label>Admin Password Check</label>
                            <input type="text" name="passwordCheck" className="form-control" placeholder="Admin Password" value={passwordCheck} onChange={this.handlePasswordCheck}/>
                        </div>
                        <div className="form-group">
                            <label>Admin Display Name</label>
                            <input type="text" name="displayName" className="form-control" placeholder="Admin Display Name" value={displayName} onChange={this.handleDisplayName}/>
                        </div>
                        <div className="form-group">
                            <label>Admin Type</label>
                            <input type="text" min="0" max="1" name="type" className="form-control" placeholder="Admin type" value={type} onChange={this.handleType}/>
                        </div>
                        <button type="submit" class="btnadmin btn-outline-primary-admin">
                            {this.props.editingAdmin?"UPDATE":"ADD"}
                        </button>
                    </form>
                </div>
            </div>
        )
    }
}

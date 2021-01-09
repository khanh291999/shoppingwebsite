import React from 'react'
import ContentHeaderUserControl from './ContentHeaderUserControl'
import {EmptyUserControl} from './EmptyUserControl'
import ModalUserControl from './ModalUserControl'
import ProductRowUserControl from './ProductRowUserControl'
import axios from 'axios';
import Swal from 'sweetalert2'
import ErrorNotice from '../../misc/ErrorNotice'
export default class MainContentUserControl extends React.Component{
    state={
        open:false,
        users : [
            
        ],
        isEditting:undefined, //index
        error:undefined
    }

    componentDidMount(){
        this.getData();
    }

    componentWillUnmount() {
        clearTimeout(this.intervalID);
      }

    getData = () =>{
        axios.get("http://localhost:8080/user").then(res=>{
            console.log(res);
            this.setState({
                users: res.data
            })
        })
        this.intervalID = setTimeout(this.getData.bind(this), 5000);
    }

    addUser= async(email, password, passwordCheck, displayName, address, phoneNumber )=>{
        try {
          await axios.post("http://localhost:8080/users/adduser", {
            email,
            password,
            passwordCheck,
            displayName,
            address,
            phoneNumber
          });
          Swal.fire({
                    title:"Create Successfully",
                    timer:1000,
                    icon:'success'
                })
          console.log("ResponseRegister");
        } catch (err) {
          err.response.data.msg && this.setState({error:err.response.data.msg});
        }
    }

    updateUser = async (id,email,password,passwordCheck,displayName,address , phoneNumber) => {
        try {
            await axios.patch(`http://localhost:8080/users/updateuser/${id}`, {
              email,
              password,
              passwordCheck,
              displayName,
              address,
              phoneNumber
            });
            Swal.fire({
                      title:"Update Successfully",
                      timer:1000,
                      icon:'success'
                  })
            console.log("ResponseRegister");
          } catch (err) {
            Swal.fire({
                title:"Update Unsuccessfully",
                text:err.message,
                timer:1000,
                icon:'error'
            })
            err.response.data.msg && this.setState({error:err.response.data.msg});
          }
    }

    deleteUser = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: 'You will not be able to recover this product !',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, Deleted it!',
            cancelButtonText: 'No, keep it'
          }).then((result) => {
            if (result.value) {
                axios.delete(`http://localhost:8080/user/${id}`,{
                    id
                   },{
                       headers:{
                           token: window.localStorage.getItem('admin_token')
                       }
                   })
              Swal.fire(
                'Deleted!',
                'Your product has been deleted.',
                'success'
              )
            } else if (result.dismiss === Swal.DismissReason.cancel) {
              Swal.fire(
                'Cancelled',
                'Your prodct is safe :)',
                'error'
              )
            }
          })
        .then(res=>{
            console.log(res)
        }).catch(err=>{
            console.log(err);
            Swal.fire({
                title:"Delete Unsuccessfully",
                text:err.message,
                timer:1000,
                icon:'error'
            })
        })
    }

    updateIsEditting = (id) => {
        const user_index = this.state.users.findIndex((user)=>{
            return user.id === id
        })
        this.setState({
            isEditting:user_index
        })
        this.toggleModal();
    }

    toggleModal=()=>{
        this.setState({
            open:!this.state.open
        })
    }

    clearIsEditing = () => {
        this.setState({
            isEditting:undefined
        })
    }

    handleError=()=>{
        this.setState({
            error:undefined
        })
    }

    render(){
        return  <>
        <main>
                <ContentHeaderUserControl toggleModal={this.toggleModal} addUser={this.addUser}/>    
                {this.state.error && (
                        <ErrorNotice message={this.state.error} clearError={() => this.handleError(undefined)} />
                     )}
                <div className="content-table">
                    <div className="table-headers">
                        <div className="table-header">
                            Email
                        </div>
                        <div className="table-header">
                            Password
                        </div>
                        <div className="table-header">
                            Display Name
                        </div>
                        <div className="table-header">
                            Address
                        </div>
                        <div className="table-header">
                            Phone number
                        </div>
                        <div className="table-header">
                            Action
                        </div>
                    </div>
                    {
                        this.state.users.length>0?
                        this.state.users.map((user)=>{
                            return <ProductRowUserControl updateIsEditting={this.updateIsEditting}  deleteUser={this.deleteUser}  key={`user_id_${user.id}`} user={user}/>
                        })
                        :<EmptyUserControl/>
                    }
                </div>
            </main>
            {
                this.state.open?<ModalUserControl updateUser={this.updateUser} clearIsEditing={this.clearIsEditing} editingUser={this.state.users[this.state.isEditting]} addUser={this.addUser} toggleModal={this.toggleModal} error={this.state.error}/>:''
            }
        </>
    }
}
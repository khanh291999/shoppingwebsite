import React from 'react'
import ContentHeaderStaffControl from './ContentHeaderStaffControl'
import '../../../assets/adminstaffcontrol.css'
import {Empty} from '../Empty'
import ModalStaffControl from './ModalStaffControl'
import ProductRowStaffControl from './ProductRowStaffControl'
import axios from 'axios';
import Swal from 'sweetalert2'
import ErrorNotice from '../../misc/ErrorNotice'
export default class MainContentStaffControl extends React.Component{
    state={
        open:false,
        admins : [
            
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
        axios.get("http://localhost:8080/admin").then(res=>{
            console.log(res);
            this.setState({
                admins: res.data
            })
        })
        this.intervalID = setTimeout(this.getData.bind(this), 5000);
    }

    addAdmin= async(email, password, passwordCheck, displayName, type )=>{
        try {
          await axios.post("http://localhost:8080/admins/addadmin", {
            email,
            password,
            passwordCheck,
            displayName,
            type,
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

    updateAdmin = async (id,email,password,passwordCheck,displayName,type) => {
        try {
            await axios.patch(`http://localhost:8080/admins/updateadmin/${id}`, {
              email,
              password,
              passwordCheck,
              displayName,
              type,
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

    deleteAdmin = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: 'You will not be able to recover this product !',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, Deleted it!',
            cancelButtonText: 'No, keep it'
          }).then((result) => {
            if (result.value) {
                axios.delete(`http://localhost:8080/admin/${id}`,{
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
        const admin_index = this.state.admins.findIndex((admin)=>{
            return admin.id === id
        })
        this.setState({
            isEditting:admin_index
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
        <main className='content'>
                <ContentHeaderStaffControl toggleModal={this.toggleModal} addAdmin={this.addAdmin}/>    
                {this.state.error && (
                        <ErrorNotice message={this.state.error} clearError={() => this.handleError(undefined)} />
                     )}
                <div className="content-table">
                    <div className="table-headers">
                        <div className="table-header">
                            Display Name
                        </div>
                        <div className="table-header">
                            Password
                        </div>
                        <div className="table-header">
                            Email
                        </div>
                        <div className="table-header">
                            Type
                        </div>
                        <div className="table-header" style={{justifySelf:'center'}}>
                            Action
                        </div>
                    </div>
                    {
                        this.state.admins.length>0?
                        this.state.admins.map((admin)=>{
                            return <ProductRowStaffControl updateIsEditting={this.updateIsEditting}  deleteAdmin={this.deleteAdmin}  key={`admin_id_${admin.id}`} admin={admin}/>
                        })
                        :<Empty/>
                    }
                </div>
            </main>
            {
                this.state.open?<ModalStaffControl updateAdmin={this.updateAdmin} clearIsEditing={this.clearIsEditing} editingAdmin={this.state.admins[this.state.isEditting]} addAdmin={this.addAdmin} toggleModal={this.toggleModal} error={this.state.error}/>:''
            }
        </>
    }
}
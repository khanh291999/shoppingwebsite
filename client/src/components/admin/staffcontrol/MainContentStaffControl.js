import React from 'react'
import ContentHeaderStaffControl from './ContentHeaderStaffControl'
import {EmptyStaffControl} from './EmptyStaffControl'
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
        // axios.post('http://localhost:8080/admin',{
        //     name,
        //     image,
        //     price,
        //     size
        // },{
        //     headers:{
        //         token: window.localStorage.getItem('admin_token')
        //     }
        // })
        // .then(res=>{
        //     console.log(res)
        //     Swal.fire({
        //         title:"Create Successfully",
        //         timer:1000,
        //         icon:'success'
        //     })
        // }).catch(err=>{
        //     console.log(err);
        //     Swal.fire({
        //         title:"Create Unsuccessfully",
        //         text:err.message,
        //         timer:1000,
        //         icon:'error'
        //     })
        // })
        // this.e.preventDefault();
        try {
        //   const newAdmin = { email, password, passwordCheck, displayName, type };
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

    updateAdmin = (id,name,image,price) => {
        axios.patch(`http://localhost:8080/admin/${id}`,{
            name,
            image,
            price
        },{
            headers:{
                token: window.localStorage.getItem('admin_token')
            }
        }).then(res=>{
            console.log(res)
            this.setState({
                name: +name,
                price:+price,
                image:+image
            })
            Swal.fire({
                title:"Edit Successfully",
                timer:1000,
                icon:'success'
            })
        }).catch(err=>{
            console.log(err);
            Swal.fire({
                title:"Edit Unsuccessfully",
                text:err.message,
                timer:1000,
                icon:'error'
            })
        })
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
        <main>
                <ContentHeaderStaffControl toggleModal={this.toggleModal} addAdmin={this.addAdmin}/>    
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
                            Type
                        </div>
                        <div className="table-header">
                            Action
                        </div>
                    </div>
                    {
                        this.state.admins.length>0?
                        this.state.admins.map((admin)=>{
                            return <ProductRowStaffControl updateIsEditting={this.updateIsEditting}  deleteAdmin={this.deleteAdmin}  key={`admin_id_${admin.id}`} admin={admin}/>
                        })
                        :<EmptyStaffControl/>
                    }
                </div>
            </main>
            {
                this.state.open?<ModalStaffControl updateAdmin={this.updateAdmin} clearIsEditing={this.clearIsEditing} editingAdmin={this.state.admins[this.state.isEditting]} addAdmin={this.addAdmin} toggleModal={this.toggleModal} error={this.state.error}/>:''
            }
        </>
    }
}
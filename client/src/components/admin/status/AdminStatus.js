import React, {Component} from "react"
import axios from "axios"
import AdminStatusRow from "./AdminStatusRow"
import {AdminEmptyStatus} from "./AdminEmptyStatus"
import '../../../assets/adminstatus.css'
import Swal from 'sweetalert2'

export default class AdminStatus extends Component{
    state={
        products:[],
    }
    componentDidMount(){
        axios.get("http://localhost:8080/cart").then(res=>{
            this.setState({
                products:res.data
             })
            })
            .catch(e=>{
                console.log(e)
            })
      }

      updateStatusWaiting = (id,status) => {
        axios.patch(`http://localhost:8080/cart/${id}`,{
           status
        },{
            headers:{
                token: window.localStorage.getItem('admin_token')
            }
        }).then(res=>{
            console.log(res)
            Swal.fire({
                title:"Change Status To Waiting to Confirm Successfully",
                timer:1000,
                icon:'success'
            })
        }).catch(err=>{
            console.log(err);
            Swal.fire({
                title:"Change Status To Delivering Unsuccessfully",
                text:err.message,
                timer:1000,
                icon:'error'
            })
        })
    }

      updateStatusDelivering = (id,status) => {
        axios.patch(`http://localhost:8080/cart/${id}`,{
           status
        },{
            headers:{
                token: window.localStorage.getItem('admin_token')
            }
        }).then(res=>{
            console.log(res)
            Swal.fire({
                title:"Change Status To Delivering Successfully",
                timer:1000,
                icon:'success'
            })
        }).catch(err=>{
            console.log(err);
            Swal.fire({
                title:"Change Status To Delivering Unsuccessfully",
                text:err.message,
                timer:1000,
                icon:'error'
            })
        })
    }

    updateStatusDone = (id,status) => {
        axios.patch(`http://localhost:8080/cart/${id}`,{
           status
        },{
            headers:{
                token: window.localStorage.getItem('admin_token')
            }
        }).then(res=>{
            console.log(res)
            Swal.fire({
                title:"Change Status To Delivering Successfully",
                timer:1000,
                icon:'success'
            })
        }).catch(err=>{
            console.log(err);
            Swal.fire({
                title:"Change Status To Delivering Unsuccessfully",
                text:err.message,
                timer:1000,
                icon:'error'
            })
        })
    }


      render(){
          return(
              <>
            {                 
                this.state.products.length >0?
                this.state.products.slice(0).reverse().map((product)=>{
                    return   (
                        <div className="order">
                    <AdminStatusRow updateStatusWaiting={this.updateStatusWaiting} updateStatusDelivering={this.updateStatusDelivering} updateStatusDone={this.updateStatusDone}  key={`product_id_${product.id}`} productss={product}/>
                    </div>
                    )
                })
                :<AdminEmptyStatus/>
            }
              </>
          )
      }
}
      


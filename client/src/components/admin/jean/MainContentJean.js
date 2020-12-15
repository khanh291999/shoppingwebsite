import React from 'react'
import ContentHeaderJean from './ContentHeaderJean'
import {EmptyJean} from './EmptyJean'
import ModalJean from './ModalJean'
import ProductRowJean from './ProductRowJean'
import axios from 'axios';
import Swal from 'sweetalert2'
export default class MainContentJean extends React.Component{
    state={
        open:false,
        products : [
            
        ],
        isEditting:undefined //index
    }

    componentDidMount(){
        console.log("DIDMOUNT")
        // fetch("http://localhost:9696/products")
        axios.get("http://localhost:8080/jean").then(res=>{
            console.log(res);
            this.setState({
                products:res.data
            })
        })
    }

    addProduct=(name,image,price)=>{
        axios.post('http://localhost:8080/jean',{
            name,
            image,
            price
        },{
            headers:{
                token: window.localStorage.getItem('admin_token')
            }
        })
        .then(res=>{
            console.log(res)
            Swal.fire({
                title:"Create Successfully",
                timer:1000,
                icon:'success'
            })
        }).catch(err=>{
            console.log(err);
            Swal.fire({
                title:"Create Unsuccessfully",
                text:err.message,
                timer:1000,
                icon:'error'
            })
        })

    }

    updateProduct = (id,name,image,price) => {
        axios.patch(`http://localhost:8080/jean/${id}`,{
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

    deleteProduct = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: 'You will not be able to recover this product file!',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'No, keep it'
          }).then((result) => {
            if (result.value) {
                axios.delete(`http://localhost:8080/jean/${id}`,{
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
        const product_index = this.state.products.findIndex((product)=>{
            return product.id === id
        })
        this.setState({
            isEditting:product_index
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

    render(){
        return  <>
        <main>
                <ContentHeaderJean toggleModal={this.toggleModal} addProduct={this.addProduct}/>    
                <div className="content-table">
                    <div className="table-headers">
                        <div className="table-header">
                            Id
                        </div>
                        <div className="table-header">
                            Name
                        </div>
                        <div className="table-header">
                            Price
                        </div>
                        <div className="table-header">
                            Image
                        </div>
                        <div className="table-header">
                            Action
                        </div>
                    </div>
                    {
                        this.state.products.length>0?
                        this.state.products.map((product)=>{
                            return <ProductRowJean updateIsEditting={this.updateIsEditting}  deleteProduct={this.deleteProduct} key={`product_id_${product.id}`} product={product}/>
                        })
                        :<EmptyJean/>
                    }
                </div>
            </main>
            {
                this.state.open?<ModalJean updateProduct={this.updateProduct} clearIsEditing={this.clearIsEditing} editingProduct={this.state.products[this.state.isEditting]} addProduct={this.addProduct} toggleModal={this.toggleModal}/>:''
            }
        </>
    }
}
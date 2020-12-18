import React from 'react'
import {EmptyDisableJean} from './EmptyDisableJean'
import ProductRowDisableJean from './ProductRowDisableJean'
import axios from 'axios';
import Swal from 'sweetalert2'
export default class MainContentDisableJean extends React.Component{
    state={
        open:false,
        products : [
            
        ],
        isEditting:undefined //index
    }

    componentDidMount(){
        console.log("DIDMOUNT")
        // fetch("http://localhost:9696/products")
        axios.get("http://localhost:8080/disablejean").then(res=>{
            console.log(res);
            this.setState({
                products:res.data
            })
        })
    }

    deleteDisableProduct = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: 'You will not be able to recover this!',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, On sale the product!',
            cancelButtonText: 'No, keep it'
          }).then((result) => {
            if (result.value) {
                axios.delete(`http://localhost:8080/disablejean/${id}`,{
                    id
                   },{
                       headers:{
                           token: window.localStorage.getItem('admin_token')
                       }
                   })
              Swal.fire(
                'Disable!',
                'Your product has been push On Sale.',
                'success'
              )
            } else if (result.dismiss === Swal.DismissReason.cancel) {
              Swal.fire(
                'Cancelled',
                'Your prodct is still disable :)',
                'error'
              )
            }
          })
        .then(res=>{
            console.log(res)
        }).catch(err=>{
            console.log(err);
            Swal.fire({
                title:"Disable Unsuccessfully",
                text:err.message,
                timer:1000,
                icon:'error'
            })
        })
    }

    addOnSaleProduct=(id,name,image,price,size)=>{
        axios.post('http://localhost:8080/jean',{
            id,
            name,
            image,
            price,
            size
        },{
            headers:{
                token: window.localStorage.getItem('admin_token')
            }
        }).then(res=>{
            console.log(res)
        }).catch(err=>{
            console.log(err);
        })

    }

    render(){
        return  <>
        <main> 
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
                            return <ProductRowDisableJean deleteDisableProduct={this.deleteDisableProduct} addOnSaleProduct={this.addOnSaleProduct} key={`product_id_${product.id}`} product={product}/>
                        })
                        :<EmptyDisableJean/>
                    }
                </div>
            </main>
        </>
    }
}
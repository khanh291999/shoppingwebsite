import React from 'react'
import ContentHeader from './ContentHeader'
import { Empty } from './Empty'
import Modal from './Modal'
import ProductRow from './ProductRow'
import axios from 'axios';
import Swal from 'sweetalert2'
export default class MainContent extends React.Component{
    state={
        open:false,
        products : [
            
        ],
        isEditting:undefined //index
    }

    componentDidMount(){
        console.log("DIDMOUNT")
        // fetch("http://localhost:9696/products")
        axios.get("http://localhost:8080/jacket").then(res=>{
            console.log(res);
            this.setState({
                products:res.data
            })
        })
    }

    addProduct=(name,image,price)=>{
        // const product={
        //     id:this.state.products.length,
        //     name,
        //     image,
        //     price
        // }
        // this.setState({
        //     products:[...this.state.products,product]
        // })
        axios.post('https://shopping-api-with-jwt.herokuapp.com/products',{
            name,
            image,
            price
        },{
            headers:{
                token: window.localStorage.getItem('admin_token')
            }
        }).then(res=>{
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

    updateProduct = (name,image,price) => {
        const new_products = [...this.state.products];
        new_products[this.state.isEditting]={
            ...new_products[this.state.isEditting],
            name,
            image,
            price
        }
        this.setState({
            products:new_products
        })
    }

    deleteProduct = (id) => {
        const updated_product = [...this.state.products].filter((product)=>{
            return product.id !== id
        });
        this.setState({
            products:updated_product
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
                <ContentHeader toggleModal={this.toggleModal} addProduct={this.addProduct}/>    
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
                            return <ProductRow updateIsEditting={this.updateIsEditting}  deleteProduct={this.deleteProduct} key={`product_id_${product.id}`} product={product}/>
                        })
                        :<Empty/>
                    }
                </div>
            </main>
            {
                this.state.open?<Modal updateProduct={this.updateProduct} clearIsEditing={this.clearIsEditing} editingProduct={this.state.products[this.state.isEditting]} addProduct={this.addProduct} toggleModal={this.toggleModal}/>:''
            }
        </>
    }
}
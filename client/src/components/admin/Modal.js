import React, { Component } from 'react'

export default class Modal extends Component {
    state={
        name:"PRODUCT NEW",
        price:20,
        image_one:"//bizweb.dktcdn.net/thumb/large/100/331/067/products/115844444-311743083208439-6108934669943805257-n.jpg?v=1595330674000",
        image_two:"//bizweb.dktcdn.net/thumb/large/100/331/067/products/115844444-311743083208439-6108934669943805257-n.jpg?v=1595330674000",
        image_three:"//bizweb.dktcdn.net/thumb/large/100/331/067/products/115844444-311743083208439-6108934669943805257-n.jpg?v=1595330674000"
    
    }
    handleClose=()=>{
        this.props.toggleModal()
    }

    componentDidMount(){
        if(this.props.editingProduct){
            const {image,price,name} =  this.props.editingProduct
            console.log("MODAL EDIT")
            this.setState({
                image,
                price,
                name
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

    handleChange=(event)=>{
       this.setState({
        [event.target.name]: event.target.value
       })
 
    }

    handleSubmit=(event)=>{
        event.preventDefault();
        const {name,price,image_one,image_three,image_two}=this.state
        const image =[image_one,image_two,image_three]
        if(this.props.editingProduct){
            this.props.updateProduct(name,image,price)
        }else{
            this.props.addProduct(name,image,price)
        }

        this.props.toggleModal()

    }

    render() {

        const {name,price,image_one,image_two,image_three}=this.state
        return (
            <div className="modal ">
                <div className="content p-3">
                    <button type="button" onClick={this.handleClose} className="close btn btn-outline-primary">
                        Close
                    </button>
                    <h5>{this.props.editingProduct?'Update':'Create'} Product</h5>
                    <form onSubmit={this.handleSubmit}>
                        <div className="form-group">
                            <label>Product Name</label>
                            <input type="text" name="name" className="form-control" placeholder="Product name" value={name} onChange={this.handleChange}/>
                        </div>
                        <div className="form-group">
                            <label>Product Price</label>
                            <input type="number" name="price" className="form-control" placeholder="Product price" value={price} onChange={this.handleChange}/>
                        </div>
                        <div className="form-group">
                            <label>Product Image</label>
                            <input type="text" name="image_one" className="form-control" placeholder="Product image" value={image_one} onChange={this.handleChange}/>
                        </div>
                        <div className="form-group">
                            <label>Product Image</label>
                            <input type="text" name="image_two" className="form-control" placeholder="Product image" value={image_two} onChange={this.handleChange}/>
                        </div>
                        <div className="form-group">
                            <label>Product Image</label>
                            <input type="text" name="image_three" className="form-control" placeholder="Product image" value={image_three} onChange={this.handleChange}/>
                        </div>
                        <button type="submit" class="btn btn-outline-primary">
                            {this.props.editingProduct?"UPDATE":"ADD"}
                        </button>
                    </form>
                </div>
            </div>
        )
    }
}

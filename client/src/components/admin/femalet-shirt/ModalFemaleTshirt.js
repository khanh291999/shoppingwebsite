import React, { Component } from 'react'
import '../../../assets/modal.css'
export default class ModalFemaleTshirt extends Component {
    state={
        name:"PRODUCT NEW",
        price:20,
        image_one:"https://www.scotch-soda.com/dw/image/v2/AANA_PRD/on/demandware.static/-/Sites-scotch-master-catalog-FW20/default/dwfd141870/images/xlarge-2D368637-7728-4094-99A7CB28FA38C2EF.png?sw=1125&strip=false&bgcolor=EDEEE5",
        image_two:"https://www.scotch-soda.com/dw/image/v2/AANA_PRD/on/demandware.static/-/Sites-scotch-master-catalog-FW20/default/dwf45da75a/images/xlarge-42521F82-ED8E-49AA-AFEC0B884601A530.png?sw=1125&strip=false&bgcolor=EDEEE5",
        image_three:"https://www.scotch-soda.com/dw/image/v2/AANA_PRD/on/demandware.static/-/Sites-scotch-master-catalog-FW20/default/dw20a50f46/images/xlarge-7492426A-F546-499C-9B549EEB85506777.png?sw=1125&strip=false&bgcolor=EDEEE5",
        helperText:""
    
    }
    handleClose=()=>{
        this.props.toggleModal()
    }

    componentDidMount(){
        if(this.props.editingProduct){
            const {image,price,name,id} =  this.props.editingProduct
            console.log("MODAL EDIT")
            this.setState({
                image,
                price,
                name,
                id
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
        [event.target.name]: event.target.value.replace(/[^\w\s]/gi, "")
       })
 
    }

    handlePrice=(event)=>{
        this.setState({
         [event.target.name]: event.target.value<0?event.target.value=0:event.target.value
        })
  
     }

    handleSubmit=(event)=>{
        event.preventDefault();
        const {id,name,price,image_one,image_three,image_two,helperText}=this.state
        const image =[image_one,image_two,image_three]
        if (name===""||price===""||image_one===""||image_two===""||image_three==="")
        {
            this.setState({
                helperText:"Field can not be empty!"
            })
        }
        else{
         if(this.props.editingProduct){
             this.props.updateProduct(id,name,image,price)
         }else{
             const size= [
                 "S",
                 "M",
                 "L",
                 "XL",
                 "XXL"
             ]
             this.props.addProduct(name,image,price,size)
         }
 
         this.props.toggleModal()
        }

    }

    render() {

        const {id,name,price,image_one,image_two,image_three}=this.state
        return (
            <div className="modal">
                <div className="content p-3">
                    <button type="button" onClick={this.handleClose} className="close btn btn-outline-primary">
                        Close
                    </button>
                    <h5>{this.props.editingProduct?'Update':'Create'} Product</h5>
                    <h5 style={{color:"red"}}>{this.state.helperText}</h5>
                    <form onSubmit={this.handleSubmit}>
                        <div className="form-group">
                            <label>Product Name</label>
                            <input type="text" name="name" className="form-control" placeholder="Product name" value={name} onChange={this.handleChange}/>
                        </div>
                        <div className="form-group">
                            <label>Product Price</label>
                            <input type="number" name="price" className="form-control" placeholder="Product price" value={price} onChange={this.handlePrice}/>
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
                        <button type="submit" class="btnadmin btn-outline-primary-admin">
                            {this.props.editingProduct?"UPDATE":"ADD"}
                        </button>
                    </form>
                </div>
            </div>
        )
    }
}

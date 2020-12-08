import React, {useContext, Component} from "react"
import axios from "axios"
import StatusRow from "./StatusRow"
import {EmptyStatus} from "./EmptyStatus"
import '../../assets/status.css'
import UserContext from "../../context/userContext"

export default class Status extends Component{
    static contextType = UserContext
    state={
        products:[],
        matchuser:[]
    }
    componentDidMount(){
        const user = this.context.userData.user;
        console.log('userrrrr',user)
        user ? (
            this.setState({
              useridcontext: user.id,
            })
              ) : (this.setState({
                useridcontext:"",
              }))
        axios.get("http://localhost:8080/cart").then(res=>{
            this.setState({
                products:res.data
             })
            })
            .catch(e=>{
                console.log(e)
            })
      }


      render(){
        const {useridcontext} = this.state
        let matchuser = this.state.products.filter( function (user) {
            return user.userid === useridcontext
          });
          return(
              <>
            <div className="content-table">
                    <div className="table-headers">
                        <div className="table-header">
                            Name
                        </div>
                        <div className="table-header">
                            Price
                        </div>
                        <div className="table-header">
                            Size
                        </div>
                        <div className="table-header">
                            Image
                        </div>
                        <div className="table-header">
                            Quantity
                        </div>
                    </div>
                </div>
                {
                        matchuser.length >0?
                        matchuser.map((product)=>{
                            return   <StatusRow  key={`product_id_${product.id}`} productss={product}/>
                        })
                        :<EmptyStatus/>
                }
              </>
          )
      }
}
      


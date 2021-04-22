import React, {Component} from "react"
import axios from "axios"
import StatusRow from "./StatusRow"
import {EmptyStatus} from "./EmptyStatus"
import '../../assets/clientstatus.css'
import UserContext from "../../context/userContext"

export default class Status extends Component{
    static contextType = UserContext
    state={
        products:[],
        matchuser:[]
    }

    // constructor(props){
    //     super(props);
    //     this.state = {
    //         userdata: this.context.userData
    //     }
    // }

    componentDidMount(){
        const user = this.context.userData.user;
        this.state.data = user;
        const user1 =this.context.userData;
        console.log('userrrrr',user)
        user ? (
            this.setState({
              useridcontext: user.id || user1.id,
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
            <div className="status-container">
            <h1>
                Order History
            </h1>
            <div className="client-content-table">
                <div className="client-table-headers">
                    <div className="client-table-header">
                        ID
                    </div>
                    <div className="client-table-header">
                        Date
                    </div>
                    <div className="client-table-header">
                        Total
                    </div>
                    <div className="client-table-header">
                        Status
                    </div>
                    <div className="client-table-header">
                        Paid
                    </div>
                    <div className="client-table-header">
                        Action
                    </div>
                </div>
            </div>
             
            {
                matchuser.length >0?
                matchuser.slice(0).reverse().map((product)=>{
                    return(
                        <div className="order">
                            <StatusRow  key={`product_id_${product.id}`} productss={product}/>
                        </div>
                    )
                })
                :<EmptyStatus/>
            }
            </div>
            </>
          )
      }
}
      


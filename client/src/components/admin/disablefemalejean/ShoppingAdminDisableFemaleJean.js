import React from 'react';
import '../../../assets/admin.css'
import MainContentDisableFemaleJean from './MainContentDisableFemaleJean';
import NavbarDisableFemaleJean from './NavbarDisableFemaleJean';
import SidebarDisableFemaleJean from './SidebarDisableFemaleJean';

//function return component

//class call render method => return component
//16.8 => Function component => React HOOK

export default class ShoppingAdminDisableFemaleJean extends React.Component {
    state = {
        sidebar_open:true
    }
    toggleSidebar=()=> {
        this.setState({
            sidebar_open:!this.state.sidebar_open
        })
    }
    componentDidMount(){
        const token = window.localStorage.getItem('admin-token');
        if(!token){
           this.props.history.push('/adlogin')
        }
    }
    render(){
        return <div className="container-fluid">
            <div className="row">
            {/* sidebar dong' => display:none */}
                <div className="col-md-3 bg" style={{'display':this.state.sidebar_open?'block':'none'}}>
                    <SidebarDisableFemaleJean/>
                </div>
                {/* side bar dong => col-md-12 */}
                <div className={this.state.sidebar_open?"col-md-9":"col-md-12"}>
                    {/* NAVBAR */}
                   
                    <NavbarDisableFemaleJean toggleSidebar={this.toggleSidebar}/>
                    <MainContentDisableFemaleJean></MainContentDisableFemaleJean>
                </div>
            </div>
        </div>
    }
}


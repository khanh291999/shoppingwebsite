import React from 'react';
import '../../../assets/adminstaffcontrol.css'
import MainContentStaffControl from './MainContentStaffControl';
import NavbarStaffControl from './NavbarStaffControl';
import SidebarStaffControl from './SidebarStaffControl';

//function return component

//class call render method => return component
//16.8 => Function component => React HOOK

export default class ShoppingAdminStaffControl extends React.Component {
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
                    <SidebarStaffControl/>
                </div>
                {/* side bar dong => col-md-12 */}
                <div className={this.state.sidebar_open?"col-md-9":"col-md-12"}>
                    {/* NAVBAR */}
                   
                    <NavbarStaffControl toggleSidebar={this.toggleSidebar}/>
                    <MainContentStaffControl></MainContentStaffControl>
                </div>
            </div>
        </div>
    }
}


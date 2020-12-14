import React from 'react';
import '../../../assets/admin.css'
import MainContentFemaleJean from './MainContentFemaleJean';
import NavbarFemaleJean from './NavbarFemaleJean';
import SidebarFemaleJean from './SidebarFemaleJean';

//function return component

//class call render method => return component
//16.8 => Function component => React HOOK

export default class ShoppingAdminFemaleJean extends React.Component {
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
                    <SidebarFemaleJean/>
                </div>
                {/* side bar dong => col-md-12 */}
                <div className={this.state.sidebar_open?"col-md-9":"col-md-12"}>
                    {/* NAVBAR */}
                   
                    <NavbarFemaleJean toggleSidebar={this.toggleSidebar}/>
                    <MainContentFemaleJean></MainContentFemaleJean>
                </div>
            </div>
        </div>
    }
}


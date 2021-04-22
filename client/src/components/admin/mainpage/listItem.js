import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PeopleIcon from '@material-ui/icons/People';
import BarChartIcon from '@material-ui/icons/BarChart';
import LayersIcon from '@material-ui/icons/Layers';
import AssignmentIcon from '@material-ui/icons/Assignment';
import Menu, { SubMenu, Item as MenuItem } from 'rc-menu';
import CustomMenu from './CustomMenu'
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';

// export const secondaryListItems = (
//   <div>
//     <ListSubheader inset>Products</ListSubheader>
//     <CustomMenu/>
//   </div>
// );

export class MenuSideBar extends React.Component{
  handleActiveDashboard = () =>{
    const {changeActiveProduct} = this.props
    console.log("abv",changeActiveProduct);
    changeActiveProduct("dashboard")
  }

  render() {
    return(
      <>
        <Divider />
        <List>
          <div>
            <ListItem button onClick={this.handleActiveDashboard}>
              <ListItemIcon style={{opacity:"1"}}>
                <DashboardIcon />
              </ListItemIcon>
              <ListItemText primary="Dashboard" />
            </ListItem>
            <ListItem button>
              <ListItemIcon  style={{opacity:"1"}}>
                <ShoppingCartIcon />
              </ListItemIcon>
              <ListItemText primary="Orders" />
            </ListItem>
          </div>  
        </List>
        <Divider />
        <List>
          <ListSubheader inset>Products</ListSubheader>
          <CustomMenu changeActiveProduct={this.props.changeActiveProduct}/>
        </List>
        <Divider />
        <List>
          <div>
            <ListSubheader inset>User Management</ListSubheader>
            <ListItem button>
              <ListItemIcon style={{opacity:"1"}}>
                <AssignmentIcon />
              </ListItemIcon>
              <ListItemText primary="User" />
            </ListItem>
            <ListItem button>
              <ListItemIcon style={{opacity:"1"}}>
                <AssignmentIcon />
              </ListItemIcon>
              <ListItemText primary="Staff" />
            </ListItem>
          </div>  
        </List>
      </>
    );
  }
}
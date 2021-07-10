import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ListSubheader from "@material-ui/core/ListSubheader";
import DashboardIcon from "@material-ui/icons/Dashboard";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import PeopleIcon from "@material-ui/icons/People";
import BarChartIcon from "@material-ui/icons/BarChart";
import LayersIcon from "@material-ui/icons/Layers";
import AssignmentIcon from "@material-ui/icons/Assignment";
import Menu, { SubMenu, Item as MenuItem } from "rc-menu";
import CustomMenu from "./CustomMenu";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import PersonIcon from "@material-ui/icons/Person";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import FaceIcon from "@material-ui/icons/Face";
import AssignmentIndIcon from "@material-ui/icons/AssignmentInd";
import AdminContext from "../../../context/adminContext";
// export const secondaryListItems = (
//   <div>
//     <ListSubheader inset>Products</ListSubheader>
//     <CustomMenu/>
//   </div>
// );

export class MenuSideBar extends React.Component {
  static contextType = AdminContext;
  handleActiveDashboard = () => {
    const { changeActive } = this.props;
    console.log("abv", changeActive);
    changeActive("dashboard");
  };

  handleLogOut = () => {
    const { logout } = this.props;
    logout();
  };

  handleUserManagement = () => {
    const { changeActive } = this.props;
    changeActive("user");
  };

  handleStaffManagement = () => {
    const { changeActive } = this.props;
    changeActive("staff");
  };

  handleOrderStatus = () => {
    const { changeActive } = this.props;
    changeActive("order");
  };

  handleProfile = () => {
    const { changeActive } = this.props;
    changeActive("profile");
  };

  render() {
    const admin = this.context.adminData.admin;
    if (admin == undefined) {
      window.location.replace("https://localhost:3001/adlogin");
    }

    return (
      <>
        <Divider />
        <List>
          <div>
            <ListItem button onClick={this.handleActiveDashboard}>
              <ListItemIcon style={{ opacity: "1" }}>
                <DashboardIcon />
              </ListItemIcon>
              <ListItemText primary="Dashboard" />
            </ListItem>
            <ListItem button onClick={this.handleOrderStatus}>
              <ListItemIcon style={{ opacity: "1" }}>
                <ShoppingCartIcon />
              </ListItemIcon>
              <ListItemText primary="Orders" />
            </ListItem>
          </div>
        </List>
        <Divider />
        <List>
          <ListSubheader inset>Products</ListSubheader>
          <CustomMenu changeActive={this.props.changeActive} />
        </List>
        <Divider />
        {admin.type == 1 ? (
          <List>
            <div>
              <ListSubheader inset>User Management</ListSubheader>
              <ListItem button onClick={this.handleUserManagement}>
                <ListItemIcon style={{ opacity: "1" }}>
                  <FaceIcon />
                </ListItemIcon>
                <ListItemText primary="User" />
              </ListItem>
              <ListItem button onClick={this.handleStaffManagement}>
                <ListItemIcon style={{ opacity: "1" }}>
                  <AssignmentIndIcon />
                </ListItemIcon>
                <ListItemText primary="Staff" />
              </ListItem>
            </div>
          </List>
        ) : (
          <List>
            <div>
              <ListSubheader inset>User Management</ListSubheader>
              <ListItem button onClick={this.handleUserManagement}>
                <ListItemIcon style={{ opacity: "1" }}>
                  <FaceIcon />
                </ListItemIcon>
                <ListItemText primary="User" />
              </ListItem>
            </div>
          </List>
        )}
        <Divider />
        <List>
          <ListItem button onClick={this.handleProfile}>
            <ListItemIcon style={{ opacity: "1" }}>
              <PersonIcon />
            </ListItemIcon>
            <ListItemText primary="Profile" />
          </ListItem>
          <ListItem button>
            <ListItemIcon style={{ opacity: "1" }}>
              <ExitToAppIcon />
            </ListItemIcon>
            <ListItemText primary="Log out" onClick={this.handleLogOut} />
          </ListItem>
        </List>
      </>
    );
  }
}

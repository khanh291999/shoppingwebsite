import React from 'react'
import { List, ListItemIcon, ListSubheader, ListItem, ListItemText, Collapse } from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add';
import CheckIcon from '@material-ui/icons/Check';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import { Link } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
}));

export default function SidebarDisableFemaleTshirt(){
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);
  const [openfemale, setOpenFemale] = React.useState(true);
  const [openDisable, setOpenDisable] = React.useState(true);
  const [openfemaleDisable, setOpenFemaleDisable] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };
  const handleClickFemale = () => {
    setOpenFemale(!openfemale);
  };
  const handleClickDisable = () => {
    setOpenDisable(!openDisable);
  };
  const handleClickFemaleDisable = () => {
    setOpenFemaleDisable(!openfemaleDisable);
  };
    return  <div className="sidebar">
            <List
              component="nav"
              ria-labelledby="nested-list-subheader"
              subheader={
              <ListSubheader component="div" id="nested-list-subheader">
              Product list
              </ListSubheader>
              }
                className={classes.root}
              >
              <ListItem button onClick={handleClick}>
                <ListItemIcon>
                  <CheckIcon />
                </ListItemIcon>
                <ListItemText primary="Male" />
                {open ? <ExpandLess /> : <ExpandMore />}
              </ListItem>
              <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  <ListItem button component={Link} to="/admin"  className={classes.nested}>
                    <ListItemIcon>
                      <AddIcon />
                    </ListItemIcon>
                    <ListItemText primary="Jacket" />
                  </ListItem>
                  <ListItem button component={Link} to="/adminjean"  className={classes.nested}>
                    <ListItemIcon>
                      <AddIcon />
                    </ListItemIcon>
                    <ListItemText primary="Jean" />
                  </ListItem>
                  <ListItem button component={Link} to="/admint-shirt"  className={classes.nested}>
                    <ListItemIcon>
                      <AddIcon />
                    </ListItemIcon>
                    <ListItemText primary="T-shirt" />
                  </ListItem>
                </List>
              </Collapse>
              
              <ListItem button onClick={handleClickFemale}>
                <ListItemIcon>
                  <CheckIcon />
                </ListItemIcon>
                <ListItemText primary="Female" />
                {openfemale ? <ExpandLess /> : <ExpandMore />}
              </ListItem>
              <Collapse in={openfemale} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                <ListItem button component={Link} to="/adminfemalejacket"  className={classes.nested}>
                    <ListItemIcon>
                      <AddIcon />
                    </ListItemIcon>
                    <ListItemText primary="Jacket" />
                  </ListItem>
                  <ListItem button component={Link} to="/adminfemalejean"  className={classes.nested}>
                    <ListItemIcon>
                      <AddIcon />
                    </ListItemIcon>
                    <ListItemText primary="Jean" />
                  </ListItem>
                  <ListItem button component={Link} to="/adminfemalet-shirt"  className={classes.nested}>
                    <ListItemIcon>
                      <AddIcon />
                    </ListItemIcon>
                    <ListItemText primary="T-shirt" />
                  </ListItem>
                </List>
              </Collapse>
            </List>

            <List
              component="nav"
              ria-labelledby="nested-list-subheader"
              subheader={
              <ListSubheader component="div" id="nested-list-subheader">
              Disable Product
              </ListSubheader>
              }
                className={classes.root}
              >
              <ListItem button onClick={handleClickDisable}>
                <ListItemIcon>
                  <CheckIcon />
                </ListItemIcon>
                <ListItemText primary="Male" />
                {open ? <ExpandLess /> : <ExpandMore />}
              </ListItem>
              <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  <ListItem button component={Link} to="/disablejacket"  className={classes.nested}>
                    <ListItemIcon>
                      <AddIcon />
                    </ListItemIcon>
                    <ListItemText primary="Jacket" />
                  </ListItem>
                  <ListItem button component={Link} to="/disablejean"  className={classes.nested}>
                    <ListItemIcon>
                      <AddIcon />
                    </ListItemIcon>
                    <ListItemText primary="Jean" />
                  </ListItem>
                  <ListItem button component={Link} to="/disablet-shirt"  className={classes.nested}>
                    <ListItemIcon>
                      <AddIcon />
                    </ListItemIcon>
                    <ListItemText primary="T-shirt" />
                  </ListItem>
                </List>
              </Collapse>
              
              <ListItem button onClick={handleClickFemaleDisable}>
                <ListItemIcon>
                  <CheckIcon />
                </ListItemIcon>
                <ListItemText primary="Female" />
                {openfemale ? <ExpandLess /> : <ExpandMore />}
              </ListItem>
              <Collapse in={openfemale} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                <ListItem button component={Link} to="/disablefemalejacket"  className={classes.nested}>
                    <ListItemIcon>
                      <AddIcon />
                    </ListItemIcon>
                    <ListItemText primary="Jacket" />
                  </ListItem>
                  <ListItem button component={Link} to="/disablefemalejean"  className={classes.nested}>
                    <ListItemIcon>
                      <AddIcon />
                    </ListItemIcon>
                    <ListItemText primary="Jean" />
                  </ListItem>
                  <ListItem button component={Link} to="/disablefemalet-shirt"  className={classes.nested}>
                    <ListItemIcon>
                      <AddIcon />
                    </ListItemIcon>
                    <ListItemText primary="T-shirt" />
                  </ListItem>
                </List>
              </Collapse>
            </List>
</div>
}
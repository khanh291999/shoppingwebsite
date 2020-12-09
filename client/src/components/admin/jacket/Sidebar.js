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

export default function Sidebar(){
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);
  const [openfemale, setOpenFemale] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };
  const handleClickFemale = () => {
    setOpenFemale(!openfemale);
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
                  <ListItem button component={Link} to="/product"  className={classes.nested}>
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
                  <ListItem button component={Link} to="/t-shirt"  className={classes.nested}>
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
                <ListItem button component={Link} to="/femalejacket"  className={classes.nested}>
                    <ListItemIcon>
                      <AddIcon />
                    </ListItemIcon>
                    <ListItemText primary="Jacket" />
                  </ListItem>
                  <ListItem button component={Link} to="/femalejean"  className={classes.nested}>
                    <ListItemIcon>
                      <AddIcon />
                    </ListItemIcon>
                    <ListItemText primary="Jean" />
                  </ListItem>
                  <ListItem button component={Link} to="/femalet-shirt"  className={classes.nested}>
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
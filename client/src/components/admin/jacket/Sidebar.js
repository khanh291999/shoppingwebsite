import React, {useContext} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import adminContext from "../../../context/adminContext"
import { mainListItems, secondaryListItems } from '../mainpage/listItem';
import Menu, { SubMenu, Item as MenuItem, Divider } from 'rc-menu';
// import CommonMenu from "../mainpage/listItem"
import clsx from 'clsx';
import Drawer from '@material-ui/core/Drawer';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';

function handleClick(info) {
  console.log(`clicked ${info.key}`);
  console.log(info);
}

const collapseNode = () => ({ height: 0 });
const expandNode = node => ({ height: node.scrollHeight });

export const inlineMotion = {
  motionName: 'rc-menu-collapse',
  onAppearStart: collapseNode,
  onAppearActive: expandNode,
  onEnterStart: collapseNode,
  onEnterActive: expandNode,
  onLeaveStart: expandNode,
  onLeaveActive: collapseNode,
};

const nestSubMenu = (
  <SubMenu
    title={<span className="submenu-title-wrapper">offset sub menu 2</span>}
    key="4"
    popupOffset={[10, 15]}
  >
    <MenuItem key="4-1">inner inner</MenuItem>
    <Divider />
    <SubMenu
      key="4-2"
      title={<span className="submenu-title-wrapper">sub menu 1</span>}
    >
      <SubMenu
        title={<span className="submenu-title-wrapper">sub 4-2-0</span>}
        key="4-2-0"
      >
        <MenuItem key="4-2-0-1">inner inner</MenuItem>
        <MenuItem key="4-2-0-2">inner inner2</MenuItem>
      </SubMenu>
      <MenuItem key="4-2-1">inn</MenuItem>
      <SubMenu
        title={<span className="submenu-title-wrapper">sub menu 4</span>}
        key="4-2-2"
      >
        <MenuItem key="4-2-2-1">inner inner</MenuItem>
        <MenuItem key="4-2-2-2">inner inner2</MenuItem>
      </SubMenu>
      <SubMenu
        title={<span className="submenu-title-wrapper">sub menu 3</span>}
        key="4-2-3"
      >
        <MenuItem key="4-2-3-1">inner inner</MenuItem>
        <MenuItem key="4-2-3-2">inner inner2</MenuItem>
      </SubMenu>
    </SubMenu>
  </SubMenu>
);

function onOpenChange(value) {
  console.log('onOpenChange', value);
}

const children1 = [
  <SubMenu
    title={<span className="submenu-title-wrapper">sub menu</span>}
    key="1"
  >
    <MenuItem key="1-1">0-1</MenuItem>
    <MenuItem key="1-2">0-2</MenuItem>
  </SubMenu>,
  nestSubMenu,
  <MenuItem key="2">1</MenuItem>,
  <MenuItem key="3">outer</MenuItem>,
  <MenuItem key="5" disabled>
    disabled
  </MenuItem>,
  <MenuItem key="6">outer3</MenuItem>,
];

const children2 = [
  <SubMenu
    title={<span className="submenu-title-wrapper">sub menu</span>}
    key="1"
  >
    <MenuItem key="1-1">0-1</MenuItem>
    <MenuItem key="1-2">0-2</MenuItem>
  </SubMenu>,
  <MenuItem key="2">1</MenuItem>,
  <MenuItem key="3">outer</MenuItem>,
];

const customizeIndicator = <span>Add More Items</span>;

export class CommonMenu extends React.Component {
  state = {
    children: children1,
    overflowedIndicator: undefined,
  };

  toggleChildren = () => {
    this.setState(({ children }) => ({
      children: children === children1 ? children2 : children1,
    }));
  };

  toggleOverflowedIndicator = () => {
    this.setState(({ overflowedIndicator }) => ({
      overflowedIndicator:
        overflowedIndicator === undefined ? customizeIndicator : undefined,
    }));
  };

  render() {
    const { triggerSubMenuAction } = this.props;
    const { children, overflowedIndicator } = this.state;
    return (
      <div>
        {this.props.updateChildrenAndOverflowedIndicator && (
          <div>
            <button type="button" onClick={this.toggleChildren}>
              toggle children
            </button>
            <button type="button" onClick={this.toggleOverflowedIndicator}>
              toggle overflowedIndicator
            </button>
          </div>
        )}
        <Menu
          onClick={handleClick}
          triggerSubMenuAction={triggerSubMenuAction}
          onOpenChange={onOpenChange}
          selectedKeys={['3']}
          overflowedIndicator={overflowedIndicator}
          {...this.props}
        >
          {children}
        </Menu>
      </div>
    );
  }
}

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  menuButtonHidden: {
    display: 'none',
  },
  title: {
    flexGrow: 1,
  },
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9),
    },
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
  fixedHeight: {
    height: 240,
  },
}));

export default function Sidebar(){
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);
  const { adminData, setadminData } = useContext(adminContext);
  //menu type
  const verticalMenu = <CommonMenu mode="vertical" openAnimation="zoom" />;
  //menu event
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  return  (
    <Drawer
      variant="permanent"
      classes={{
        paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
      }}
      open={open}
    >
      <div className={classes.toolbarIcon}>
        <IconButton onClick={handleDrawerClose}>
          <ChevronLeftIcon />
        </IconButton>
      </div>
      <Divider />
      {/* <List>{mainListItems}</List>
      <Divider />
      <List>{secondaryListItems}</List> */}
      <div style={{ margin: 20, width: 200 }}>{verticalMenu}</div>
    </Drawer>
  )
}
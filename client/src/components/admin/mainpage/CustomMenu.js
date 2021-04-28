import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import Menu, { SubMenu, Item as MenuItem, Divider } from 'rc-menu';
import 'rc-menu/assets/index.css';
import animate from 'css-animation';
import {AddShoppingCart,RemoveShoppingCart} from '@material-ui/icons';
import '../../../assets/CustomMenu.css'

function handleClick(info) {
  // console.log(`clicked ${info.key}`);
  // console.log(info);
}

const animation = {
  enter(node, done) {
    let height;
    return animate(node, 'rc-menu-collapse', {
      start() {
        height = node.offsetHeight;
        node.style.height = 0;
      },
      active() {
        node.style.height = `${height}px`;
      },
      end() {
        node.style.height = '';
        done();
      },
    });
  },

  appear() {
    return this.enter.apply(this, arguments);
  },

  leave(node, done) {
    return animate(node, 'rc-menu-collapse', {
      start() {
        node.style.height = `${node.offsetHeight}px`;
      },
      active() {
        node.style.height = 0;
      },
      end() {
        node.style.height = '';
        done();
      },
    });
  },
};

function onOpenChange(value) {
  // console.log('onOpenChange', value);
}

// function handleActiveJacket(props) {
//   console.log("zxc",this.props.changeActive);

// } 

class CommonMenu extends React.Component {
  state = {
    overflowedIndicator: undefined,
    active: ""
  }
  
  //Active
  handleActiveJacket = () =>{
    const {changeActive} = this.props
    changeActive("jacket")
  }

  handleActiveJean = () =>{
    const {changeActive} = this.props
    changeActive("jean")
  }

  handleActiveTshirt = () =>{
    const {changeActive} = this.props
    changeActive("t-shirt")
  }

  handleActiveFemaleJacket = () =>{
    const {changeActive} = this.props
    changeActive("femalejacket")
  }

  handleActiveFemaleJean = () =>{
    const {changeActive} = this.props
    changeActive("femalejean")
  }

  handleActiveFemaleTshirt = () =>{
    const {changeActive} = this.props
    changeActive("femalet-shirt")
  }

  //De-active
  handleDeactiveJacket = () =>{
    const {changeActive} = this.props
    changeActive("de-jacket")
  }

  handleDeactiveJean = () =>{
    const {changeActive} = this.props
    changeActive("de-jean")
  }

  handleDeactiveTshirt = () =>{
    const {changeActive} = this.props
    changeActive("de-t-shirt")
  }

  handleDeactiveFemaleJacket = () =>{
    const {changeActive} = this.props
    changeActive("de-femalejacket")
  }

  handleDeactiveFemaleJean = () =>{
    const {changeActive} = this.props
    changeActive("de-femalejean")
  }

  handleDeactiveFemaleTshirt = () =>{
    const {changeActive} = this.props
    changeActive("de-femalet-shirt")
  }

  render() {

    const { triggerSubMenuAction } = this.props;
    const { overflowedIndicator } = this.state;
    return (
      <div>
        <Menu
          onClick={handleClick}
          triggerSubMenuAction={triggerSubMenuAction}
          onOpenChange={onOpenChange}
          selectedKeys={['3']}
          mode={this.props.mode}
          openAnimation={this.props.openAnimation}
          defaultOpenKeys={this.props.defaultOpenKeys}
          overflowedIndicator={overflowedIndicator}
        >
          {/*Product on display */}
          <SubMenu title={<span className="submenu-title-wrapper">
            <AddShoppingCart style={{margin:"0 35px -7px 4px"}}/>
            In Stock
          </span>} key="1">
            <SubMenu title={<span className="submenu-title-wrapper">Men's Fashion</span>} key="1-1">
              <MenuItem key="1-1-1" onClick={this.handleActiveJacket} >
                Jacket
              </MenuItem>
              <MenuItem  key="1-1-2" onClick={this.handleActiveJean}>Jean</MenuItem>
              <MenuItem key="1-1-3" onClick={this.handleActiveTshirt}>T-shirt</MenuItem>
            </SubMenu>
            <SubMenu title={<span className="submenu-title-wrapper">Women's Fashion</span>} key="1-2">
              <MenuItem key="1-2-1" onClick={this.handleActiveFemaleJacket}>Jacket</MenuItem>
              <MenuItem key="1-2-2" onClick={this.handleActiveFemaleJean}>Jean</MenuItem>
              <MenuItem key="1-2-3" onClick={this.handleActiveFemaleTshirt}>T-shirt</MenuItem>
            </SubMenu>
          </SubMenu>
          
          {/*Disable product */}
          <SubMenu
            title={
              <span className="submenu-title-wrapper">
                <RemoveShoppingCart style={{margin:"0 35px -7px 4px"}}/>
                Out off stock
              </span>
            }
            key="4"
            popupOffset={[10, 15]}
          >
            <SubMenu
              key="4-1"
              title={<span className="submenu-title-wrapper">Men's Fashion</span>}
            >
              <MenuItem key="4-1-0" onClick={this.handleDeactiveJacket}>Jacket</MenuItem>
              <MenuItem key="4-1-1" onClick={this.handleDeactiveJean}>Jean</MenuItem>
              <MenuItem key="4-1-2" onClick={this.handleDeactiveTshirt}>T-shirt</MenuItem>
            </SubMenu>
            <SubMenu
              key="4-2"
              title={<span className="submenu-title-wrapper">Woman's fashion</span>}
            >
              <MenuItem key="4-2-0" onClick={this.handleDeactiveFemaleJacket}>Jacket</MenuItem>
              <MenuItem key="4-2-1" onClick={this.handleDeactiveFemaleJean}>Jean</MenuItem>
              <MenuItem key="4-2-2" onClick={this.handleDeactiveFemaleTshirt}>T-shirt</MenuItem>
            </SubMenu>
          </SubMenu>
        </Menu>
      </div>
    );
  }
}

CommonMenu.propTypes = {
  mode: PropTypes.string,
  openAnimation: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  triggerSubMenuAction: PropTypes.string,
  defaultOpenKeys: PropTypes.arrayOf(PropTypes.string),
  updateChildrenAndOverflowedIndicator: PropTypes.bool,
};

// const verticalMenu = (
 
// );

export default class CustomMenu extends React.Component{
  handleCallback = (data)=> {
    this.setState({active: data})
  }

  render(){
   
    return (
      <div 
        className="space" 
        style={{ margin: "0px 15px"}}
      >
         <CommonMenu
        changeActive={this.props.changeActive}
        mode="vertical"
        openAnimation="zoom"
        />
      </div>
    );
  }
}
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
//   console.log("zxc",this.props.changeActiveProduct);

// } 

class CommonMenu extends React.Component {
  state = {
    overflowedIndicator: undefined,
    active: ""
  }
  
  handleActiveJacket = () =>{
    const {changeActiveProduct} = this.props
    changeActiveProduct("jacket")
  }

  handleActiveJean = () =>{
    const {changeActiveProduct} = this.props
    changeActiveProduct("jean")
  }

  handleActiveTshirt = () =>{
    const {changeActiveProduct} = this.props
    changeActiveProduct("t-shirt")
  }

  handleActiveFemaleJacket = () =>{
    const {changeActiveProduct} = this.props
    changeActiveProduct("femalejacket")
  }

  handleActiveFemaleJean = () =>{
    const {changeActiveProduct} = this.props
    changeActiveProduct("femalejean")
  }

  handleActiveFemaleTshirt = () =>{
    const {changeActiveProduct} = this.props
    changeActiveProduct("femalet-shirt")
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
              <MenuItem key="4-1-0">Jacket</MenuItem>
              <MenuItem key="4-1-1">Jean</MenuItem>
              <MenuItem key="4-1-2">T-shirt</MenuItem>
            </SubMenu>
            <SubMenu
              key="4-2"
              title={<span className="submenu-title-wrapper">Woman's fashion</span>}
            >
              <MenuItem key="4-2-0">Jacket</MenuItem>
              <MenuItem key="4-2-1">Jean</MenuItem>
              <MenuItem key="4-2-2">T-shirt</MenuItem>
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
        changeActiveProduct={this.props.changeActiveProduct}
        mode="vertical"
        openAnimation="zoom"
        />
      </div>
    );
  }
}
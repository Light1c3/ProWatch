import React from 'react';
import Drawer from 'material-ui/Drawer';
import AppBar from 'material-ui/AppBar';
import MenuItem from 'material-ui/MenuItem';

class AppBarComp extends React.Component {

  constructor() {
    super();
    this.state = {
      open: false
    };
  }

  handleToggle = () => this.setState({open: !this.state.open});
  handleClose = () => this.setState({open: false});

  render() {
      return <div>
        <AppBar
          onLeftIconButtonTouchTap={this.handleToggle}
          title="ProWatch - Everything Overwatch"
        />

        <Drawer
          docked={false}
          width={250}
          open={this.state.open}
          onRequestChange={(open) => this.setState({open})}
        >
          <MenuItem onTouchTap={this.handleClose}>Item 1</MenuItem>
          <MenuItem onTouchTap={this.handleClose}>Item 2</MenuItem>
          <MenuItem onTouchTap={this.handleClose}>Item 3</MenuItem>
          <MenuItem onTouchTap={this.handleClose}>Item 4</MenuItem>
          <MenuItem onTouchTap={this.handleClose}>Item 5</MenuItem>
        </Drawer>
      </div>
  }
}

AppBarComp.childContextTypes ={
  muiTheme: React.PropTypes.object,
};
export default AppBarComp;

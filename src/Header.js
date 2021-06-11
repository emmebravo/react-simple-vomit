import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
  render() {
    const style = {
      width: this.props.width,
      backgroundColor: this.props.backColor,
      //in older react need this to bind the props to component
    };
    return <header style={style} className="Header-main"></header>;
  }
}

export default Header;

//document.querySelector("header").style.backgroundColor = "red"

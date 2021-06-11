import React, { Component } from 'react'; //importing modules
import './Aside.css'; //import CSS

class Aside extends Component {
  //class based component, isn't taking any props
  render() {
    return (
      <aside className="Aside"></aside>

      // if you wanted to add another element here, it would throw an error bc everything has to be surrounded by a common parent node (div, react fragment)
    );
  }
}

export default Aside; // exports Aside

import React from 'react';
import { Link } from 'react-router';

export default React.createClass({
  render () {
    return (
      <div className='lc-app'>
        <div className='nav'>
          <Link activeClassName='active' to='/home'>Home</Link>
          <Link activeClassName='active' to='/color-palette'>Color Palette</Link>
          <Link activeClassName='active' to='/equal-height-column'>Equal Height Column</Link>
          <Link activeClassName='active' to='/background-image'>Background Image</Link>
          <Link activeClassName='active' to='/gradient'>Gradient</Link>
        </div>

        <div className="main">
          { this.props.children }
        </div>
      </div>
    );
  }
});

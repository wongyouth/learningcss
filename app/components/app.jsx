import React from 'react';
import { Link } from 'react-router';

export default React.createClass({
  render () {
    return (
      <div className='lc-app'>
        <div className='nav'>
          <Link to='/'>Home</Link>
          <Link to='/gradient'>Gradient</Link>
        </div>

        <div className="main">
          { this.props.children }
        </div>
      </div>
    );
  }
});

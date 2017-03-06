import React from 'react';
import {Route, IndexLink, Link} from 'react-router';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <nav>
          <IndexLink to="/" activeClassName="active">Home</IndexLink>  {" | "}
          <Link to="/contact" activeClassName="active">Contact</Link>  {" | "}
          <Link to="/about" activeClassName="active">About</Link>
        </nav>
          {this.props.children}
      </div>
    );
  }
}

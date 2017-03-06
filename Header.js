import React from 'react';

export default class Header extends React.Component {
  constructor(props) {
    super(props);

  }
  render() {
    return (
      <div>
        <h2>Header2: {this.props.someText}</h2>
      </div>
    );
  }
}


Header.propTypes = {
  someText: React.PropTypes.string.isRequired
}

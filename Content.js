import React from 'react';


export default class Content extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <br/>
        <button onClick={this.props.childClicked}>Click on child</button>
        <br/>
        Something
        <ul>
          {this.props.data.map( (album, index) => {
            return (<li key={index}>
               {album.name}
            </li>);
          })}
      </ul>
      </div>
    );
  }
}

Content.propTypes = {
  data: React.PropTypes.array.isRequired
}

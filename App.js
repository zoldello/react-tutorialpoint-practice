import React from 'react';
import Header from './Header';
import TableRow from './TableRow';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
         data:
         [
            {
               "id":1,
               "name":"Thriller",
               "age":"34"
            },

            {
               "id":2,
               "name":"Off The Wall",
               "age":"38"
            },

            {
               "id":3,
               "name":"Bad",
               "age":"30"
            }
         ]
      };
  }

  render() {
    return (
      <div>
        <h1>{this.props.description}</h1>
        <Header />
        <table>
          <tbody>
            {this.state.data.map( (person, index) => <TableRow key={index} data={person} /> )}
          </tbody>
        </table>
        <br />
        {this.props.welcomeMessage}
      </div>
    );
  }
}

// this comes into play only when the prop-value is set to undefined.
App.defaultProps = {
  welcomeMessage: "Hello, world"
};

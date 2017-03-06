import React from 'react';
import Header from './Header';
import TableRow from './TableRow';
import Content from './Content';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      "data":
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
      ],

      someText: ""
    };

    this.addXScape = this.addXScape.bind(this);
    this.showTime = this.showTime.bind(this);
    this.onChangeSomeText = this.onChangeSomeText.bind(this);
    this.childClicked = this.childClicked.bind(this);
  }

  showTime() {
  //  debugger;
    this.forceUpdate();
  }

  addXScape() {
    const newAlbum = {
      "id":4,
      "name":"XScape",
      "age":"3"
    }

    let albums = this.state.data;
    albums.push(newAlbum);

    this.setState({data: albums});
  }

  onChangeSomeText(e) {
    this.setState({someText: e.target.value});
  }

  childClicked() {
    alert('child clicked');
  }

  render() {
    return (
      <div>
        <h1>{this.props.description}</h1>
        <Header someText={this.state.someText} />
        <table>
          <tbody>
            {this.state.data.map( (person, index) => <TableRow key={index} data={person} /> )}
          </tbody>
        </table>
        <br />
        {this.props.welcomeMessage}
        <br />
        <div>
          <h6>Array: {this.props.propArray}</h6>
          <h6>Bool: {this.props.propBool ? "True..." : "False..."}</h6>
          <h6>Func: {this.props.propFunc(3)}</h6>
          <h6>Number: {this.props.propNumber}</h6>
          <h6>String: {this.props.propString}</h6>
          <h6>Object: {this.props.propObject.objectName1}</h6>
          <h6>Object: {this.props.propObject.objectName2}</h6>
          <h6>Object: {this.props.propObject.objectName3}</h6>
        </div>
        <br />
        { this.state.data[3] ? this.state.data[3].id : ""}
        <br />
        <button onClick={this.addXScape}>Show something about XScape</button>
        <br />  <br />
        {new Date().getMilliseconds().toString()}
          <br />
        <button onClick={this.showTime}>Show Time</button>
        <br />
        <input type="text"  onChange={this.onChangeSomeText} />
        <br />
        {this.state.someText}
        <br/>
        <Content childClicked={this.childClicked} data={this.state.data} />
      </div>
    );
  }
}


App.propTypes = {
  propArray: React.PropTypes.array.isRequired,
  propBool: React.PropTypes.bool.isRequired,
  propFunc: React.PropTypes.func,
  propNumber: React.PropTypes.number,
  propString: React.PropTypes.string,
  propObject: React.PropTypes.object
}

// this comes into play only when the prop-value is set to undefined.
App.defaultProps = {
  propArray: [1,2,3,4,5],
  propBool: true,
  propFunc: function(e){return e},
  propNumber: 1,
  propString: "String value...",

  propObject: {
    objectName1:"objectValue1",
    objectName2: "objectValue2",
    objectName3: "objectValue3"
  }
}

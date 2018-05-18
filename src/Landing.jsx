import React, { Component } from 'react';
import Fe from './Fe.jsx';
import Be from './Be.jsx';
import Servers from './Servers.jsx';
import Libraries from './Libraries';

// use react-tabs for tabular page display
class Landing extends Component {
  constructor() {
    super();
    this.state = {

    }
    this._onClick = this._onClick.bind(this);
  }

  getResources = () => {
    this.feFetch();
    this.beFetch();
    this.serversFetch();
    this.librariesFetch();
  }

  feFetch() {
    const feUrl = 'https://re-source-database.herokuapp.com/fe';
    const feData = response => { this.setState({ feData: response }) }
    return fetch(feUrl)
          .then(response => response.json())
          .then(feData)
          .catch(console.log("wtf?"))
  }

  beFetch = () => {
    const beUrl = 'https://re-source-database.herokuapp.com/be';
    const beData = response => { this.setState({ beData: response }) }
    return fetch(beUrl)
          .then(response => response.json())
          .then(beData)
          .catch(console.log("wtf?"))
  }

  serversFetch = () => {
    const serversUrl = 'https://re-source-database.herokuapp.com/servers';
    const serversData = response => { this.setState({ serversData: response }) }
    return fetch(serversUrl)
          .then(response => response.json())
          .then(serversData)
          .catch(console.log("wtf?"))
  }

  librariesFetch = () => {
    const libsUrl = 'https://re-source-database.herokuapp.com/libraries';
    const librariesData = response => this.setState({ librariesData: response })
    return fetch(libsUrl)
          .then(response => response.json())
          .then(librariesData)
          .catch(console.log("wtf?"))
  }

  _onClick = (event) => {
      console.log(this, 'dis');
      console.log(event.target, 'evt tgt');
  }

  componentWillMount() {
    this.getResources();
  }

  renderFromDB = () => {
    if (this.state.librariesData &&
        this.state.serversData &&
        this.state.beData &&
        this.state.feData) {
      return (
        <section>
          <Fe data={this.state.feData.item} onClick={this._onClick} />
          <Be data={this.state.beData.item} onClick={this._onClick} />
          <Servers data={this.state.serversData.item} onClick={this._onClick} />
          <Libraries data={this.state.librariesData.item} onClick={this._onClick} />
        </section>
      )
    } else {
      return (<p>pooped.</p>)
    }
  }

  render() {
    return (
      <div>
        {this.renderFromDB()}
      </div>
    )
  }
}

export default Landing;

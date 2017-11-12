import React, { Component } from 'react';
import HeroSource from './herosource';

class AddHero extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hero: {
        name: "",
        description: ""
      }
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSave = this.handleSave.bind(this);
  }

  handleChange(event, data) {
    const { hero } = this.state;
    hero[event.target.name] = event.target.value
    this.setState({ hero })
  }

  handleSave() {
    this.setState();
    this.state.hero['id'] = Date.now();
    HeroSource.push(this.state.hero)
    this.props.history.push('/');
    console.log(this.state.hero);
  }

  render() {
    const { hero } = this.state;
    return (
      <div>
        <h1> Add new Hero</h1>
        <label>Name: </label>
        <input name="name" type="text" value={hero.name} onChange={this.handleChange} /> <br />
        <label>Description: </label>
        <input name="description" type="text" value={hero.description} onChange={this.handleChange} /> <br />
        <button onClick={this.handleSave}>Save</button>
        <a href="/">Back</a>
      </div>
    );
  }
}

export default AddHero;

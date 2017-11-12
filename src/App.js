import React, { Component } from 'react';
import './App.css';
import Dashboard from './Dashboard';
import Hero from './Hero';
import AddHero from './AddHero';
import HeroSource from './herosource';


class App extends Component {


  constructor(props) {
    super(props);
    this.state = {
      showComponent: true,
      heroes: HeroSource
    };
    this._onHeroButtonClick = this._onHeroButtonClick.bind(this);
    this._onDashboardButtonClick = this._onDashboardButtonClick.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
  }

  _onDashboardButtonClick() {
    this.setState({
      showComponent: true,
    });
  }

  _onHeroButtonClick() {
    this.setState({
      showComponent: false,
    });
  }

  handleAdd() {
    this.props.history.push('/addHero');
  }


  render() {
    return (
        <div>
          <h1>Heroes
            <button onClick={this.handleAdd}>Add</button>
          </h1>
          <a href="#" onClick = {this._onDashboardButtonClick}>
          Dashboard</a>
          <a href="#" onClick = {this._onHeroButtonClick}> Heroes</a>
          {this.state.showComponent ?
             <Dashboard heroes={this.state.heroes}/> :
             this.state.heroes.map(hero => {
               return <Hero key={hero.id} heroId={hero.id} name={hero.name} />
             })
            }
        </div>
    );
  }
}

export default App;

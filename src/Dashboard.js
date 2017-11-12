import React, { Component } from 'react';
import Hero from './Hero';

class Dashboard extends Component {
  render() {
    return (
      <div>
        <h1>Top Heroes</h1>
        {
          this.props.heroes.slice(0,5).map(hero => {
            return <Hero key={hero.id} heroId={hero.id} name={hero.name} />
          })
        }
      </div>
    );
  }
}

export default Dashboard;

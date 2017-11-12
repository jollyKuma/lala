import React, { Component } from 'react';

class Hero extends Component {

  render() {
    return (
      <div>
        <ul>
          <li><a href={`hero-detail/${this.props.heroId}`}>{this.props.name}</a></li>
        </ul>
      </div>
    );
  }
}

export default Hero;

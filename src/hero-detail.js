import React, { Component } from 'react';
import HeroSource from './herosource';

class HeroDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      heroDetail: null
    }

    this.handleEdit = this.handleEdit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleEdit() {
    console.log('edit');
  }

  handleDelete() {
    const id = this.props.match.params.heroId;
    console.log(HeroSource.filter(hero => hero.id !== id));
    HeroSource = HeroSource.filter(hero => hero.id !== id);
    this.props.history.push('/');
  }
  componentWillMount() {
    const id = this.props.match.params.heroId;
    const heroDetail = HeroSource.filter(hero => hero.id == id);
    if (heroDetail.length > 0) {
      this.setState({ heroDetail: heroDetail[0] });
    }
  }

  render() {
    const { heroDetail } = this.state;
    console.log('heroDetail',heroDetail);
    return (
      <div>
        <span>Hero Detail</span><br />
        <span>Name:
          {
            heroDetail ? heroDetail.name : ""
          }
        </span><br/>
        <span>Description:
          {
            heroDetail ? heroDetail.description : ""
          }
        </span>
        <button onClick={this.handleEdit}>Edit</button>
        <button onClick={this.handleDelete}>Delete</button>
      </div>
    );
  }
}

export default HeroDetail;

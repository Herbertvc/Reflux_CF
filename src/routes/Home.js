import React from 'react';
import Reflux from 'reflux';
import ReactMixin from 'react-mixin';

import PeopleFrame from '../components/PeopleFrame';

import PeopleActions from '../actions/PeopleActions';

import PeopleStore from '../stores/PeopleStore';

@ReactMixin.decorate(Reflux.connect(PeopleStore, 'people'))
export default class Home extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    PeopleActions.fetchPeople();
  }

  handlePeople() {
    PeopleActions.askForPeople();
  }

  render() {
    if(this.state.people != null){
      return (
        <div>
          <PeopleFrame people={this.state.people} />
          <button onClick={this.handlePeople.bind(this)}>Ask!</button>
        </div>
      )
    }
    else{
      return(<h1>Loading</h1>)
    }
  }
}

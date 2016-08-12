import React from 'react';
import Reflux from 'reflux';
import ReactMixin from 'react-mixin';

import PeopleFrame from '../components/PeopleFrame';

import PeopleActions from '../actions/PeopleActions';

import PeopleStore from '../stores/PeopleStore';

@ReactMixin.decorate(Reflux.connect(PeopleStore, 'people'));

export default class Home extends React.Component {
  constructor() {
    super();
  }

  componentDidMount(){
  	PeopleActions.fetchPeople();
  }

  render() {
    return (
    	if(this.state.people != null){
    	  <PeopleFrame people={this.state.people} />
    	}
    	else{
    		return(<h1>Loading</h1>)
    	}
    );
  }
}
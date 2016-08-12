import React from 'react';

import PeoplePhoto from './PeoplePhoto';
import PeopleTitle from './PeopleTitle';

export default class Main extends React.Component {
	constructor() {
		super();
	}

	render() {
		return (
			<div>
				<PeoplePhoto photo={this.props.people.picture.thumbnail} />
				<PeopleTitle name={this.props.people.name} />
			</div>
		);
	}
}
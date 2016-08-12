import Reflux from 'reflux';

import PeopleActions from '../actions/PeopleActions';

let PeopleStore = Reflux.createStore({
	listenables: [PeopleActions],
	fetchPeople: function(argument) {
		fetch('https://randomuser.me/api/')
			.then((response) => response.json())
			.then((data) => {
				let people = people.result;
				this.trigger(people);
			})
			.catch((err) => {});
	}
});
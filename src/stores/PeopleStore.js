import Reflux from 'reflux';

import PeopleActions from '../actions/PeopleActions';

let PeopleStore = Reflux.createStore({
	listenables: [PeopleActions],
	fetchPeople: function() {
		let self = this;
		fetch('https://randomuser.me/api/')
			.then((response) => response.json())
			.then((data) => {
				let people = data.results;
				self.trigger(people);
			})
			.catch((err) => {err});
	}
});

export default PeopleStore;
import Reflux from 'reflux';
import io from 'socket.io-client'

import PeopleActions from '../actions/PeopleActions';

let PeopleStore = Reflux.createStore({
	listenables: [PeopleActions],
	fetchPeople: function() {
		this.socket = io('http://react-cf.app:3000');
		this.socket.on('people', (people) => {
			var people = JSON.parse(people);
			people = people.results[0]
			this.trigger(people)
		});
	},
	askForPeople: function() {
		this.socket.emit('ask');
	}
});

export default PeopleStore;
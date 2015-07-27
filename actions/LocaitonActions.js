//takes an array of locations and dispatch them to the store.
var alt = require('../alt');

class LocationActions{
	updatLocations(locations){
		this.dispatch(locations);
	}
}

module.exports = alt.createActions(LocationActions);
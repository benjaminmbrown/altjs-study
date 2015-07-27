var alt = require('../alt');
var LocationsActions = require('../actions/LocationsActions');

class FavoritesStore{

	constructor{
		this.locations =[];
		this.bindListeners({
			addFavoriteLocation: LocationsActions.FAVORITE_LOCATION
		});

	}

	addFavoriteLocation(location){
		this.locations.push(location)
	}

}

module.exports = alt.createStore(FavoritesStore, 'FavoritesStore');
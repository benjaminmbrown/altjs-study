//takes an array of locations and dispatch them to the store.
var alt = require('../alt');

class LocationActions{
	updateLocations(locations){
		this.dispatch(locations);
	}

	fetchLocations(){
		//dispatches loading state event
		this.dispatch();

		LocationsFetcher.fetch()
			.then((locations) =>{
				//access all other actions with this.actions
				this.actions.updateLocations(locations);
			})
			.catch((errorMessage)=>{
				this.actions.locationsFailed(errorMessage);
			});

	}

	locationsFailed(errorMessage){
		this.dispatch(errorMessage);
	}

	favoriteLocation(locationId){
		this.dispatch(locationId);
	}

}

module.exports = alt.createActions(LocationActions);
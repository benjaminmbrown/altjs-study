var React = require('react');
var LocationStore = require('../stores/LocationStore');

var Locations = React.createClass({
	//set the initial state using store's state
	getInitialState(){
		return LocationStore.getState();
	},
	//listen to changes once the stat in store is updated
	componentDidMount(){
		LocationStore.listen(this.onChange);
		LocationsActions.fetchLocations();
	},
	//remove listener
	compoenentWillUnmount(){
		LocationStore.unlisten(this.onChange);
	},
	//sets state
	onChange(state){
		this.setState(state);
	},

	render(){
		if(this.state.errorMessage){
			return (<div>Somthing is fishy</div>);
		}
		if(!this.state.locations.length){
			return(<div><img src="/my-cool-spinner.gif"/><div>)
		}

		return(
			<ul>
			{this.state.locations.map((location) => {
				return (<li>{location.name}</li>);
			})};
			</ul>
		);
	}

});

module.exports = Locations;
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
		return(
			<ul>
			{this.stat.locations.map((location) => {
				return (<li>{location.name}</li>);
			})};
			</ul>
		);
	}

});

module.exports = Locations;
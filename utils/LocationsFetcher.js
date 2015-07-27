var LocationsFetcher = {
	fetch: function(){
	return new Promise(function(resolve, reject){	
		//simulate asynch action for demo purposes
		setTimeout(function(){
			//mock data for now
			resolve(mockData);
		}, 300);
	});
	}
};
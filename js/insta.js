$(document).ready(function(){ 

	var userFeed = new Instafeed({
	    get: 'user',
	    userId: '6762617186',
	    accessToken: '6762617186.1677ed0.0d0cf2559353400db6faa4833d5cc37a',
	    resolution: 'standard_resolution',
	    limit: 10
	});
	userFeed.run();

	setTimeout(function(){
		$('.instafeed').addClass('shadowed');
	}, 1000);

});
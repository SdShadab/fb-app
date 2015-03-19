Template.Home.helpers({
	facebookLogin: function() {
		if (window.FB) {
		FB.getLoginStatus(function(response) {
			  if (response.status === 'connected') {
			   console.log('Logged in.');
			  }
			  else {
			    console.log("Lets Log Them In");
			  }
		});
	}
	}	
});
Template.Home.rendered = function() {
		if (window.FB) {console.log("FB Exists!")}
	    };
Template.Home.events = {
	'click #fbLogin': function(e) {
		e.preventDefault();
		FB.login(function(response) {
			console.log(response);
			Session.set('isLoggedIn',"Hell Yeah!");
			Session.set('fbUserId', response.authResponse.userID);
		}, {scope: 'email,user_likes,manage_pages'}   		
		)
		var UserId = Session.get('fbUserId');
		FB.api('/' + UserId + '/accounts', 'get', function(response){
			console.log(response);
		})
	}
}
if(Meteor.isClient) {
  window.fbAsyncInit = function() {
    FB.init({
      appId      : '414898431999012',
      status     : true,
      xfbml      : true,
      version    : 'v2.1'
    });
    Session.set('fbLoad',"true")
    if (FB.getLoginStatus() == 'connected') {
    	// Session.set('isLoggedIn','hell yes');
    } else {Session.set('isLoggedIn','Nope')};
    ;
  };
}
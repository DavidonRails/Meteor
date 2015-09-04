 Template.login.events({
  'submit form': function(event, template){
    event.preventDefault();
    var emailVar = template.find('#login-email').value;
    var passwordVar = template.find('#login-password').value;

    //  below function provided by account-password package
    Meteor.loginWithPassword(emailVar,passwordVar, function(error, reason){
      if (error){
        Session.set('loginError', error.reason);
      } else {
        Router.go('campaignslist');
      }
    }); 
  }
 }); // end login event

 Template.login.helpers({
  'loginError': function(){
    return Session.get('loginError');
  }
});

Template.logout.events({
	'click .logout': function(e,t){
    e.preventDefault();
		Meteor.logout();
		Router.go('/');
	}
});
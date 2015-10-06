Template.businesscreate.events({
	'submit form' : function(e) {
		Router.go('campaignscreate');
		/*
		e.preventDefault();
		var password = $(e.target).find('[name=password]').val();
		var businessprofile = {

			businessName : $(e.target).find('[name=businessName]').val(),
			businessAddress1 : $(e.target).find('[name=businessAddress1]').val(),
			businessAddress2 : $(e.target).find('[name=businessAddress2]').val(),
			businessCity : $(e.target).find('[name=businessCity]').val(),
			businessState : $(e.target).find('[name=businessState]').val(),
			businessZip : $(e.target).find('[name=businessZip]').val(),
			businessCountry : $(e.target).find('[name=businessCountry]').val(),
			email : $(e.target).find('[name=email]').val(),
			//password : $(e.target).find('[name=password]').val(),

		};

		Meteor.call('profileInsert', businessprofile, password, function(error, result) {
			// display the error to the user and abort
			if (error){
				//return alert(error.reason);
				Session.set('errorServerMsg', error.reason);
			}  else {
				//console.log(result._id);				
				Session.set('businessProfileId', result._businessProfileId);
				Session.set('businessLocationId', result._businessLocationId);

				
				if (result._businessProfileId !== null && result._businessLocationId !== null ){
					console.log(result._businessProfileId + " Is not equal to null ");
					Session.set('serverMsg', result._serverMessage);
					Session.set('errorServerMsg', result._serverErrMessage);
					Router.go('campaignscreate');
					Meteor.loginWithPassword(businessprofile.email, password);
			        Session.set('regstep1', true);
				}	
			
		    }
		});
		*/
	}
});
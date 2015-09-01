Template.campaignscreate.events({
	'submit form': function(e,tmpl){
		e.preventDefault();
		//var currentUserId = Meteor.userId();
		var campaign = {
			//userid: currentUserId,
			businessProfileId:  Session.get('businessProfileId'),
			businessLocationId: Session.get('businessLocationId'),
			campaignName : $(e.target).find('[name=campaignName]').val(),
			campaignMessage : $(e.target).find('[name=campaignMessage]').val(),
			campaignCouponImage : $(e.target).find('[name=campaignCouponImage ]').val(),
			coupounsOffered : $(e.target).find('[name=coupounsOffered ]').val(),
			coupounsExpires : $(e.target).find('[name=coupounsExpires]').val(),
			campaignTarget: $(e.target).find('[name=campaignTarget]').val(),

		};

		Meteor.call('campaignInsert', campaign, function(error, result){
			if (error){
				return alert(error.reason)
			} else {
				
				console.log(result._id);
				var resultId = result._id;
				Session.set('campaignId', resultId);
			
				Session.set('regstep', "3");
				Router.go('campaignslist');
			}
		});
	}
});
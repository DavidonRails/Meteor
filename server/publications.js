// Meteor.publish() http://docs.meteor.com/#/full/meteor_publish

Meteor.publish('publishCampaigns', function () {
  var currentUserId = this.userId;
	// display the deals claimed by the current user that is logged in
	return Campaigns.find({userid: currentUserId});
});
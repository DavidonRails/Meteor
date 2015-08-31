// Meteor.publish() http://docs.meteor.com/#/full/meteor_publish

Meteor.publish('publishCampaigns', function () {
  return Campaigns.find();
});
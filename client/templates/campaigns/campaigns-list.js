Template.campaignslist.helpers({
	campaignsCreated: function () {
		return Campaigns.find();
	}
});

Template.campaignslist.onCreated(function(){
  this.subscribe('publishCampaigns');
});
Template.addcampaign.helpers({
	'options' : function(){
		return BusinessLocations.find({}).map(function(rec) { 
              return { label: rec.businessLocation, value: rec.businessProfileId }; 
            });
	}
});


Template.addcampaign.helpers({
	'createdlocations' : function(){
		return BusinessLocations.find();
	}
});

// Template.addcampaign.helpers({
// 	'createdlocations' : function(){
// 		return Businesslocations.find().map(function(rec) { 
//               return { label: rec.name, value: rec. }; 
//             });
// 	}
// });
Template.ionTabs.events({
	'click .add-campaign': function(profile, data){
		IonModal.open('addcampaign');
	},
    
    'click': function (event, template) {
    	
	    if (template.data.path) {
	      Session.set('ionTab.current', template.data.path);
	    }

	    // If the tab's content is being rendered inside of a ionNavView
	    // we don't want to slide it in when switching tabs
	    IonNavigation.skipTransitions = false;
	  }
});
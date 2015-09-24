Router.route('/', {
  name: 'landingpage'
});

Router.route('/business-create', {
  name: 'businesscreate'
});

Router.route('/camera-feature', {
  name: 'camerafeature'
});

Router.route('/campaigns-create', {
  name: 'campaignscreate'
});

Router.route('/campaigns-list', {
  name: 'campaignslist'
});

Router.route('/login');

Router.route('/profile');

var requireLogin = function() { 
  if (! Meteor.user()) {
   // If user is not logged in render landingpage
   this.render('landingpage'); 
 } else {
   //if user is logged in render whatever route was requested
   this.next(); 
 }
}
 
// Before any routing run the requireLogin function. 
// Except in the case of "landingpage". 
// Note that you can add more pages in the exceptions if you want. (e.g. About, Faq, contact...) 
Router.onBeforeAction(requireLogin, {except: ['landingpage', 'login', 'businesscreate', 'campaignscreate']});
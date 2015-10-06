// Add here events and helpers for appLayout
Template.appLayout.rendered = function () {
  if(Meteor.isCordova){
  	cordova.plugins.Keyboard.hideKeyboardAccessoryBar(false);
  }
};
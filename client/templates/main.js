Handlebars.registerHelper('getServerMsg', function(input){
	return Session.get('serverMsg');
});

Handlebars.registerHelper('getErrorServerMsg', function(input){
	return Session.get('errorServerMsg');
});
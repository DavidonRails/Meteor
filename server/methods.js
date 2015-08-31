Meteor.methods({
	profileInsert : function(businessProfileAttributes, password) {
		// check(Meteor.userId(), String);
		check(businessProfileAttributes, {

			businessName : String,
			businessAddress1 : String,
			businessAddress2 : String,
			businessCity : String,
			businessState : String,
			businessZip : String,
			businessCountry : String,
			email: String

		});
		var ba = businessProfileAttributes;
		var address = ba.businessAddress1 + ',' + ba.businessAddress2 + ',' + ba.businessCity + ',' + ba.businessState + ',' + ba.businessZip + ',' + ba.businessCountry;		
		var submitted = new Date();
		
		var _userId = Accounts.createUser({
			email: ba.email, 
			password : password
		});

		if (_userId !== null || _userId !== ''){
			var businessprofile = _.extend(ba, {
				userId : _userId,
				profileStatus : false,
				submitted : submitted
			});
			var _businessProfileId = BusinessProfiles.insert(businessprofile);
			console.log(_businessProfileId);	
			if (_businessProfileId !== null || _businessProfileId !== ''){


				var merchantProfile = {
				businessProfileId : _businessProfileId,
				businessName : ba.businessName,
				profileStatus : false,
				submitted : submitted,			
		    	};

		    	Meteor.users.update(_userId, {$set: {profile:merchantProfile}});


				var businessLocation = {
				    businessProfileId : _businessProfileId,
					businessLocation : 'Location 1',
					businessAddress1 : ba.businessAddress1,
					businessAddress2 : ba.businessAddress2,
					businessCity : ba.businessCity,
					businessState : ba.businessState,
					businessZip : ba.businessCountry
				};
				var _businessLocationId = BusinessLocations.insert(businessLocation);
				if (_businessProfileId !== null || _businessProfileId !== ''){

					return {
						_businessProfileId : _businessProfileId,
						_businessLocationId : _businessLocationId,
						_serverMessage: "Created business profile and location!"
					};
				}
				else{
				console.log (" Could not create location for business profile");
				}	

				

			}
			else{
				console.log (" Could not create business profile for user ");
			}
	
		}
		else {
			console.log (" Could not create user account");
		}
		
		},

	

	campaignInsert: function(campaign){
		var _campaignId = Campaigns.insert(campaign);
		if (_campaignId !== null || _campaignId !== '' ){
			   var options = {
		        host: 'lsqwvdwj:XkCjN01BsPUYUMy10lU4oC_BbgytwnpL@owl.rmq.cloudamqp.com/lsqwvdwj',
		        login: '<login>',
		        password: '<password>',
		        vhost: '<vhost>'
		    };

		    RabbitMQ.createConnection(options);

		    RabbitMQ.connection.on('ready', function () {
		        RabbitMQ.connection.exchange('Project.E.ExchangeName', {type: 'topic'}, function (exchange) {
		            RabbitMQ.exchanges.ExchangeName = exchange;
		            RabbitMQ.emit('ExchangeName is ready');
		        });
		    });

			return {
			_id : _campaignId,
			_serverMessage: "Created campaign!"
		  }
		}	else {
			console.log('Could not create campaign!');
			return {
			  _serverErrMessage: "Could not create a campaign!"
		  }
		}
	}
});
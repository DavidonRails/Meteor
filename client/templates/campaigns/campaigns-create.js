
Session.setDefault("video")
Template.campaignscreate.events({

	'submit form': function(e,tmpl){
		e.preventDefault();
		//var currentUserId = Meteor.userId();
		var campaign = {
			//userid: currentUserId,
			businessProfileId:  Session.get('businessProfileId'),
			businessLocationId: Session.get('businessLocationId'),
			campaignName : $(e.target).find('[name=campaignName]').val(),
			campaignMessage : $(e.target).find('[name=campaignMessage]').val(),
			campaignCouponImage : $(e.target).find('[name=campaignCouponImage ]').val(),
			coupounsOffered : $(e.target).find('[name=coupounsOffered ]').val(),
			coupounsExpires : $(e.target).find('[name=coupounsExpires]').val(),
			campaignTarget: $(e.target).find('[name=campaignTarget]').val(),

		};

		Meteor.call('campaignInsert', campaign, function(error, result){
			if (error){
				return alert(error.reason);
			} else {
				
				console.log(result._id);
				var resultId = result._id;
				Session.set('campaignId', resultId);
			
				Session.set('regstep', "3");
				Router.go('campaignslist');
			}
		});
	}
});

Template.campaigneditimage.events({
	'click .campaign_camera_button': function(e,t){
	    if(Meteor.isCordova){

			/************ Cordova Camera Plugins Constants *************
			Camera.DestinationType = {
			  DATA_URL : 0,      // Return image as base64-encoded string
			  FILE_URI : 1,      // Return image file URI
			  NATIVE_URI : 2     // Return image native URI (e.g., assets-library:// on iOS or content:// on Android)
			};


			Camera.PictureSourceType = {
			  PHOTOLIBRARY : 0,
			  CAMERA : 1,
			  SAVEDPHOTOALBUM : 2
			};
			************************************************************/

			var options = { 
				quality : 100,
				destinationType : Camera.DestinationType.DATA_URL, 
				sourceType : Camera.PictureSourceType.PHOTOLIBRARY, 
				allowEdit : true,
				encodingType: Camera.EncodingType.JPEG,
				targetWidth: 300,
				targetHeight: 300,
				popoverOptions: CameraPopoverOptions,
				saveToPhotoAlbum: false
			};

			/*
			navigator.camera.getPicture(function suceess(imageData){ 
			    item_photo = "data:image/jpeg;base64," + imageData;
			    
			    //item_photo = imageData;
			    Session.set('cphoto', item_photo);
			    Session.set('cvisible', 'block');
				
			    var fileName = new Date().getTime() + "_ALBERT.jpg";
				
			    //uploadS3(item_photo, fileName);
			}, function fail(mesaage){ 
				alert('Failed because: ' + mesaage);
			}, {limit:3});
			*/

			// Or MeteorCamera in mdg:camera
			
			
			MeteorCamera.getPicture(options, function(error, data){

				if(!error) {
					

					var newFile = new FS.File();
					// newFile.metadata = {owner: Meteor.userId()};

					newFile.attachData(data, function(error) {
						console.log(error);

						var fileName = new Date().getTime() + ".jpg";

						newFile.name(fileName);
						uploading_proc(newFile);
					});   


				} else {
					sAlert.success(error, {effect:'flip', onRouteClose: false, position:'top', timeout: 10000});
				}
			});
		}
	}
});

Template.campaigneditimage.helpers({
  'campaign_photo': function(){
    return Session.get('cPhoto');
  },

  'campaign_photo_visible' : function() {
  	return Session.get("cVisible");
  },

  'campaing_photo_name' : function() {
  	return Session.get('cFilename');
  },

  'get_image': function () {
    return uploadImageCollection.find(); // Where Images is an FS.Collection instance
  }

});

function uploading_proc (file) {
	
	uploadImageCollection.insert(file, function (err, fileObj) {
		// Inserted new doc with ID fileObj._id, and kicked off the data upload using HTTP
		
		if(err) {
			alert("Image Upload Failed!");
			console.log(err);
		} else {
			alert("Image Upload Success!");

			console.log("========================");
			console.log("collectionName : "  + fileObj.collectionName);
			console.log(fileObj.extension());
			console.log(fileObj.size());
			console.log(fileObj.type());
			console.log(fileObj.updatedAt());
			console.log("original name : " + fileObj.original.name);
			console.log("Absolute URL : " + Meteor.absoluteUrl());

			var fileName = fileObj.collectionName + '-' + fileObj._id + '-' + fileObj.original.name;

			Session.set("cPhoto", fileObj);
			Session.set('cFileId', fileObj._id);
			Session.set('cFilename', fileObj.name());
			Session.set('cPhoto', "uploads/" + fileName);
			Session.set('cVisible', 'block');
		}

	});
}

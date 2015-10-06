Template.camerafeature.events({
  'click .scan_code_buttton' : function(event, template) {

    if(Meteor.isCordova){

          cordova.plugins.barcodeScanner.scan(
              function (result) {
                  var msg = "We got a barcode\n" +
                    "Result: " + result.text + "\n" +
                    "Format: " + result.format + "\n" +
                    "Cancelled: " + result.cancelled;
                  
                  //alert(msg);

                  sAlert.success(msg, {effect:'flip', onRouteClose: false, position:'top', timeout: 10000});

                  Session.set('barcode_content', result.text);
                  $(".barcode_content").text(Session.get("barcode_content"));
              },
              function (error) {
                  alert("Scanning failed: " + error);
              }
          );

        Meteor.startup(function () {

          sAlert.config({
              effect: '',
              position: 'top-right',
              timeout: 5000,
              html: false,
              onRouteClose: true,
              stack: true,
              // or you can pass an object:
              // stack: {
              //     spacing: 10 // in px
              //     limit: 3 // when fourth alert appears all previous ones are cleared
              // }
              offset: 0, // in px - will be added to first alert (bottom or top - depends of the position in config)
              beep: false
              // examples:
              // beep: '/beep.mp3'  // or you can pass an object:
              // beep: {
              //     info: '/beep-info.mp3',
              //     error: '/beep-error.mp3',
              //     success: '/beep-success.mp3',
              //     warning: '/beep-warning.mp3'
              // }
          });
          
          /*
          navigator.notification.vibrate(1000);

          navigator.notification.alert(
              'Got a Barcdoe Contents:',
              function() {
                alert("notification");
              },
              'Campaign Coupon',
              ['Okay']
          );
          */
        });
    }
  }

});

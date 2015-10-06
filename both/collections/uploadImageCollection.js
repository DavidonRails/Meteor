/*
		Starting with:
		~ = user-home-folder
		. = current-folder
		.. = previous folder of the current folder
		/ = from root folder
*/


var base = "";
if (Meteor.isServer) {
  base = process.env.PWD;
}

uploadImageCollection = new FS.Collection("images", {
  stores: [
  	new FS.Store.FileSystem("images", {
  		path: base + "/public/uploads"
  	})
  ],

  filter: {
    maxSize: 1048576 * 3, // in bytes
    allow: {
      contentTypes: ['image/*']
    },

    onInvalid: function (message) {
      if (Meteor.isClient) {
        alert(message);
      } else {
        console.log(message);
      }
    }
  }
});

uploadImageCollection.allow({
  insert : function () {
    // add custom authentication code here
    return true;
  },

  update : function () {
    return true;
  },

  remove : function () {
    return true;
  },

  download : function () {
    return true;
  }
});
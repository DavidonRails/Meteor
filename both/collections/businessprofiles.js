BusinessProfiles = new Mongo.Collection('businessprofiles');
// BusinessProfiles.attachSchema(new SimpleSchema({
//   businessName: {
//     type: String,
//     label: "Business Name",
//     max: 200
//   },
//   businessAddress1: {
//     type: String,
//     label: "Address 1",
//     max: 200
//   },
//   businessAddress2: {
//     type: String,
//     label: "Address 2",
//     optional: true,
//     max: 200
//   },
//   businessCity: {
//     type: String,
//     label: "City",
//     max: 200
//   },
//   businessState: {
//     type: String,
//     label: "State",
//     max: 200
//   },
//   businessZip: {
//     type: String,
//     label: "Zipcode",
//     min: 0
//   },

//   businessCountry: {
//     type: String,
//     label: "Country",
//     max: 200
//   },
//   email: {
//     type: String,
//     regEx: SimpleSchema.RegEx.Email,
//     label: "E-mail address"
//    },
//   // password: {
//   //   type: String,
//   //   label: 'Password'
//   // }
// }));

// BusinessProfiles.allow({
//   insert: function () { return true; },
//   update: function () { return true; },
//   remove: function () { return true; }
// });


Campaigns = new Mongo.Collection('campaigns');
// Campaigns.attachSchema(new SimpleSchema({
//   campaignName: {
//     type: String,
//     label: "Campaign Name",
//     max: 200
//   },
//   campaignMessage: {
//     type: String,
//     label: "Campaign Message",
//     max: 500
//   },
//   campaignCouponImage: {
//     type: String,
//     label: "Coupon Image",
//     optional: true
//   },
//   coupounsOffered: {
//     type: Number,
//     label: "Coupouns Offered in Campaign",
//   },
//   coupounsExpires: {
//     type: Number,
//     label: "Coupons Expires in Hrs",
//   },
//   campaignTarget: {
//     type: Number,
//     label: "Campaign Target Distance in Miles",
//   }
// }));

// Campaigns.allow({
//   insert: function () { return true; },
//   update: function () { return true; },
//   remove: function () { return true; }
// });
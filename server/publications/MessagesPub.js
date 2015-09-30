Meteor.publish('Messages', function () {
  if(!this.userId) return [];
  return Message.find({ country: Meteor.users.findOne(this.userId).profile.country });
});

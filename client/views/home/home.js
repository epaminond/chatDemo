Template.home.events({
  'click .js-send-btn': function(e, template) {
    var message = template.$('.js-message-input').val(),
        user    = Meteor.user();
    if(!user) return;
    Message.insert({
      content: message,
      userId: user._id,
      country: user.profile.country,
      userName: user.profile.name,
      createdAt: new Date()
    });
  }
});

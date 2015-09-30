Router.route('/', {
  name: 'home',
  waitOn: function () {
    return Meteor.subscribe('Messages');
  },
  data: function () {
    return { messages: Message.find() };
  },
  onAfterAction: function () {
    SEO.set({ title: 'Home -' + Meteor.App.NAME });
  }
});

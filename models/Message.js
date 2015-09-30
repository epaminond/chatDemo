Message = new Mongo.Collection('Message');

Message.attachSchema(
    new SimpleSchema({
    content: {
      type: String
    },
    country: {
      type: String
    },
    userId: {
      type: String
    },
    userName: {
      type: String
    },
    createdAt: {
      type: Date,
      denyUpdate: true
    }
  })
);

// Collection2 already does schema checking
// Add custom permission rules if needed
if (Meteor.isServer) {
  Message.allow({
    insert : function () {
      return true;
    },
    update : function () {
      return true;
    },
    remove : function () {
      return true;
    }
  });
}

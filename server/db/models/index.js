const Conversation = require("./conversation");
const User = require("./user");
const Message = require("./message");
const ConversationMember = require("./conversationMember");

// associations

User.belongsToMany(Conversation, { through: ConversationMember });
Conversation.belongsToMany(User, { through: ConversationMember });

module.exports = {
  User,
  Conversation,
  Message,
};

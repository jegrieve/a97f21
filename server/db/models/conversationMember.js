const db = require("../db");
const Sequelize = require("sequelize");
const Conversation = require("./conversation");
const User = require("./user");

const ConversationMember = db.define("conversationMember", {
  conversationId: {
    type: Sequelize.INTEGER,
    allowNull: false,
    references: {
      model: Conversation,
      key: "id",
    },
  },
  memberId: {
    type: Sequelize.INTEGER,
    allowNull: false,
    references: {
      model: User,
      key: "id",
    },
  },
  lastRead: {
    type: Sequelize.INTEGER,
    allowNull: true,
  },
});

module.exports = ConversationMember;

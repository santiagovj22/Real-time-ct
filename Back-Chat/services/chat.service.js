const chat = require("../models").chat;

class ChatService {
  constructor() {}

  async setMessage(data) {
    await chat.create(data);
  }
}

module.exports = new ChatService();

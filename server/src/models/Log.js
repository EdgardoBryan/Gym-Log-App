const Model = require("./Model.js");

class Log extends Model {
  static get tableName() {
    return "logs";
  }
  static get jsonSchema() {
    return {
      type: "object",
      required: ["date"],
      properties: {
        date: { type: "string" },
        weight: { type: "string" },
      },
    };
  }
}

    module.exports = Log
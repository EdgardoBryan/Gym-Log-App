const Model = require("./Model.js");

class Exercise extends Model {
  static get tableName() {
    return "exercises";
  }
  static get jsonSchema() {
    return {
      type: "object",
      required: ["name", "sets", "reps"],
      properties: {
        name: { type: "string" },
        sets: { type: "sets" },
        reps: { type: "reps" },
        notes: { type: "string" },
      },
    };
  }
}

module.exports = Exercise
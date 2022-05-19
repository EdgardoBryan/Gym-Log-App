const Model = require("./Model.js");

class Exercise extends Model {
  static get tableName() {
    return "exercises";
  }
  static get relationMappings(){
    const { Log } = require("./index.js")

    return {
      log:{
        relation: Model.BelongsToOneRelation,
        modelClass:Log,
        join:{
          from:"exercise.logId",
          to:"logs.id"
        }
      }
    }
  }

  static get jsonSchema() {
    return {
      type: "object",
      required: ["name", "sets", "reps"],
      properties: {
        name: { type: "string" },
        sets: { type: "string" },
        reps: { type: "string" },
        notes: { type: "string" },
      },
    };
  }
}

module.exports = Exercise
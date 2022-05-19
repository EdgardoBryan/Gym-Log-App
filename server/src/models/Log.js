const Model = require("./Model.js");

class Log extends Model {
  static get tableName() {
    return "logs";
  }

  static get relationMappings(){
    const { Exercise } = require("./index.js")
    return {
      exercises:{
        relation: Model.HasManyRelation,
        modelClass:Exercise,
        join:{
          from:"logs.id",
          to:"exercise.logId"
        }
      }
    }
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
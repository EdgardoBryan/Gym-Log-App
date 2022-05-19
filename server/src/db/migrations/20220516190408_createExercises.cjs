/**
 * @typedef {import("knex")} Knex
 */

/**
 * @param {Knex} knex
 */
exports.up = async (knex) => {
    return knex.schema.createTable ("exercises",(table)=>{
        table.bigIncrements("id")
        table.string("name").notNullable()
        table.integer("sets").notNullable()
        table.integer('reps').notNullable()
        table.string("notes")
        table.bigInteger("logId").unsigned().index().notNullable().references("logs.id")
        table.bigInteger("userId").unsigned().index().notNullable().references("users.id")
        table.timestamp("createdAt").notNullable().defaultTo(knex.fn.now())
        table.timestamp("updatedAt").notNullable().defaultTo(knex.fn.now())
    })
}

/**
 * @param {Knex} knex
 */
exports.down = (knex) => {
    return knex.schema.dropTableIfExists("exercises")
}

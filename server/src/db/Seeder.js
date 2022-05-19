/* eslint-disable no-console */
import { connection } from "../boot.js"
import LogSeeder from "../db/migrations/Seeders/LogSeeder.js"

class Seeder {
  static async seed() {
    // include individual seed commands here
    console.log("seeding Logs!!")
    await LogSeeder.seed()
    //console.log("Seeding exercises!!")
    //await ExerciseSeeder.seed()
    console.log("Done!")
    await connection.destroy()
  }
}

export default Seeder
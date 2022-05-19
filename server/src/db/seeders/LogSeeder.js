import { Log } from "./../../models/index.js";

class LogSeeder {
    static async seed() {
        const logsData = [
            {
                date: "12/25",
                weight: "180"
            },
            {
                date: "07/05",
                weight: "190"
            },

        ]

        for (const singleLogData of logsData) {
            const currentLog = await Log.query().findOne(singleLogData)
            if (!currentLog) {
                await Log.query().insert(singleLogData)
            }
        }
    }
}

export default LogSeeder
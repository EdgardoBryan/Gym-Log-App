import Express from "express"

import MotivationClient from "../../../apiClient/MotivationClient.js"

const ZenQuotesRouter = new Express.Router()

ZenQuotesRouter.get("/", async (req, res) => {
  try {
    const quoteResponse = await MotivationClient.getQuote()
    const quoteData = JSON.parse(quoteResponse)
    return res
      .set({ "Content-Type": "application/json" })
      .status(200)
      .json(quoteData)
  } catch (error) {
    return res.status(401).json({ errors: error })
  }
})

export default ZenQuotesRouter
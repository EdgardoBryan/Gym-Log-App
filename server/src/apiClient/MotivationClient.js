import got from "got"

// const openWeatherApiKey = "18fa3935ce762da4d0585c6ea2e4d065";


class MotivationClient {   
  static async getQuote() {
    try {
      const api_url ="https://zenquotes.io/api/quotes/";
      const apiResponse = await got(api_url);
      console.log(apiResponse)
      const responseBody = apiResponse.body;
      return responseBody;
    } catch (error) {
      return { error: error.message };
    }
  }
}

export default MotivationClient;


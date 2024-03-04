class BandSiteApi {
  constructor(apiKey) {
    this.apiKey = apiKey;
    this.url = "https://unit-2-project-api-25c1595833b2.herokuapp.com";
  }

  async postComment(comment) {
    console.log(comment);
    try {
      const response = await axios.post(
        `${this.url}/comments?api_key=${this.apiKey}`,
        comment
      );
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }

  async getComments() {
    try {
      const response = await axios.get(
        `${this.url}/comments?api_key=${this.apiKey}`
      );
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }

  async getShowDates() {
    try {
      const response = await axios.get(
        `${this.url}/showdates?api_key=${this.apiKey}`
      );
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }
}

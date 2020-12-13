export class ApiHandler {
  constructor(api) {
    this.api = api;
  }

  async getData() {
    const response = await fetch(this.api);
    const data = await response.json();
    return data;
  }

  async getData(requestBody) {
    const response = await fetch(this.api, {
      method: "POST",
      body: requestBody,
    });
    const data = await response.json();
    return data;
  }
}

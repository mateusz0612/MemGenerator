export class ApiHandler {
  constructor(api) {
    this.api = api;
  }

  async getData() {
    const response = await fetch(this.api);
    const data = await response.json();
    return data;
  }
}

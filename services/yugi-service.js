export class YugiService {
  constructor() {
    this.apiUrl = "https://db.ygoprodeck.com/api/v7/cardinfo.php?num=100&offset=0";
  }

  fetchCards() {
    return fetch(this.apiUrl)
    .then((response) => response.json())
    .then((data) => data.data);
  }
}
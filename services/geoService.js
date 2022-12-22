const fetch = require("node-fetch");
require('dotenv').config();

class GeoService {
    constructor() {
        this.apiKey = process.env.GEO_API_KEY ||  "";
        this.url = process.env.GEO_API_URL ||  "";
    }

    async getLocationByIp(ipAddress) {
        const requestUrl = `${this.url}/?apiKey=${this.apiKey}&ipAddress=${ipAddress}`;
        let response = await fetch(requestUrl);
        return (await response.json()).location.country;
    }
}

module.exports = GeoService;
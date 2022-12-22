const fetch = require("node-fetch");
require('dotenv').config();

class FbiService {
    constructor() {
        this.url = process.env.FBI_API_URL || "";
    }

    async caseExists(caseTitle) {
        let result = await fetch(`${this.url}/list?title=${caseTitle}`);
        result = await result.json();
        return result.total !== 0;
    }
}

module.exports = FbiService;
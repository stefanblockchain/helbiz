const fetch = require("node-fetch");

class FbiService {
    constructor(url) {
        this.url = url;
    }

    async caseExists(caseTitle) {
        let result = await fetch(`${this.url}/list?title=${caseTitle}`);
        result = await result.json();
        return result.total !== 0;
    }
}

module.exports = FbiService;
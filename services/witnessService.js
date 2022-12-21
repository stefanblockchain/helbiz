const fileStream = require('../utils/fileStream');
const NumberService = require('./numberService');
const FbiService = require('./fbiService');
const Witness = require('../models/witness');

class WitnessService {

    async addWitness(caseTitle, phoneNumber) {
        let witnesses = await this.readWitness();

        if (this.#witnessExists(witnesses, caseTitle, phoneNumber))
            throw new Error('Witness exists');

        const countryCode = this.getCountryCode(phoneNumber);

        const fbiService = new FbiService("https://api.fbi.gov/wanted/v1");
        const caseExists = await fbiService.caseExists(caseTitle);
        if (!caseExists) throw new Error('Case not exists')

        const witness = new Witness(caseTitle, phoneNumber, countryCode);
        witnesses.push(witness);
        await fileStream.writeStream(witnesses);
        return witness;
    }

    async getAll() {
        let witnesses = await this.readWitness();
        return witnesses;
    }

    #witnessExists(witnesses, caseTitle, phoneNumber) {
        const exists = witnesses.find(el => (el.caseTitle === caseTitle && el.phoneNumber === phoneNumber));
        return exists;
    }

    getCountryCode(phoneNumber) {
        return NumberService.getCountryCode(phoneNumber);
    }

    async readWitness() {
        const pathExists = await fileStream.pathExists();
        if (!pathExists) return [];
        return await fileStream.readStream();
    }
}

module.exports = WitnessService;
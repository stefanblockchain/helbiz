const { v4: uuidv4 } = require('uuid');

class Witness {

  constructor(caseTitle, phoneNumber, country) {
    this.id = uuidv4();
    this.caseTitle = caseTitle;
    this.phoneNumber = phoneNumber;
    this.country = country;
  }
}

module.exports = Witness;
const phoneUtil = require('google-libphonenumber').PhoneNumberUtil.getInstance();

class NumberService {
    static getCountryCode(phoneNumber) {
        const number = phoneUtil.parse(phoneNumber);
        const countryCode = phoneUtil.getRegionCodeForCountryCode(number.getCountryCode());
        return countryCode;
    }
}

module.exports = NumberService;
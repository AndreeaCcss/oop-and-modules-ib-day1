const assert = require("assert")
const getUserBirthDate = require('./getUserBirthDate')

const user = { birthday: 558662400000}
const user2 = { dateOfBirth: "1990-04-01"}

describe("getUserBirthDate", function() {
    // tests go here
    it("it is a function", () => {
        assert.ok(typeof getUserBirthDate === "function" )
    })
    it("it returns the birthday", () => {
        let userBirthday = getUserBirthDate(user);
        assert.equal(userBirthday, 558662400000 )
    })
    it("it returns a parsed date of birth ", () => {
        // Date.parse(user2.dateOfBirth)
        let userDateOfBirth = 638928000000;
        assert.equal(getUserBirthDate(user2), userDateOfBirth)
    })
})
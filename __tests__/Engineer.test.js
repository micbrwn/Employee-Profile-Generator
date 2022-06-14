const Employee = require('../lib/Employee');
const Engineer = require('../lib/Engineer');

// test constructor to set github user
test("Can set gitHub username", () => {
    const testValue = 'gitHubUser'
    const e = new Engineer('Steven', 1, "tester@test.com", testValue)
    expect(e.github).toBe(testValue)
});

// test get role method. it should return Engineer
test("getRole() returns `Engineer`", () => {
    const testValue = "Engineer";
    const e = new Engineer('Steven', 1, "tester@test.com", "gitHubUser");
    expect(e.getRole()).toBe(testValue)
});

// test get github method. it should return github username
test("Can get gitHub username through getGithub()", () => {
    const testValue = "gitHubUser";
    const e = new Employee('Steven', 1, 'tester@test.com', testValue);
    expect(e.getGithub()).toBe(testValue)
});

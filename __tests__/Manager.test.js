const Manager = require('../lib/Manager');
const Employee = require('../lib/Employee');

// test constructor to set office number
test("can set office number", () => {
    const testValue = 10;
    const e = new Employee('Steve', 1, "tester@test.com", testValue)
    expect(e.officeNumber).toBe(testValue)
});

// test get role method. it should return "Manager"
test("getRole() returns `Manager`", () => {
    const testValue = 'Manager'
    const e = new Employee('Steven', 1, 'tester@test.com', 10);
    expect(e.getRole()).toBe(testValue)
});

// test get office number method
test("Can get office number through getOfficeNumber()", () => {
    const testValue = 10;
    const e = new Employee('Steve', 1, "tester@test.com", testValue)
    expect(e.getOfficeNumber).toBe(testValue)
});
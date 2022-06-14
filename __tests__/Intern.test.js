const Employee = require("../lib/Employee");
const Intern = require("../lib/Intern");

// test constructor to set school
test("Can set school", () => {
    const testValue = "NYU"
    const e = new Employee('Steven', 1, 'tester@test.com', testValue)
    expect(e.school).toBe(testValue)
});

// test get role method.
test("getRole returns `Intern`", () => {
    const testValue = 'Intern';
    const e = new Employee('Steven', 1, "tester@test.com", 'NYU')
    expect(e.getRole()).toBe(testValue)
});

// test get school method
test("Can get school through getSchool()", () => {
    const testValue = 'NYU';
    const e = new Employee('Steven', 1, 'tester@test.com', testValue)
    expect(e.getSchool()).tobe(testValue);
});
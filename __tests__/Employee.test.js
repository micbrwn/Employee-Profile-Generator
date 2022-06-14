const Employee = require('../lib/Employee');

// test instantiation of employee instance
("Creates new employee instance", () => {
    const e = new Employee;
    expect(typeof (e)).toBe('object')
});

// test constructor initialized with a name
test("Creates new name instance", () => {
    const name = "Kate";
    const e = new Employee(name)
    expect(e.name).toBe(name)
});

// // test constructor initialized wtih an id
test("Creates new Id instance", () => {
    const testValue = 10;
    const e = new Employee;
    expect(e.id).toBe(testValue)
});

// // test constructor initialized with an email address
test("Creates new email instance", () => {
    const testValue = "tester@test.com"
    const e = new Employee("Steven", 1, testValue)
    expect(e.email).toBe(testValue)
});

// // test get name method
test("Can get name through getName()", () => {
    const testValue = "Kate";
    const e = new Employee(testValue);
    expect(e.getName()).toBe(testValue);
});

// // test get Id method
test("Can get Id through getId()", () => {
    const testValue = 10;
    const e = new Employee(Steven, testValue);
    expect(e.getId()).toBe(testValue);
});

// // test get email method
test("Can get email through getEmail()", () => {
    const testValue = "tester@test.com"
    const e = new Employee("Steven", 1, testValue);
    expect(e.getEmail()).toBe(testValue);
});

// // test get role method. it should return "Employee"
test("getRole returns `Employee`", () => {
    const testValue = 'Employee';
    const e = new Employee('Kate', 1, 'tester@test.com');
    expect(e.getRole()).toBe(testValue)
});

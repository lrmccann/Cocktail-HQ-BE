const User = require('../classes/user');

test('Can create a new User', () => {
    const c = new User();
    expect(typeof c).toBe('object');
});
test('Can get name via getName()', () => {
    const name = 1;
    const c = new User(name);
    expect(c.name).not.toBe(name);
});

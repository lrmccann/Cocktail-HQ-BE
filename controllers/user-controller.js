const User = require('../classes/user');

exports.read = async (req, res) => {
    const id = req.params.id;
    const user = new User();
    await user.getUserById(id);
    res.json(user.getLiteral());
}
exports.newUser = async (req, res) => {
    const user = new User(req.body);
    await user.newUser();
    res.json(user.getLiteral());
}
exports.updateUserById = async (req, res) => {
    const id = req.params.id;
    const user = new User();
    user.merge(req.body);
    await user.updateUserById(id);
    res.json(user.getLiteral());
}

exports.deleteUserById = async (req, res) => {
    const id = req.params.id;
    const user = new User();
    await user.deleteUserById(id);
    res.json({ deleted: true });
}
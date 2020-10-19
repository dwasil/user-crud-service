const userRepository = require('../repository/user.repository.js');

exports.create = async (req, res) => {

    const result = await userRepository.create({
        username: req.body.username,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        phone: req.body.phone
    });

    const status = result ? 200 : 500;
    res.sendStatus(status);
};

exports.findAll = async (req, res) => {
    const result = await userRepository.findAll();
    res.status(200).send(result);
};

exports.findOne = async (req, res) => {

    const result = await userRepository.findOne(req.params.userId);

    if (result.length) {
        res.status(200).send(result);
    }
    else {
        res.sendStatus(404);
    }
};

exports.update = async (req, res) => {

    const result = await userRepository.update(
        req.params.userId,
        req.body
    );
    const status = result ? 200 : 500;
    res.sendStatus(status);
}

exports.delete = async (req, res) => {
    await userRepository.delete(req.params.userId);
    res.sendStatus(204);
};

exports.db = async (req, res) => {
    const dbClient = require('../db/db.client.js');
    const dbRes = await dbClient.query('SELECT NOW()');
    res.status(200).send(dbRes.rows);
};

exports.config = (req, res) => {
    res.status(200).send(process.env);
};
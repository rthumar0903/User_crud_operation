const authService = require('../services/authService');

exports.register = async (req, res) => {
  try {
    await authService.createUser(req.body.username, req.body.password);
    res.status(201).send({ message: 'User registered successfully.' });
  } catch (error) {
    res.status(500).send({ error: 'Registration failed.' });
  }
};

exports.login = async (req, res) => {
  try {
    const token = await authService.authenticate(req.body.username, req.body.password);
    res.status(200).send({ token });
  } catch (error) {
    res.status(401).send({ error: 'Invalid username or password.' });
  }
};

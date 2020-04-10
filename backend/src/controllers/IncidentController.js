const conection = require('../database/connection');

module.exports = {
  async create(req, res) {
    const { title, description, value } = req.body;
    const ong_id = req.headers.authorization;

    const [id] = await conection('incidents').insert({
      title,
      description,
      value,
      ong_id,
    });

    return res.json({ id });
  }
}
const connection = require('../database/connection');
const crypto = require('crypto');

module.exports = {
  async index(req,res) {
    const ongs = await connection('ongs').select('*');

    return res.json(ongs);
  },

  async create(req, res) {
    // desustrituração, pegando apenas os parâmetros necessários do corpo da requisição
    const { name, email, whatsapp, city, uf } = req.body;
    // gerando um id com 4 bytes e convertendo para hexadecimal
    const id = crypto.randomBytes(4).toString('HEX');

    // usando a conexão com o banco na tabela selecionada e fazendo um insert
    // esse comando pode demorar um pouco, recomenda-se usar o AWAIT
    await connection('ongs').insert({
      id,
      name,
      email,
      whatsapp,
      city,
      uf,
    })

    return res.json({ id });
  }
}
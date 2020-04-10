const connection = require('../database/connection');

module.exports = {
  async index(req,res) {
    const incidents = await connection('incidents').select('*');

    return res.json(incidents);
  },

  async create(req, res) {
    const { title, description, value } = req.body;
    const ong_id = req.headers.authorization;

    const [id] = await connection('incidents').insert({
      title,
      description,
      value,
      ong_id,
    });

    return res.json({ id });
  },

  async delete(req,res) {
    const { id } = req.params;
    const ong_id = req.headers.authorization;
    
    // selecionando os incidents de acordo com o id que veio na requisição
    const incident = await connection('incidents')
      .where('id', id)
      .select('ong_id')
      .first();
    
    if (incident.ong_id !== ong_id) {
      // Caso o id da ong que quer apagar o registro seja diferente da ong cadastrada, não será permitida a operação
      return res.status(401).json({error: "Operation not permitted."});
    }
    
    // deletando o registro
    await connection('incidents').where('id', id).delete();

    // retornando sucesso, porém resposta sem conteúdo
    return res.status(204).send();
  },
}
const connection = require('../database/connection');

module.exports = {
  async index(req, res){
    try {
      const user_id = req.headers.authorization;

      if(!user_id){
        return res.status(401).json({error: "unauthorizated"});
      }

      const lists = await connection('lists')
      .where({user_id})
      .select('*')
      .finally()

      if(lists[0].user_id != user_id){
        return res.status(401).json({error: "unauthorizated"});
      }

      return res.json(lists);

    } catch (error) {
      return res.json(error);
    }
  },
  
  async create(req, res){
    try {
      const user_id = req.headers.authorization;
      const { title } = req.body;
      
      const user = await connection('users')
      .where({id: user_id})
      .first();

      if(!user){
        return res.status(400).json({error: "this user doesn't exists"});
      }

      if(!title){
        return res.status(400).json({error: "list needs to have a title"});
      }

      const response = await connection('lists')
      .insert({
        title,
        user_id
      });

      if(!response){
        return res.status(500).send();
      }

      return res.status(201).send();

    } catch (error) {
      return res.json(error);
    }
  },
  
  async update(req, res){
    try {
      const { id } = req.query;
      const user_id = req.headers.authorization;
      const { title } = req.body;

      const list = await connection('lists')
      .where({id})
      .select('user_id')
      .first();

      if(list.user_id != user_id){
        return res.status(401).json({error: "Unauthorizated"});
      }

      const user = await connection('users')
      .where({id: user_id})
      .first();

      if(!user){
        return res.status(400).json({error: "this user doesn't exists"});
      }

      const response = await connection('lists')
      .where({id})
      .update({
        title
      });

      return res.status(201).send();

    } catch (error) {
      return res.json(error);
    }
  },

  async delete(req, res){
    try {
      const { id } = req.query;
      const user_id = req.headers.authorization;

      const check = await connection('lists')
      .where({id})
      .first();

      if(user_id != check.user_id){
        return res.status(401).json({error: "unauthorizated"});
      }

      const del = await connection('lists')
      .where({id})
      .del();

      return res.stauts(201).send();

    } catch (error) {
      return res.json(error);
    }
  }
}
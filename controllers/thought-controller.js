const { Thought, User } = require('../models');

module.exports = {
    async getThought(req, res) {
      try {
        const posts = await Post.find()
          .populate({ path: 'tags', select: '-__v' });
  
        res.json(posts);
      } catch (err) {
        console.error({ message: err });
        res.status(500).json(err);
      }
    },

    // create a new thought
    async createThought(req, res) {
      try {
        const post = await Post.create(req.body);
        res.json(post);
      } catch (err) {
        res.status(500).json(err);
      }
    },
  };
  
const Comment = require('../models/commentModel');

const createComment = async (req, res) => {
  const { comment } = req.body;
  if (!comment) {
    return res.status(400).json({ error: 'Comment are required' });
  }

  try {
    const newComment = new Comment({ comment });
    const result = await newComment.save();
    res.status(201).json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};



const getComments = async (req, res) => {
  try {
    const comments = await Comment.find();
    res.status(200).json(comments);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  createComment,
  getComments,
};

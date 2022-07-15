const db = require("../models");
const Comment = db.comment;
const Post = db.post;

const addComment = async (req, res) => {
  const id = req.params.id;

  let data = {
    post_id: id,
    usernama: req.body.usernama,
    text: req.body.text,
  };

  const comment = await Comment.create(data);
  res.status(200).send(comment);
};

const getAllComments = async (req, res) => {
  const comments = await Comment.findAll({
    order: [["created_at", "DESC"]],
    include: [
      {
        model: Post,
        as: "post",
      },
    ],
  });
  res.status(200).send(comments);
};

const deleteComment = async (req, res) => {
  let id = req.params.id;

  await Comment.destroy({ where: { id: id } });

  res.status(200).send("Comment is deleted !");
};

module.exports = {
  addComment,
  getAllComments,
  deleteComment,
};

import React from "react";
import PropTypes from "prop-types";
import "./post.css";

const Post = ({ post }) => {
  return (
    <div className="post">
      <div className="profile">
        <a href="/profile">
          <img
            className="photo-pr"
            src="src/assets/imag/profile.jpeg"
            alt="Профиль пользователя"
          />
        </a>
        <a href="/profile">Когумбаева Данель</a>
      </div>

      <div className="content">
        <p>{post.text}</p>
        {post.attachment && (
          <p className="attachment">📎 {post.attachment.name}</p>
        )}
      </div>
    </div>
  );
};

Post.propTypes = {
  post: PropTypes.shape({
    text: PropTypes.string.isRequired, // текст обязательно должен быть строкой
    attachment: PropTypes.shape({
      name: PropTypes.string.isRequired, // если attachment передан, то у него должно быть поле name типа string
    }),
  }).isRequired, // пропс post обязательно должен передаваться
};

export default Post;

import Post from "../post/post";
import React from "react";
import PropTypes from "prop-types";

const NewsFeed = ({ posts, filter }) => {
  return (
    <div className="feed">
      {posts
        .filter((post) => filter === "Все" || post.recipient === filter)
        .map((post, index) => (
          <Post key={index} post={post} />
        ))}
    </div>
  );
};

NewsFeed.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired, // Предполагаем, что у поста есть id (можно заменить index)
      recipient: PropTypes.string.isRequired, // Получатель поста
      content: PropTypes.string.isRequired, // Содержимое поста
    })
  ).isRequired, // Обязательный массив постов
  filter: PropTypes.string.isRequired, // Текущий фильтр (например, "Все" или конкретный пользователь)
};

export default NewsFeed;

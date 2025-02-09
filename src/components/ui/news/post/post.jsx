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

export default Post;

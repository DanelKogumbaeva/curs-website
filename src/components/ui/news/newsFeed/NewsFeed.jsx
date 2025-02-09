import Post from "../post/post";

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

export default NewsFeed;

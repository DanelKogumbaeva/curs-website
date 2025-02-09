import React from "react";
import { useState } from "react";
import "./News.css";
import ButtonPanel from "../buttonPanel/buttonPanel";

import NewsFeed from "../newsFeed/NewsFeed.jsx";
import FilterPanel from "../filterPanel/filterPanel.jsx";
import PostForm from "../postForm/postForm.jsx";

const News = () => {
  const [posts, setPosts] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [filter, setFilter] = useState("Все");
  const [showFilter, setShowFilter] = useState(false);

  const handleAddPost = () => setShowForm(true);
  const onClose = () => setShowForm(false);
  const handleFilterToggle = () => setShowFilter(!showFilter);

  const handleSubmit = (newPost) => {
    setPosts([newPost, ...posts]);
    setShowForm(false);
  };

  return (
    <main>
      <ButtonPanel
        onAddPost={handleAddPost}
        toggleFilter={handleFilterToggle}
      />

      {showFilter && <FilterPanel setFilter={setFilter} />}

      <NewsFeed posts={posts} filter={filter} />

      {showForm && <PostForm onClose={onClose} onSubmit={handleSubmit} />}
    </main>
  );
};

export default News;

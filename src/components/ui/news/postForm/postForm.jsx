import React from "react";
import { useState } from "react";
import PropTypes from "prop-types";
import "./postForm.css";

const PostForm = ({ onClose, onSubmit }) => {
  const [text, setText] = useState("");
  const [attachment, setAttachment] = useState(null);
  const [recipient, setRecipient] = useState("Все");

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    setAttachment(file);
  };

  const handleRemoveAttachment = () => {
    setAttachment(null);
  };

  const handleSubmit = () => {
    if (text.trim() === "") return;
    onSubmit({ text, recipient, attachment });
    setText("");
    setAttachment(null);
    setRecipient("Все");
  };

  return (
    <div className="post-form">
      <select value={recipient} onChange={(e) => setRecipient(e.target.value)}>
        <option>Все</option>
        <option>Преподаватели</option>
        <option>Отделение туризм</option>
        <option>Отделение инф техн</option>
        <option>Старосты</option>
      </select>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Введите текст..."
      />

      <div className="file-upload">
        <label htmlFor="file-upload" className="custom-file-upload">
          <img
            className="photo-scr"
            src="src/assets/imag/screpka.png"
            alt="Прикрепить файл"
          />
        </label>
        <input
          id="file-upload"
          type="file"
          onChange={handleFileUpload}
          style={{ display: "none" }}
        />
      </div>

      {attachment && (
        <div className="attachment-preview">
          <span>📎 {attachment.name}</span>
          <button
            className="remove-attachment"
            onClick={handleRemoveAttachment}
          >
            ✖
          </button>
        </div>
      )}

      <div className="btn-form">
        <button className="btn_form" onClick={onClose}>
          Отмена
        </button>
        <button className="btn_form" onClick={handleSubmit}>
          Отправить
        </button>
      </div>
    </div>
  );
};

PostForm.propTypes = {
  onClose: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default PostForm;

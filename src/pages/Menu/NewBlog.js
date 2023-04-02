import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import MenuNavbar from "./MenuNavbar";

const NewBlog = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("");
  const [isPending, setIsPending] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const blog = {
      title,
      body,
      author,
    };

    fetch("http://localhost:8000/blogs/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(blog),
    }).then(() => {
      console.log("Request sent");
      setIsPending(false);
      navigate("/menu-two");
    });
  };

  return (
    <>
      <div className="section-b">
        <div className="menu-wrapper">
          <MenuNavbar />
          <div className="create">
            <h2>Add a new blog post</h2>
            <form onSubmit={handleSubmit}>
              <label>Blog title:</label>
              <input
                type="text"
                required
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
              <label>Blog body:</label>
              <textarea
                required
                value={body}
                onChange={(e) => setBody(e.target.value)}
              ></textarea>
              <label>Blog author:</label>
              <select
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
              >
                <option value="" disabled>
                  Select Authors
                </option>
                <option value="mario">mario</option>
                <option value="yoshi">yoshi</option>
              </select>
              {!isPending && <button>Add Post</button>}
              {isPending && <button>Adding blog...</button>}
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewBlog;

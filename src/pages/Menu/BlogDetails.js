import { useNavigate, useParams } from "react-router-dom";
import "./menu.css";
import MenuNavbar from "./MenuNavbar";
import useFetch from "./useFetch";

const BlogDetails = () => {
  const { id } = useParams();
  const nav = useNavigate();
  const {
    data: blog,
    error,
    isPending,
  } = useFetch("http://localhost:8000/blogs/" + id);

  const handleDelete = () => {
    fetch("http://localhost:8000/blogs/" + id, {
      method: "DELETE",
    }).then(() => {
      nav("/menu-two");
    });
  };

  return (
    <>
      <div className="section-b">
        <div className="menu-wrapper">
          <MenuNavbar />
          <div>
            {isPending && <div>Loading</div>}
            {error && <div>{error}</div>}
            {blog && (
              <article
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                }}
              >
                <h2 style={{ color: "#222", fontSize: "2.4rem" }}>
                  {blog.title}
                </h2>
                <p
                  style={{
                    color: "var(--dark-yellow)",
                    fontSize: "1.6rem",
                    marginBottom: "1.4rem",
                  }}
                >
                  Written by {blog.author}
                </p>
                <div
                  style={{
                    lineHeight: "1.6",
                    marginBottom: "6rem",
                  }}
                >
                  {blog.body}
                </div>
              </article>
            )}
            <button onClick={handleDelete} style={{ marginRight: "3rem" }}>
              Delete
            </button>
            <button onClick={() => nav(-1)}>Go back</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogDetails;

import { Link } from "react-router-dom";

const Blog = ({ blogs, title }) => {
  return (
    <>
      <h3 style={{ marginBottom: "2rem", color: "var(--dark-yellow)" }}>
        {title}
      </h3>
      {blogs.map((data) => (
        <Link to={`/blogs/${data.id}`} key={data.id}>
          <div className="body">
            <h2>{data.title}</h2>
            <p>{data.author}</p>
          </div>
        </Link>
      ))}
    </>
  );
};

export default Blog;

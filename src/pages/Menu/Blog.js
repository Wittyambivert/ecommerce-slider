const Blog = ({ blogs, title, handleDelete }) => {
  return (
    <>
      <h3 style={{ marginBottom: "2rem", color: "var(--dark-yellow)" }}>
        {title}
      </h3>
      {blogs.map((data) => (
        <div className="body" key={data.id}>
          <h2>{data.title}</h2>
          <p>{data.description}</p>
          <button className="delete" onClick={() => handleDelete(data.id)}>
            Delete
          </button>
        </div>
      ))}
    </>
  );
};

export default Blog;

import { useNavigate } from "react-router-dom";
import "./page-not-found.css";

const PageNotFound = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="nopage-wrapper">
        <h2 className="nopage__title">You've entered a wrong link</h2>
        <button onClick={() => navigate("/")}>Back to home</button>
      </div>
    </>
  );
};

export default PageNotFound;

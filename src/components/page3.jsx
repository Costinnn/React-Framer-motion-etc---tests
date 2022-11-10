import { Link } from "react-router-dom";

const PageThree = () => {
  return (
    <div>
      <h1>Page3</h1>
      <Link to="/">Go to Homepage</Link>
      <br />
      <Link to="/page2">Go to page2</Link>
    </div>
  );
};

export default PageThree;

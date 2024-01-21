import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="flex flex-col p-4">
      <h1>Oh no, this route doesn't exist!</h1>
      <Link to="/" className="text-cyan-500">
        You can go back to the home page by clicking here, though!
      </Link>
    </div>
  );
};

export default ErrorPage;

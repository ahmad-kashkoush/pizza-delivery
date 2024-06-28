import { useNavigate, useRouteError } from "react-router-dom";

function Error() {
  const navigate = useNavigate();
  const currentError = useRouteError();
  console.log(currentError);
  return (
    <div>
      <h1>Something went wrong 😢</h1>
      <p>%{currentError.data || currentError.error.message}%</p>
      <button onClick={() => navigate(-1)}>&larr; Go back</button>
    </div>
  );
}

export default Error;

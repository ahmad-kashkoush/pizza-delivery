import LinkButton from "@/ui/LinkButton";
import { useNavigate, useRouteError } from "react-router-dom";

function Error() {
  const navigate = useNavigate();
  const currentError = useRouteError();
  console.log(currentError);
  return (
    <div>
      <h1>Something went wrong 😢</h1>
      <p>%{currentError.data || currentError?.error?.message||currentError.mesasge|| currentError.toLocaleString( )}%</p>
      <LinkButton to="-1">&larr; Go back</LinkButton>
    
    </div>
  );
}

export default Error;

import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div className= "h-[100vh] flex justify-center items-center">
      <div className=" font-baysanflex-col justify-center items-center text-center">
        <h1 className="font-bold font-baysan text-xl">Oops!</h1> <br/>
        
        <p>Sorry, an unexpected error has occurred.</p>
        <h1 className="font-bold font-baysan text-[80px]">404</h1>
        <p>
          <i>{error.statusText || error.message}</i>
        </p>
      </div>
    </div>
  );
}
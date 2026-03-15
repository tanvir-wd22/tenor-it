import { isRouteErrorResponse, useRouteError } from 'react-router';

const NotFound = () => {
  const error = useRouteError();

  if (isRouteErrorResponse) {
    return (
      <div className="">
        <h1>
          {error.status} {error.statusText}
        </h1>
        <p>{error.data}</p>
      </div>
    );
  }
  return <div>NotFound</div>;
};

export default NotFound;

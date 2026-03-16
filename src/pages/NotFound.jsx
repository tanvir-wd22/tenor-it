import { Link } from 'react-router';
import error404 from '../assets/error-404.png';

const NotFound = () => {
  return (
    <div className="flex justify-center items-center w-11/12 mx-auto">
      <div className="space-y-4 ">
        <img
          src={error404}
          className="max-w-full object-cover"
          alt="error404"
        />
        <h1 className="text-3xl font-semibold">Oops, page not found!</h1>
        <p className="text-md opacity-70">
          The page you are looking for is not available.
        </p>
        <Link to="/" className="btn btn-primary block w-fit mx-auto mb-4">
          Go Back !
        </Link>
      </div>
    </div>
  );
};

export default NotFound;

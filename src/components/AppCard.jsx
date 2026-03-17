import { PiDownloadSimpleBold } from 'react-icons/pi';
import { FaStar } from 'react-icons/fa';
import { Link } from 'react-router';

const AppCard = ({ appItem }) => {
  const { id, image, title, downloads, ratingAvg } = appItem;
  return (
    <section>
      <Link to={`/appDetail/${id}`}>
        <div className="card bg-base-100 shadow-sm h-72 ">
          <figure className="px-4 pt-4">
            <img
              src={image}
              className="h-36 w-full object-fill"
              alt="app"
            />
          </figure>
          <div className="card-body justify-between">
            <h2 className="text-md font-medium text-center">{title}</h2>
            <div className="card-actions justify-between">
              <button className="btn btn-xs btn-soft text-green-500">
                <PiDownloadSimpleBold></PiDownloadSimpleBold>
                <span>{downloads}M</span>
              </button>
              <button className="btn btn-xs btn-soft text-orange-500">
                <FaStar></FaStar>
                <span>{ratingAvg}</span>
              </button>
            </div>
          </div>
        </div>
      </Link>
    </section>
  );
};

export default AppCard;

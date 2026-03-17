import { PiDownloadSimpleBold } from 'react-icons/pi';
import { FaStar } from 'react-icons/fa';

const InstalledAppCard = ({ appItem }) => {
  const { image, title, downloads, ratingAvg, size } = appItem;

  return (
    <div className="card bg-base-300 shadow-sm h-32 flex flex-row items-center justify-between">
      {/* left side */}
      <div className="flex items-center gap-2 sm:gap-4">
        <figure className="px-4 py-4">
          <img src={image} className="h-24 w-full object-fill" alt="app" />
        </figure>
        <div className="flex flex-col gap-6">
          <h2 className="text-xs sm:text-sm font-medium">{title}</h2>
          <div className="flex items-center gap-2 sm:gap-4">
            <button className="btn btn-xs btn-soft text-green-500">
              <PiDownloadSimpleBold></PiDownloadSimpleBold>
              <span>{downloads}M</span>
            </button>
            <button className="btn btn-xs btn-soft text-orange-500">
              <FaStar></FaStar>
              <span>{ratingAvg}</span>
            </button>
            <p className="text-xs sm:text-sm font-medium opacity-70">{size} MB</p>
          </div>
        </div>
      </div>
      {/* right side */}
      <div className="pr-4">
        <button className="btn btn-xs sm:btn-block btn-error">Uninstall</button>
      </div>
    </div>
  );
};

export default InstalledAppCard;

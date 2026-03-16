import { Link } from 'react-router';
import AppCard from './AppCard';

const TrendyApps = ({ apiData }) => {
  // console.log(apiData);
  return (
    <div className="space-y-4">
      <h1 className="text-center text-3xl font-bold">Trending Apps</h1>
      <p className="text-center opacity-70">
        Explore All Trending Apps on the Market developed by us
      </p>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {apiData.map((appItem) => (
          <AppCard appItem={appItem} key={appItem.id}></AppCard>
        ))}
      </div>
      <div className="flex justify-center items-center">
        <Link
          to="/apps"
          className="px-6 py-2 rounded-md text-md font-medium bg-linear-to-r from-purple-700 to-violet-400"
        >
          Show All
        </Link>
      </div>
    </div>
  );
};

export default TrendyApps;

import { useLoaderData } from 'react-router';
import AppCard from '../components/AppCard';

const Apps = () => {
  const loadedAllData = useLoaderData();
  // console.log(loadedAllData);
  const allCardsData = loadedAllData.data;
  // console.log(allCardsData);

  return (
    <div className="w-11/12 max-w-7xl mx-auto space-y-4">
      <h1 className="text-center text-3xl font-bold ">Our All Applications</h1>
      <p className="text-center opacity-70">
        Explore All Apps on the Market developed by us. We code for Millions
      </p>
      <div className="flex flex-col gap-4 sm:flex-row sm:justify-between sm:items-center">
        <span className="text-lg font-medium">
          {`(${allCardsData.length}) Apps Found`}
        </span>
        <label className="input">
          <svg
            className="h-[1em] opacity-50"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2.5"
              fill="none"
              stroke="currentColor"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </g>
          </svg>
          <input type="search" placeholder="Search Apps" />
        </label>
      </div>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {allCardsData.map((appItem) => (
          <AppCard appItem={appItem} key={appItem.id}></AppCard>
        ))}
      </div>
    </div>
  );
};

export default Apps;

import { useLoaderData } from 'react-router';
import AppCard from '../components/AppCard';
import { useState } from 'react';
import errorApp from '../assets/error-app.png';

const Apps = () => {
  const loadedAllData = useLoaderData();
  // console.log(loadedAllData);
  const originalData = loadedAllData?.data || [];
  // console.log(originalData);
  const [allData, setAllData] = useState(originalData);
  const handleSearchInput = (value) => {
    const result = originalData.filter((appItem) =>
      appItem.title.toLowerCase().includes(value.toLowerCase())
    );
    setAllData(result);
    if (result.length === 0) {
      return 0;
    }
  };
  // console.log('dynamically update check ', allData);

  return (
    <div className="w-11/12 max-w-7xl mx-auto space-y-4">
      <h1 className="text-center text-3xl sm:text-4xl font-bold ">
        Our All Applications
      </h1>
      <p className="text-center opacity-70">
        Explore All Apps on the Market developed by us. We code for Millions
      </p>
      <div className="flex flex-col gap-4 sm:flex-row sm:justify-between sm:items-center">
        <span className="text-lg font-medium">
          {`(${allData.length}) Apps Found`}
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
          <input
            onChange={(e) => handleSearchInput(e.target.value)}
            type="search"
            placeholder="Search Apps"
          />
        </label>
      </div>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {allData.length === 0 ? (
          <div className="col-span-full">
            <img src={errorApp} className="max-w-xs mx-auto" alt="Not Found" />
          </div>
        ) : (
          allData.map((appItem) => (
            <AppCard appItem={appItem} key={appItem.id}></AppCard>
          ))
        )}
      </div>
    </div>
  );
};

export default Apps;

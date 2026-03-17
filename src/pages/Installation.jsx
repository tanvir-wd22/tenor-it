import { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { getAppsFromLS } from '../utilities/localStorage';
import InstalledAppCard from '../components/InstalledAppCard';

const Installation = () => {
  const loadedAllData = useLoaderData();
  // console.log(loadedAllData);
  const [installedList, setInstalledList] = useState([]);
  const originalData = loadedAllData.data;
  console.log(originalData);

  useEffect(() => {
    const lsInstalledList = getAppsFromLS();
    const filteredInstalledList = originalData.filter((appItem) =>
      lsInstalledList.includes(appItem.id)
    );
    setInstalledList(filteredInstalledList);
  }, [originalData]);
  console.log(installedList);

  return (
    <div className="w-11/12 max-w-7xl mx-auto space-y-4">
      <h1 className="text-center text-3xl sm:text-4xl font-bold ">
        Your Installed Apps
      </h1>
      <p className="text-center opacity-70">
        Explore all Apps which you have installed
      </p>
      <div className="flex flex-col gap-4 sm:flex-row sm:justify-between sm:items-center">
        <span className="text-lg font-medium">{`(${installedList.length}) Apps Found`}</span>
        <div className="dropdown dropdown-bottom dropdown-end">
          <div tabIndex={0} role="button" className="btn m-1">
            Click ⬇️
          </div>
          <ul
            tabIndex="-1"
            className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
          >
            <li>
              <a>Item 1</a>
            </li>
            <li>
              <a>Item 2</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="grid gap-6 grid-cols-1">
        {installedList.map((appItem) => (
          <InstalledAppCard
            appItem={appItem}
            key={appItem.id}
          ></InstalledAppCard>
        ))}
      </div>
    </div>
  );
};

export default Installation;

import { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { deleteAppFromLS, getAppsFromLS } from '../utilities/localStorage';
import InstalledAppCard from '../components/InstalledAppCard';
import errorApp from '../assets/error-app.png';

const Installation = () => {
  const [installedList, setInstalledList] = useState([]);
  // console.log(installedList);
  const [sortType, setSortType] = useState('');
  // console.log(sortType);
  const loadedAllData = useLoaderData();
  // console.log(loadedAllData);

  const handleSortedList = (type) => {
    setSortType(type);
    if (type === 'low-high') {
      const sortByLowToHigh = [...installedList].sort(
        (a, b) => a.downloads - b.downloads
      );
      setInstalledList(sortByLowToHigh);
    }
    if (type === 'high-low') {
      const sortByHighToLow = [...installedList].sort(
        (x, y) => y.downloads - x.downloads
      );
      setInstalledList(sortByHighToLow);
    }
  };

  const handleUninstallBtn = (id) => {
    // console.log(id);
    deleteAppFromLS(id);
    const updatedInstalledList = installedList.filter(
      (appItem) => appItem.id !== id
    );
    setInstalledList(updatedInstalledList);
  };

  useEffect(() => {
    const localStorageList = getAppsFromLS();
    const matchDataList = loadedAllData?.data.filter((appItem) =>
      localStorageList.includes(appItem.id)
    );
    setInstalledList(matchDataList);
  }, [loadedAllData]);
  // console.log(installedList);

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
            Sort
          </div>
          <ul
            tabIndex={-1}
            className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
          >
            <li>
              <a onClick={() => handleSortedList('low-high')}>
                {sortType === 'low-high' && `⬆️`}
                Low-High
              </a>
            </li>
            <li>
              <a onClick={() => handleSortedList('high-low')}>
                {sortType === 'high-low' && `⬇️`}
                High-Low
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="grid gap-6 grid-cols-1">
        {installedList.length === 0 ? (
          <div className="col-span-full">
            <img src={errorApp} className="max-w-sm mx-auto" alt="not found" />
          </div>
        ) : (
          installedList.map((appItem) => (
            <InstalledAppCard
              appItem={appItem}
              key={appItem.id}
              handleUninstallBtn={handleUninstallBtn}
            ></InstalledAppCard>
          ))
        )}
      </div>
    </div>
  );
};

export default Installation;

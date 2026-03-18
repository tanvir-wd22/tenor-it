import toast from 'react-hot-toast';
const APPS_KEY = 'appsList';

// ================================================
const getAppsFromLS = () => {
  const stringifiedData = localStorage.getItem(APPS_KEY);
  if (stringifiedData) {
    try {
      const parsedData = JSON.parse(stringifiedData);
      return parsedData;
    } catch (error) {
      console.log('localstorage data corrupted', error);
      return [];
    }
  } else {
    return [];
  }
};

// ================================================
const setAppToLS = (id) => {
  const parsedData = getAppsFromLS();
  if (parsedData.includes(id)) {
    toast.error('App already exists');
    return;
  } else {
    parsedData.push(id);
    const stringifiedData = JSON.stringify(parsedData);
    localStorage.setItem(APPS_KEY, stringifiedData);
    toast.success('App installed successfully');
    return;
  }
};

// ================================================
const deleteAppFromLS = (id) => {
  const parsedData = getAppsFromLS();
  const remainingData = parsedData.filter((appId) => appId !== id);
  const stringifiedData = JSON.stringify(remainingData);
  localStorage.setItem(APPS_KEY, stringifiedData);
  toast.success('App uninstalled completely');
};

export { getAppsFromLS, setAppToLS, deleteAppFromLS };

import toast from 'react-hot-toast';

const getAppsFromLS = () => {
  const stringifiedData = localStorage.getItem('appsList');
  if (!stringifiedData) {
    return [];
  }

  try {
    const parsedData = JSON.parse(stringifiedData);
    return parsedData;
  } catch (error) {
    console.log(error);
    return [];
  }
};

const setAppToLS = (id) => {
  const parsedData = getAppsFromLS();

  if (parsedData.includes(id)) {
    toast.error('App already exists');
    return;
  } else {
    parsedData.push(id);
    const stringifiedData = JSON.stringify(parsedData);
    localStorage.setItem('appsList', stringifiedData);
    toast.success('App successfully installed');
    return;
  }
};

export { getAppsFromLS, setAppToLS };

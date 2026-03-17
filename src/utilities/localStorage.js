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
  const convertedId = String(id);

  if (parsedData.includes(convertedId)) {
    toast.error('App already exists');
  } else {
    parsedData.push(convertedId);
    const stringifiedData = JSON.stringify(parsedData);
    localStorage.setItem('appsList', stringifiedData);
    toast.success('App successfully installed');
  }
};

export { getAppsFromLS, setAppToLS };

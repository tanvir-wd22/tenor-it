import { createBrowserRouter } from 'react-router';
import Root from '../layouts/Root';
import NotFound from '../pages/NotFound';
import Home from '../pages/Home';
import Apps from '../pages/Apps';
import Installation from '../pages/Installation';
import axios from 'axios';
import AppCardDetail from '../components/AppCardDetail';

let PublicRouter = createBrowserRouter([
  {
    path: '/',
    Component: Root,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        Component: Home,
        loader: async () => {
          const response = await axios.get('/demoData.json');
          return response;
        },
      },
      {
        path: '/apps',
        Component: Apps,
        loader: async () => {
          const response = await axios.get('/demoData.json');
          return response;
        },
      },
      {
        path: '/installation',
        Component: Installation,
      },
      {
        path: '/appDetail/:cardId',
        Component: AppCardDetail,
        loader: async () => {
          const response = await axios.get('/demoData.json');
          return response;
        },
      },
    ],
  },
]);

export default PublicRouter;

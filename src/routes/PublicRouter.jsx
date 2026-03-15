import { createBrowserRouter } from 'react-router';
import Root from '../layouts/Root';
import NotFound from '../pages/NotFound';
import Home from '../pages/Home';
import Apps from '../pages/Apps';
import Installation from '../pages/Installation';

let PublicRouter = createBrowserRouter([
  {
    path: '/',
    Component: Root,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: '/apps',
        Component: Apps,
      },
      {
        path: '/installation',
        Component: Installation,
      },
    ],
  },
]);

export default PublicRouter;

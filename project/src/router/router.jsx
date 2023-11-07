import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Dramas from '../domains/main/Dramas';
import Movies from '../domains/main/Movies';
import Details from '../domains/details/Details';
import Search from '../domains/header/search/Search';

const router = createBrowserRouter([
  {
    path: '',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Movies />,
      },
      {
        path: '/:movieId',
        element: <Details />,
      },
      {
        path: '/drama',
        element: <Dramas />,
      },
      {
        path: '/drama/:dramaId',
        element: <Details />,
      },
      {
        path: '/search',
        element: <Search />,
      },
      {
        path: '/search/:searchId',
        element: <Search />,
      },
    ],
  },
]);

export default router;

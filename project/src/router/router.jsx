import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Movies from '../main/Movies';
import Dramas from '../main/Dramas';

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
        path: '/drama',
        element: <Dramas />,
      },
    ],
  },
]);

export default router;

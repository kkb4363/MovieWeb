import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Dramas from '../domains/main/Dramas';
import Movies from '../domains/main/Movies';

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

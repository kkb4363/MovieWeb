import { Outlet } from 'react-router-dom';
import Header from './header/Header';

function App() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

export default App;

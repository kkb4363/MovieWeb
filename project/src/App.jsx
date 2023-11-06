import { Outlet, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import Header from './domains/header/Header';
import './index.css';
import { useEffect } from 'react';

const Wrapper = styled.div`
  background-color: rgb(27 27 27);
  display: flex;
  flex-direction: column;
`;

const HeaderWrapper = styled.div`
  position: fixed;
  z-index: 2;
`;

const OutletWrapper = styled.div`
  position: relative;
  box-sizing: border-box;
  padding-top: 5vh;
`;

function App() {
  const { pathname } = useLocation();
  console.log(pathname);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <Wrapper>
      <HeaderWrapper>
        <Header />
      </HeaderWrapper>

      <OutletWrapper>
        <Outlet />
      </OutletWrapper>
    </Wrapper>
  );
}

export default App;

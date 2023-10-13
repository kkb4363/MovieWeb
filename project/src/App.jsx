import { Outlet } from 'react-router-dom';
import Header from './header/Header';
import './index.css';
import styled from 'styled-components';

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

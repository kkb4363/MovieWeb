import { styled } from 'styled-components';
import Contact from './Contact';
import { Link } from 'react-router-dom';

const Wrapper = styled.div`
  height: 5vh;

  background-color: rgb(45 45 45);
  padding: 0 20vw;
`;

const Header = () => {
  return (
    <Wrapper className="w-screen text-white items-center justify-between flex">
      <Link to="/">
        <span>Gibeom's Movie Web</span>
      </Link>
      <Contact />
    </Wrapper>
  );
};

export default Header;

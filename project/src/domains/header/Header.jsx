import { styled } from 'styled-components';
import Contact from './Contact';
import { Link } from 'react-router-dom';

const Wrapper = styled.div`
  height: 5vh;

  padding: var(--default-padding-style);
  background-color: rgb(45 45 45);
`;

const CategoriesWrapper = styled.div`
  width: 30%;
  white-space: nowrap;

  a:first-child {
    font-size: 20px;
    font-weight: 500;
  }
`;

const categories = [
  {
    name: "Gibeom's Movie Web",
    src: '/',
  },
  {
    name: '영화',
    src: '/',
  },
  {
    name: '드라마',
    src: '/drama',
  },
];

const Header = () => {
  return (
    <Wrapper className="w-screen text-white items-center justify-between flex box-border">
      <CategoriesWrapper className="h-full flex justify-between items-center">
        {categories.map((a) => (
          <Link key={a.src} to={a.src}>
            <span>{a.name}</span>
          </Link>
        ))}
      </CategoriesWrapper>
      <Contact />
    </Wrapper>
  );
};

export default Header;

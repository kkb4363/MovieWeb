import { styled } from 'styled-components';
import { Link } from 'react-router-dom';
import ContactDialog from './ContactDialog';
import { useEffect, useState } from 'react';

const header_height = '5vh';

const Wrapper = styled.div`
  height: ${header_height};

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

const Contact = styled.button`
  min-width: 80px;
  height: ${header_height};

  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }

  position: fixed;
  right: var(--default-padding-style-oneside);
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
  const [openContactDialog, setOpenContactDialog] = useState(false);
  const handleContactDialog = () => setOpenContactDialog((prev) => !prev);

  const disableScroll = () => {
    document.body.style.overflow = 'hidden';
  };
  const enableScroll = () => {
    document.body.style.overflow = 'unset';
  };

  useEffect(() => {
    if (openContactDialog) disableScroll();
    else enableScroll();
  }, [openContactDialog]);

  return (
    <Wrapper className="w-screen text-white items-center justify-between flex box-border">
      <CategoriesWrapper className="h-full flex justify-between items-center">
        {categories.map((a) => (
          <Link key={a.name} to={a.src}>
            <span>{a.name}</span>
          </Link>
        ))}
      </CategoriesWrapper>

      <Contact onClick={handleContactDialog}>Contact</Contact>

      {openContactDialog && <ContactDialog onClick={handleContactDialog} />}
    </Wrapper>
  );
};

export default Header;

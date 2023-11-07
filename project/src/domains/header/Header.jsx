import { styled } from 'styled-components';
import { Link } from 'react-router-dom';
import ContactDialog from './contact/ContactDialog';
import { useEffect, useState } from 'react';
import SearchDialog from '../../components/search/SearchDialog';
import SearchIcon from '../../components/search/SearchIcon';
import { useRecoilState } from 'recoil';
import { openSearchDialogAtom } from '../../atom/header_atom';

const header_height = '5vh';

const Wrapper = styled.div`
  height: ${header_height};
  color: lightgray;
  padding: var(--default-padding-style);
  background-color: rgb(45 45 45);
`;

const CategoriesWrapper = styled.div`
  width: 20%;
  white-space: nowrap;

  a:first-child {
    font-size: 20px;
    font-weight: 500;
  }

  a {
    &:hover {
      color: white;
    }
  }
`;

const ContactWithSearch = styled.div`
  display: flex;
  width: 10%;
  align-items: center;
`;

const Contact = styled.button`
  min-width: 80px;
  height: ${header_height};

  &:hover {
    color: white;
  }

  position: fixed;
  right: var(--default-padding-style-oneside);
`;

const categories = [
  {
    name: 'GMWeb',
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
  const [openSearchDialog, setOpenSearchDialog] = useRecoilState(openSearchDialogAtom);
  const [openContactDialog, setOpenContactDialog] = useState(false);
  const handleContactDialog = () => setOpenContactDialog((prev) => !prev);

  const disableScroll = () => {
    document.body.style.overflow = 'hidden';
  };
  const enableScroll = () => {
    document.body.style.overflow = 'unset';
  };

  useEffect(() => {
    if (openContactDialog || openSearchDialog) disableScroll();
    else enableScroll();
  }, [openContactDialog, openSearchDialog]);

  return (
    <Wrapper className="w-screen text-white items-center justify-between flex box-border">
      <CategoriesWrapper className="h-full flex justify-between items-center">
        {categories.map((a) => (
          <Link key={a.name} to={a.src} onClick={() => setOpenSearchDialog(false)}>
            <span>{a.name}</span>
          </Link>
        ))}
      </CategoriesWrapper>

      <ContactWithSearch>
        <SearchIcon />
        <Contact onClick={handleContactDialog}>Contact</Contact>
      </ContactWithSearch>

      {openSearchDialog && <SearchDialog />}
      {openContactDialog && <ContactDialog onClick={handleContactDialog} />}
    </Wrapper>
  );
};

export default Header;

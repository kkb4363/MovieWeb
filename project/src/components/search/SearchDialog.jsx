import styled from 'styled-components';
import Overlay from '../common/Overlay';
import SearchIcon from './SearchIcon';
import RecentWords from '../../domains/header/search/words/recent/RecentWords';
import PopularWords from '../../domains/header/search/words/popular/PopularWords';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { openSearchDialogAtom, recentWordsAtom } from '../../atom/header_atom';
import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';

const Wrapper = styled.div`
  width: 100%;
  height: 90vh;

  background: inherit;

  position: absolute;
  top: 5vh;
  left: 0;
  right: 0;

  z-index: 1;
`;

const InputWrapper = styled.div`
  width: 80%;
  height: 17vh;

  margin: 0 auto;

  display: flex;
  align-items: flex-end;
  border-bottom: 2px solid white;

  form {
    width: 100%;
    height: 40%;
  }
`;

const SearchInput = styled.input`
  width: 100%;
  height: 100%;

  font-size: 35px;
  color: #fff;
  background: inherit;

  &:focus {
    outline: none;
  }
`;

const SearchIconWrapper = styled.div`
  width: 5%;
  height: 40%;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const BottomWrapper = styled.div`
  width: 80%;
  height: calc(100% - 17vh);
  box-sizing: border-box;
  padding-top: 10vh;

  display: flex;
  justify-content: space-between;
  align-items: center;

  margin: 0 auto;
`;

const SearchDialog = () => {
  const searchWordRef = useRef('');
  const navigate = useNavigate();
  const [recentWords, setRecentWords] = useRecoilState(recentWordsAtom);
  const setSearchDialog = useSetRecoilState(openSearchDialogAtom);
  const closeSearchDialog = () => setSearchDialog(false);

  const onSearch = (e) => {
    e.preventDefault();
    const searchValue = searchWordRef.current.value;
    const isNotExistSameWords = !recentWords.includes(searchValue);

    navigate(`/search/${searchValue}`);
    closeSearchDialog();
    if (searchWordRef.current.value !== '' && isNotExistSameWords) {
      setRecentWords((prev) => [...prev, searchWordRef.current.value]);
    } else return;
  };

  return (
    <>
      <Wrapper>
        <InputWrapper>
          <form onSubmit={onSearch}>
            <SearchInput ref={searchWordRef} placeholder="제목, 인물명을 입력해주세요" />
          </form>

          <SearchIconWrapper>
            <SearchIcon size={'40px'} onSearch={onSearch} />
          </SearchIconWrapper>
        </InputWrapper>

        <BottomWrapper>
          <RecentWords />
          <PopularWords />
        </BottomWrapper>
      </Wrapper>
      <Overlay zIndex={'-1'} onClick={closeSearchDialog} />
    </>
  );
};

export default SearchDialog;

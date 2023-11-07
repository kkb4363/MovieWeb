import styled from 'styled-components';
import { BsXLg } from 'react-icons/bs';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { openSearchDialogAtom, recentWordsAtom } from '../../../../../atom/header_atom';
import { useNavigate } from 'react-router-dom';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  font-size: 20px;
  gap: 20px;
`;

const SearchHistoryWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;

  width: 100%;
  height: 3vh;

  span {
    cursor: pointer;
    &:hover {
      color: white;
    }
  }

  div {
    margin-bottom: 1px;
    cursor: pointer;
  }
`;

const HasSearchHistory = () => {
  const [recentSearchWords, setRecentSearchWords] = useRecoilState(recentWordsAtom);
  const setSearchDialog = useSetRecoilState(openSearchDialogAtom);
  const closeSearchDialog = () => setSearchDialog(false);
  const navigate = useNavigate();
  const deleteRecentsWords = (word) => {
    const newDatas = recentSearchWords?.filter((prev) => prev != word);
    setRecentSearchWords(newDatas);
  };

  const goToSearchDatas = (keyword) => {
    closeSearchDialog();
    navigate(`/search/${keyword}`);
  };

  return (
    <Wrapper>
      {recentSearchWords?.map((word, idx) => {
        const wordToUpdate = word;
        return (
          <SearchHistory
            text={word}
            key={idx}
            onSearch={() => goToSearchDatas(wordToUpdate)}
            onDelete={() => deleteRecentsWords(wordToUpdate)}
          />
        );
      })}
    </Wrapper>
  );
};

export default HasSearchHistory;

const SearchHistory = (props) => {
  return (
    <SearchHistoryWrapper>
      <span onClick={props.onSearch}>{props.text}</span>
      <div onClick={props.onDelete}>
        <BsXLg />
      </div>
    </SearchHistoryWrapper>
  );
};

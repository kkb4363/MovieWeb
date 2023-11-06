import styled from 'styled-components';
import { BsXLg } from 'react-icons/bs';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  font-size: 20px;
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
  return (
    <Wrapper>
      <SearchHistory text={'진격의거인 파트2'} />
    </Wrapper>
  );
};

export default HasSearchHistory;

const SearchHistory = (props) => {
  return (
    <SearchHistoryWrapper>
      <span>{props.text}</span>
      <div>
        <BsXLg />
      </div>
    </SearchHistoryWrapper>
  );
};

import styled from 'styled-components';
import { FaSearch } from 'react-icons/fa';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;
  &:hover {
    color: white;
  }

  font-size: ${({ $size }) => $size && $size};
`;

const SearchIcon = (props) => {
  return (
    <Wrapper $size={props.size} onClick={props.onClick}>
      <FaSearch />
    </Wrapper>
  );
};

export default SearchIcon;

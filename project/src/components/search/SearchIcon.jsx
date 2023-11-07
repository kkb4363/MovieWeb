import styled from 'styled-components';
import { FaSearch } from 'react-icons/fa';
import { useSetRecoilState } from 'recoil';
import { openSearchDialogAtom } from '../../atom/header_atom';

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
  const setSearchDialog = useSetRecoilState(openSearchDialogAtom);

  const handleSearchDialog = () => {
    setSearchDialog((prev) => !prev);
  };

  return (
    <Wrapper
      $size={props.size}
      onClick={props.onSearch ? props.onSearch : handleSearchDialog}
    >
      <FaSearch />
    </Wrapper>
  );
};

export default SearchIcon;

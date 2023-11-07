import styled from 'styled-components';
import { useQuery } from 'react-query';
import { getPopular } from '../../../../../api/apis';
import { useNavigate } from 'react-router-dom';
import { getTime } from '../../../../../utils/utils';
import { useSetRecoilState } from 'recoil';
import { openSearchDialogAtom } from '../../../../../atom/header_atom';
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  gap: 15px;
`;

const PopularList = styled.div`
  font-size: 22px;
  display: flex;
  cursor: pointer;

  &:hover {
    span {
      color: white;
    }
  }

  p {
    color: red;
    font-weight: 600;
    width: 7%;
  }

  span {
    color: lightgray;
  }
`;

const Footer = styled.div`
  position: absolute;
  bottom: 0;

  font-size: 18px;
`;

const PopularLists = () => {
  const setSearchDialog = useSetRecoilState(openSearchDialogAtom);
  const closeSearchDialog = () => setSearchDialog(false);

  const { data, isLoading } = useQuery(['get_popular'], () => getPopular());
  const navigate = useNavigate();
  const { currentDate_YEAR_MM_DD } = getTime();
  return (
    <Wrapper>
      {!isLoading &&
        data?.results?.slice(0, 10)?.map((item, idx) => {
          const isMovie = item?.title != undefined;
          const goTodetails = () => {
            const id = isMovie ? `${item?.id}` : `/drama/${item?.id}`;
            navigate(`${id}`);
            closeSearchDialog();
          };

          return (
            <PopularListItem
              onClick={goTodetails}
              lank={idx + 1}
              title={isMovie ? item?.title : item.name}
            />
          );
        })}

      <Footer>{currentDate_YEAR_MM_DD} 기준</Footer>
    </Wrapper>
  );
};

export default PopularLists;

const PopularListItem = (props) => {
  return (
    <PopularList onClick={props.onClick}>
      <p>{props.lank}</p>
      <span>{props.title}</span>
    </PopularList>
  );
};

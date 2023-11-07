import { useQuery } from 'react-query';
import styled from 'styled-components';
import { getSearch } from '../../../api/apis';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import SearchSlider from '../../../components/slider/SearchSlider';

const Wrapper = styled.div`
  width: 80%;
  height: 100vh;
  margin: 0 auto;
  padding: var(--default-padding-style);
`;

const Search = () => {
  const query = useParams();

  const { data, refetch: goSearch } = useQuery(['getSearch', query], () =>
    getSearch(query.searchId)
  );

  useEffect(() => {
    if (query == undefined) return;
    else goSearch();
  }, [query]);

  const movieData = data?.data?.results?.filter(
    (prevData) => prevData?.media_type == 'movie'
  );
  const tvData = data?.data?.results?.filter((prev) => prev.media_type == 'tv');

  const searchedData = [
    {
      condition: movieData?.length != 0,
      title: '영화',
      datas: movieData,
    },
    {
      condition: tvData?.length != 0,
      title: '드라마',
      datas: tvData,
    },
  ];

  return (
    <Wrapper>
      {searchedData.map(
        (searchedData) =>
          searchedData.condition && (
            <SearchSlider
              key={searchedData.title}
              title={searchedData.title}
              datas={searchedData.datas}
            />
          )
      )}
    </Wrapper>
  );
};

export default Search;

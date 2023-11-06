import HasSearchHistory from './HasSearchHistory';
import NoSearchHistory from './NoSearchHistory';
import WordsContainer from '../../../../../components/search/WordsContainer';

const RecentWords = () => {
  return (
    <WordsContainer isRightBorder={true} isRemoveBtn={true} text={'최근 검색어'}>
      <NoSearchHistory />
    </WordsContainer>
  );
};

export default RecentWords;

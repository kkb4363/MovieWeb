import HasSearchHistory from './HasSearchHistory';
import NoSearchHistory from './NoSearchHistory';
import WordsContainer from '../../../../../components/search/WordsContainer';
import { useRecoilState } from 'recoil';
import { recentWordsAtom } from '../../../../../atom/header_atom';

const RecentWords = () => {
  const [recentSearchWords, setRecentSearchWords] = useRecoilState(recentWordsAtom);
  const isRecentWords = recentSearchWords?.length !== 0;
  const onAllDeleteRecentWords = () => setRecentSearchWords([]);

  return (
    <WordsContainer
      onDeleteAll={onAllDeleteRecentWords}
      isRightBorder={true}
      isRemoveBtn={isRecentWords}
      text={'최근 검색어'}
    >
      {isRecentWords ? <HasSearchHistory /> : <NoSearchHistory />}
    </WordsContainer>
  );
};

export default RecentWords;

import WordsContainer from '../../../../../components/search/WordsContainer';
import PopularLists from './PopularLists';

const PopularWords = () => {
  return (
    <WordsContainer paddingSize="30px" text="실시간 인기 Top10">
      <PopularLists />
    </WordsContainer>
  );
};

export default PopularWords;

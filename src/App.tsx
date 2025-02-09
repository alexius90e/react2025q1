import { FC } from 'react';
import './App.scss';
import Search from './components/Search/Search';

const App: FC = () => {
  const getSearchQuery = (searchQuery: string) => {
    console.log(searchQuery);
  };

  return (
    <>
      <Search onButtonClick={getSearchQuery} />
    </>
  );
};

export default App;

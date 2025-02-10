import './App.scss';
import { FC, useState } from 'react';
import Search from './components/Search/Search';
import { SearchCaracter } from './models/search-caracter.interface';
import { SearchResponse } from './models/search-response.interface';
import SearchResultCard from './components/SearchResultCard/SearchResultCard';

const App: FC = () => {
  const [caracters, setCaracters] = useState<SearchCaracter[]>([]);

  const getSearchQuery = async (searchQuery: string) => {
    const url: string = `https://rickandmortyapi.com/api/character/?name=${searchQuery}`;
    const response: Response = await fetch(url);
    if (response.status === 200) {
      const json: string = await response.json();
      const responseObj: SearchResponse = JSON.parse(JSON.stringify(json));
      const results: SearchCaracter[] = responseObj.results;
      console.log(results);
      setCaracters(results);
    } else if (response.status >= 400) {
      console.log(response);
    }
  };

  return (
    <main className="app">
      <div className="app__banner">
        <img
          className="app__banner-image"
          src="src/assets/ip_page_rick_and_morty_banner_a81ef75220.jpg"
          alt="banner"
        />
      </div>

      <Search onButtonClick={getSearchQuery} />

      <div className="app__results">
        {caracters.map((caracter) => {
          return <SearchResultCard key={caracter.id} caracter={caracter} />;
        })}
      </div>
    </main>
  );
};

export default App;

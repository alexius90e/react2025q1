import { FC, useState } from 'react';
import './App.scss';
import Search from './components/Search/Search';

interface SearchResponseResultItem {
  created: string;
  episode: string[];
  gender: string;
  id: number;
  image: string;
  location: { name: string; url: string };
  name: string;
  origin: { name: string; url: string };
  species: string;
  status: string;
  type: string;
  url: string;
}

interface SearchResponse {
  info: {
    count: number;
    next: string | null;
    pages: number;
    prev: string | null;
  };
  results: SearchResponseResultItem[];
}

const App: FC = () => {
  const [caracters, setCaracters] = useState<SearchResponseResultItem[]>([]);

  const getSearchQuery = async (searchQuery: string) => {
    const url: string = `https://rickandmortyapi.com/api/character/?name=${searchQuery}`;
    const response: Response = await fetch(url);
    const json: string = await response.json();
    const responseObj: SearchResponse = JSON.parse(JSON.stringify(json));
    const results: SearchResponseResultItem[] = responseObj.results;
    setCaracters(results);
    console.log(responseObj);
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
          return (
            <div className="app__results-item " key={caracter.id}>
              <div className="app__results-item-name">{caracter.name}</div>
              <div className="app__results-item-gender">{caracter.gender}</div>
              <div className="app__results-item-location">
                {caracter.location.name}
              </div>
              <div className="app__results-item-status">{caracter.status}</div>
            </div>
          );
        })}
      </div>
    </main>
  );
};

export default App;

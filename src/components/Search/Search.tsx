import { useEffect, useState } from 'react';
import './Search.scss';
import useLocalStorage from '../../hooks/useLocalStorage';

interface SearchProps {
  onButtonClick: (query: string) => void;
}

// eslint-disable-next-line react/prop-types
const Search: React.FC<SearchProps> = ({ onButtonClick }) => {
  const searchQueryKey: string = 'searchQuery';

  const [savedQuery, setSavedQuery] = useLocalStorage(searchQueryKey);

  const [searchQuery, setSearchQuery] = useState<string>(savedQuery);

  useEffect(() => {
    setSearchQuery(savedQuery);
  }, [savedQuery]);

  const handleClick = (): void => {
    onButtonClick(searchQuery);
  };

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setSearchQuery(event.target.value);
    setSavedQuery(event.target.value);
  };

  return (
    <div className="search">
      <input
        className="search__input"
        type="text"
        value={searchQuery}
        onChange={handleInputChange}
        placeholder="Type Something...."
      />
      <button className="search__button" onClick={handleClick}>
        Search
      </button>
    </div>
  );
};

export default Search;

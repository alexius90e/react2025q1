import { FC } from 'react';
import './Search.scss';

const Search: FC = () => {
  return (
    <div className="search">
      <input
        className="search__input"
        type="text"
        placeholder="Type Something...."
      />
      <button className="search__button">Search</button>
    </div>
  );
};

export default Search;

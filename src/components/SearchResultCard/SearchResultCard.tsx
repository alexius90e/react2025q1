import { SearchCaracter } from '../../models/search-caracter.interface';
import './SearchResultCard.scss';

interface SearchResultCardProps {
  caracter: SearchCaracter;
}

const SearchResultCard: React.FC<SearchResultCardProps> = ({ caracter }) => {
  return (
    <div className="search-result-card">
      <figure className="search-result-card__figure">
        <img
          className="search-result-card__figure-image"
          src={caracter.image}
          alt={caracter.name}
        />
      </figure>
      <h3 className="search-result-card__name">{caracter.name}</h3>
      <div className="search-result-card__location">{caracter.location.name}</div>

      <div className="search-result-card__info">
        {caracter.gender}, {caracter.status}
      </div>
    </div>
  );
};

export default SearchResultCard;

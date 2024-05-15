import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useMarvelService from '../../services/MarvelService';
import Spinner from '../spinner/Spinner';
import ErrorMessage from '../errorMessage/ErrorMessage';

import './comicsList.scss';

const ComicsList = () => {
  const [comicsList, setComicsList] = useState([]);
  const [newItemLoading, setNewItemLoading] = useState(false);
  const [offset, setOffset] = useState(210);
  const [comicEnded, setComicEnded] = useState(false);

  const { loading, error, getAllComics } = useMarvelService();

  useEffect(() => {
    onRequest(offset, true);
  }, []);

  const onRequest = (offset, initial) => {
    initial ? setNewItemLoading(false) : setNewItemLoading(true);
    getAllComics(offset).then(onComicsListLoaded);
  };

  const onComicsListLoaded = (newComicsList) => {
    let ended = false;
    if (newComicsList < 8) ended = true;
    setComicsList((comicsList) => [...comicsList, ...newComicsList]);
    setNewItemLoading(false);
    setOffset((offset) => offset + 8);
    setComicEnded(ended);
  };
  const errorMessage = error ? <ErrorMessage /> : null;
  const spinner = loading && !newItemLoading ? <Spinner /> : null;

  return (
    <div className="comics__list">
      {errorMessage}
      {spinner}
      <ComicsCards allComics={comicsList} />
      <button
        className="button button__main button__long"
        disabled={newItemLoading}
        style={{ display: comicEnded ? 'none' : 'block' }}
        onClick={() => onRequest(offset)}
      >
        <div className="inner">load more</div>
      </button>
    </div>
  );
};

const ComicsCards = ({ allComics }) => {
  return (
    <ul className="comics__grid">
      {allComics.map((comic, i) => {
        return (
          <li key={i} className="comics__item">
            <Link to={`/comics/${comic.id}`}>
              <img
                src={comic.thumbnail}
                alt="x-men"
                className="comics__item-img"
              />
              <div className="comics__item-name">{comic.title}</div>
              <div className="comics__item-price">{comic.price}</div>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default ComicsList;

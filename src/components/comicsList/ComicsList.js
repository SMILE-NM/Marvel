import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import useMarvelService from '../../services/MarvelService';
import Spinner from '../spinner/Spinner';
import ErrorMessage from '../errorMessage/ErrorMessage';

import './comicsList.scss';

const setContent = (process, Component, newItemLoading) => {
  switch (process) {
    case 'waiting':
      return <Spinner />;
    case 'loading':
      return newItemLoading ? <Component /> : <Spinner />;
    case 'confirmed':
      return <Component />;
    case 'error':
      return <ErrorMessage />;
    default:
      throw new Error('Unexpected process state');
  }
};

const ComicsList = () => {
  const [comicsList, setComicsList] = useState([]);
  const [newItemLoading, setNewItemLoading] = useState(false);
  const [offset, setOffset] = useState(210);
  const [comicEnded, setComicEnded] = useState(false);

  const { getAllComics, process, setProcess } = useMarvelService();

  useEffect(() => {
    onRequest(offset, true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onRequest = (offset, initial) => {
    initial ? setNewItemLoading(false) : setNewItemLoading(true);
    getAllComics(offset)
      .then(onComicsListLoaded)
      .then(() => setProcess('confirmed'));
  };

  const onComicsListLoaded = (newComicsList) => {
    let ended = false;
    if (newComicsList < 8) ended = true;
    setComicsList((comicsList) => [...comicsList, ...newComicsList]);
    setNewItemLoading(false);
    setOffset((offset) => offset + 8);
    setComicEnded(ended);
  };

  return (
    <div className="comics__list">
      {setContent(
        process,
        () => (
          <ComicsCards data={comicsList} />
        ),
        newItemLoading,
      )}

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

const ComicsCards = ({ data }) => {
  return (
    <ul className="comics__grid">
      {data.map((comic, i) => {
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

import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

import useMarvelService from '../../services/MarvelService';

import AppBanner from '../appBanner/AppBanner';
import setContent from '../../utils/setContent';

import './singlePage.scss';

const SinglePage = ({ Component, dataType }) => {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const { getComics, getCharacter, clearError, process, setProcess } =
    useMarvelService();

  useEffect(() => {
    updateData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  const updateData = () => {
    clearError();

    // eslint-disable-next-line default-case
    switch (dataType) {
      case 'comic':
        getComics(id)
          .then(onDataLoaded)
          .then(() => setProcess('confirmed'));
        break;
      case 'character':
        getCharacter(id)
          .then(onDataLoaded)
          .then(() => setProcess('confirmed'));
        break;
    }
  };

  const onDataLoaded = (data) => {
    setData(data);
  };

  return (
    <>
      <AppBanner />
      <div style={{ marginTop: '40px' }}>
        {setContent(process, Component, data)}
      </div>
    </>
  );
};

export default SinglePage;

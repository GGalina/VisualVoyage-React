import { useState } from 'react';
import PropTypes from 'prop-types';
import { ToastContainer } from 'react-toastify';
import { Searchbar } from './Searchbar';
import { ImageGallery } from './ImageGallery';

export const App = () => {
  const [keyword, setKeyword] = useState('');

  const handlerSearchSubmit = keyword => {
    setKeyword(keyword);
  }

  return (
    <div>
      <Searchbar onSubmit={handlerSearchSubmit} />
      <ImageGallery propKeyword={keyword} />
      <ToastContainer autoClose={3000} styled />
    </div>
  );
};

App.propTypes = {
  keyword: PropTypes.string,
};
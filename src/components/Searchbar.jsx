import { useState } from 'react';
import { ImSearch } from 'react-icons/im';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  SearchbarContainer,
  SearchForm,
  SearchBtn,
  SearchBtnLabel,
  SearchInput
} from './ImageFinder.styled';

export const Searchbar = ({ onSubmit }) => {
  const [keyword, setKeyword] = useState('');
  
  const handleSubmit = event => {
    event.preventDefault();
    if (keyword.trim() === '') {
      onSubmit(keyword);
      return toast.info('Please, enter your search keyword!', { theme: "colored" });
    }
    onSubmit(keyword);
  };

  const handlerChange = event => {
    setKeyword(event.target.value.toLowerCase())
  };

  return (
    <SearchbarContainer>
      <SearchForm onSubmit={handleSubmit}>
        <SearchBtn type="submit">
          <ImSearch
            style={{
              width: 20,
              height: 20,
              marginTop: 6,
              color: '#7395AE',
            }}
          />
          <SearchBtnLabel>Search</SearchBtnLabel>
        </SearchBtn>

        <SearchInput
          onChange={handlerChange}
          type="text"
          autocomplete="off"
          placeholder="Search images and photos"
        />
      </SearchForm>
    </SearchbarContainer>
  );
};
import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import s from './SearchBar.module.css';

const SearchBar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [searchQuery, setSearchQquery] = useState('');

  const onHandleChange = e => {
    const query = e.target.value.trim();
    setSearchQquery(query);
  };

  const onHandleSubmit = e => {
    e.preventDefault();
    navigate(`?q=${searchQuery}`, {
      state: location.state,
    });
  };

  return (
    <form className={s.form} onSubmit={onHandleSubmit}>
      <input
        className={s.input}
        type="text"
        name="query"
        autoComplete="off"
        placeholder=""
        onChange={onHandleChange}
      />
      <button className={s.button} type="submit">
        Search
      </button>
    </form>
  );
};

export default SearchBar;

import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import { HeroCard } from '../components/HeroCard';
import queryString from 'query-string';
import { getHeroesByName } from '../helpers';


export const SearchPage = () => {

  const navigate = useNavigate();
  const location = useLocation();
  const { q = 'iron man'} = queryString.parse(location.search);
  const heroes = getHeroesByName(q);

  const {searchText,formState,onInputChange,onResetForm} = useForm({
    searchText:q
  }); 

  const onSearchSubmit = (event) =>{
    event.preventDefault();
    if(searchText.trim().length<= 1)return;
    console.log(searchText) 
    navigate(`?q=${searchText.toLowerCase().trim()}`)
  };

  return (
    <div className='border '>

      <div className="row">


      <div className="col-5">
        <h4>Searching :</h4>

        <hr />

        <form onSubmit={onSearchSubmit}>

          <input 
          type="text"
          placeholder='Search hero'
          className='form-control'
          name='searchText'
          autoComplete='off'
          value={searchText}
          onChange={onInputChange}
          />
          <button className='btn btn-outline-primary'>
            Search
          </button>
        </form>
      </div>

      <div className="col-7">

        <h4>Results</h4>

        <hr />

        {/* <div className="alert alert-primary">
          Search a hero
        </div>

        <div className="alert alert-danger">
          No heroes found
        </div> */}

        {
          
          heroes.map(heroe=>(<HeroCard {...heroe} key={heroe.id}/>)
          ) 
        }

      </div>

      </div>

    </div>
  ) 
}

import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import { HeroCardSearch } from '../components';
import queryString from 'query-string';
import { getHeroesByName } from '../helpers';


export const SearchPage = () => {

  const navigate = useNavigate();
  const location = useLocation();
  const { q = ''} = queryString.parse(location.search);
  const heroes = getHeroesByName(q);

  const {searchText,formState,onInputChange,onResetForm} = useForm({
    searchText:q
  }); 

  const onSearchSubmit = (event) =>{
    event.preventDefault();
    if(searchText.trim().length<= 1)return;
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

        <div className="d-flex row rows-cols-1 row-cols-md-3 g-3 border"> 
        {
          (q.length === 0) ?
          (<div className="alert alert-primary">Search a hero</div>)
          :
          (heroes.length > 0)
              ?
              (heroes.map(heroe=><HeroCardSearch {...heroe} key={heroe.id}/>))
              :
              (<div className="alert alert-danger">No heroes found with {q}</div>)
        }
        </div>

      </div>

      </div>

    </div>
  ) 
}

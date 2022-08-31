import React from 'react';
import { HeroCard } from '../components/HeroCard';

export const SearchPage = () => {
  return (
    <div className='border border-danger'>


      <div className="row">


      <div className="col-5">
        <h4>Searching :</h4>

        <hr />

        <form action="">

          <input 
          type="text"
          placeholder='Search hero'
          className='form-control'
          name='searchText'
          autoComplete='off'
          />


          <button className='btn btn-outline-primary'>
            Search
          </button>
        </form>
      </div>

      <div className="col-7">

        <h4>Results</h4>

        <hr />

        <div className="alert alert-primary">
          Search a hero
        </div>

        <div className="alert alert-danger">
          No heroes found
        </div>


      </div>

      </div>


    </div>
  ) 
}

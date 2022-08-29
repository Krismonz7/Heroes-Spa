import React, { useMemo } from 'react';
import {useParams,Navigate, useNavigate} from 'react-router-dom';
import { getHeroById } from '../helpers';

export const HeroPage = () => {
  const params = useParams();
  const {heroId} = params;
  const hero = useMemo(()=>getHeroById(heroId),[heroId]);

  if(!hero){

    return<Navigate to={'/marvel'}/>

  }

  const navigate = useNavigate();
  const onReturnBack = ()=>{
    navigate(-1)
  }

  const {superhero,id,alter_ego,characters,publisher,first_appearance} = hero;
  return (
    <div className="d-flex container row mt-5 ml-auto mr-auto mb-5 text-light">

      <div className="col-7 bg-dark rounded">
      <img src={`/assets/heroes/${id}.jpg`} className="card-img-top mt-3 mb-3" alt={superhero}/> 
      </div>

      <div className="col-3 bg-dark m-auto rounded">

        <h3>{superhero}</h3>
        <ul className=' d-flex list-group p-4'>
          <li>Aletr ego: <b>{alter_ego}</b></li>
          <li>Publisher: <b>{publisher}</b></li>
          <li>First appearence: <b>{first_appearance}</b></li>
        </ul>

        <h5>Characters</h5>
        <p>{characters}</p>

        <button 
        className="btn btn-success mb-2 ml-auto mr-auto"
        onClick={onReturnBack}
        >
          Regresar
        </button>

      </div>

    </div>
  )
}

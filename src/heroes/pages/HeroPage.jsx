import React from 'react';
import {useParams,Navigate} from 'react-router-dom';
import { getHeroById } from '../helpers';


const CaracterByHeroes = ({alter_ego,characters})=>{

  return (alter_ego === characters) ? null : <p>{characters}</p>

}

export const HeroPage = () => {
  const params = useParams();
  const {heroId} = params;
  const hero = getHeroById(heroId);

  if(!hero){

    return<Navigate to={'/marvel'}/>
    
  }
  return (
    <div className="card bg-dark text-light row no-gutters col-3 m-4 d-center" >
<img src={`assets/heroes/${hero.id}.jpg`} className="card-img-top" alt="..."/>
      <div className="card-body">
            <h5 className="card-title">{hero.superhero}</h5>
            <p className="card-text">{hero.alter_ego}</p>
              <CaracterByHeroes alter_ego={hero.alter_ego} characters={hero.characters}/>
              <p className="card-text">
                <small className="text-muted">{hero.first_appearance}</small>
              </p>
      </div>

</div>
  )
}

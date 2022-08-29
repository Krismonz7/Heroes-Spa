import { Navigate,Link, useNavigate } from "react-router-dom"

const CaracterByHeroes = ({alter_ego,characters})=>{

  return (alter_ego === characters) ? null : <p>{characters}</p>
}

export const HeroCard = ({
    characters,
    first_appearance,
    alter_ego,
    publisher,
    superhero,
    id
}) => {
  const navigate = useNavigate();

  const navigateTo = ()=>{
    navigate(`/hero/${id}`);
  }

  return (
  <div 
  className="card text-dark row no-gutters col-3 m-4 d-center animate__animated animate__fadeIn"
  onClick={navigateTo}
  
  >

<img src={`assets/heroes/${id}.jpg`} className="card-img-top animate__animated animate__bounceInUp" alt="..."/>
      <div className="card-body ">
            <h5 className="card-title ">{superhero}</h5>
            <p className="card-text">{alter_ego}</p>
              <CaracterByHeroes alter_ego={alter_ego} characters={characters}/>
              <p className="card-text">
                <small className="text-muted">{first_appearance}</small>
              </p>

              <Link to={`/hero/${id}`}>Mas...</Link>

      </div>

</div>

        
        
  )
}

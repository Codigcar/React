import React, { useMemo } from 'react'
import { Redirect, useParams } from 'react-router'
import { getHeroesById } from '../../selectors/getHeroById';

export const HeroScreen = ({ history }) => {

    const { heroeId } = useParams();
    console.log(heroeId);

    // const hero = getHeroesById(heroeId);
    const hero = useMemo(() => getHeroesById(heroeId), [heroeId]);
    
    if(!hero) {
        return <Redirect to="/" />;
    }

    const {
        id,
        superhero,
        publisher,
        alter_ego,
        first_appearance,
        characters
    } = hero

    const handleReturn = () => {

        // Validando si ingresó a un heroe especifico de forma directa mediante url
        if(history.length <= 2){
            history.push('/');
        }

        history.goBack();
    }

    return (
        <div className="row mt-5">
            <div className="col-4">
                <img src={ `../assets/heroes/${ heroeId }.jpg`} className="img-thumbnail" alt={ superhero } />
            </div>

            <div className="col-8">
                <h3>{ superhero }</h3>

                <ul className="list-group list-group-flush">
                    <li className="list-grou-item"> <b> Alter ego: </b> { alter_ego } </li>
                    <li className="list-grou-item"> <b> Publisher: </b> { publisher } </li>
                    <li className="list-grou-item"> <b> First appearance: </b> { first_appearance } </li>
                </ul>

                <h5> Character </h5>
                <p> {characters} </p>

                <button className="btn btn-outline-info" onClick={ handleReturn }>
                    Return
                </button>


            </div>
            
        </div>
    )
}

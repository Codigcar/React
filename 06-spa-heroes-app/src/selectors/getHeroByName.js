import { heroesData } from "../data/heroesData"


export const getHeroByName = ( name = '' ) => {

    if( name === '' ){
        return [];
    }

    name = name.toLocaleLowerCase();
    return heroesData.filter( hero => hero.superhero.toLocaleLowerCase().includes( name ) );
    
}

import { heroesData } from "../data/heroesData";

export const getHeroesByPublisher = ( publisher ) => {

    const validPublisher = ['DC Comics','Marvel Comics'];
    if( !validPublisher.includes( publisher )){
        throw new Error(`Publisher ${publisher} no es correcto`);
    }
    return heroesData.filter(hero => hero.publisher === publisher);
}

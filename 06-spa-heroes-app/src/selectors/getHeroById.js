import { heroes } from "../data/heroesData";

export const getHeroesById = ( id ) => {

    return heroes.filter(hero => hero.id === id);
}

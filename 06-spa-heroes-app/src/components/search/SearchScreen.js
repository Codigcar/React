import React, { useMemo } from 'react'
import { useForm } from '../../hooks/useForm';
import { HeroCard } from '../heroes/HeroCard'

import { heroesData } from '../../data/heroesData';
import { useLocation } from 'react-router';

import queryString from 'query-string';
import { getHeroByName } from '../../selectors/getHeroByName';

export const SearchScreen = ({ history }) => {

    // const heroesFiltered = heroesData;
    
    /* valores que van con el hook useForm*/
    const initialForm = {
        searchText: ''
    }
    const [ formValues, handleInputChange ] = useForm( initialForm );
    const { searchText }= formValues;
    /* --- */
    
    const handleSearch = (e) => {
        e.preventDefault();
        // console.log("search:",searchText);
        history.push( `?q=${ searchText }` );
    }
    
    // get el query del url
    const location = useLocation();
    // console.log(location.search);
    
    // instalar package query string: npm install query-string
    console.log(queryString.parse( location.search ));
    const { q = '' } = queryString.parse( location.search );
    // console.log("q:", q );
    
    // const heroesFiltered = getHeroByName( searchText );
    const heroesFiltered = useMemo(() => getHeroByName( q ), [q])


    
    return (
        <div>
            
            <div className="row">
                <div className="col-5">
                    <h4>Search Form</h4>
                    <hr />
                    <form onSubmit={ handleSearch }>
                        <input className="form-control" type="text" placeholder="Find your hero"
                        /* valores que van con el hook useForm*/
                        name="searchText" value={ searchText } onChange={ handleInputChange } autoComplete="off" 
                        />
                        <button className="btn m-1 btn-block btn-outline-primary" type="submit"> Search...</button>
                    </form>
                </div>
                <div className="col-7">
                    <h4>Results</h4>
                    <hr />

                    {
                        (q === '') 
                        && 
                        <div className="alert alert-info">
                            Search a hero
                        </div>
                    }

                    {
                        (q !== '' && heroesFiltered.length === 0) 
                        && 
                        <div className="alert alert-danger">
                            There is no a hero with { q }
                        </div>
                    }


                    {
                        heroesFiltered.map( hero => (
                            <HeroCard key={hero.id} {...hero} />
                        ))
                    }
                </div>

            </div>
        </div>
    )
}

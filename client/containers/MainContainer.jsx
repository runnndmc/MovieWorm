import React, {useEffect, useState} from 'react'
/* import { Route, Switch } from 'react-router-dom';
 */

const MainContainer = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const fetchMovies = await () => {
            const movieArray = await getAllMovies()
            setMovies(moviesArray)
        }
        fetchMovies()
    })
    return(
/*         <Switch>
            <Route></Route>
        </Switch> */
    )
}

export default MainContainer
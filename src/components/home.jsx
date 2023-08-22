
import Navbar from '../components/navbar'
import MovieCard from '../components/movieCard'
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, append,search,resetPageCount,resetSearch } from '../actions';
import './staticFiles/home.css'
import store from '../store';
import { Component, useEffect, useState } from 'react';


function Home(props) {
    const dispatch = useDispatch();
    const counter = useSelector(state => state.page_count);
    const [localMovieList, setlocalMovieList] = useState([])
    const [page, setPage] = useState(1)
    const [query, setQuery] = useState('')
    var movies = []
    async function getMoviews(pagenum) {
        const fetch = require('node-fetch');
        var url = `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=${pagenum}&sort_by=popularity.desc&api_key=6df3176a47b57e9837bba0bae4611a6b`;
        await fetch(url)
            .then(res => res.json())
            .then(json => {
                setlocalMovieList(json.results)
                dispatch(append({ [`Page${pagenum}`]: json.results }))
            })
            .catch(err => console.error('error:' + err));
    }
    async function searchMovies(pagenum) {
        const fetch = require('node-fetch');
        var url = `https://api.themoviedb.org/3/search/movie?include_adult=false&include_video=false&language=en-US&page=${pagenum}&sort_by=popularity.desc&api_key=6df3176a47b57e9837bba0bae4611a6b&query=${query}`;
        await fetch(url)
            .then(res => res.json())
            .then(json => {
                setlocalMovieList(json.results)
                dispatch(search({ [`Page${pagenum}`]: json.results }))
            })
            .catch(err => console.error('error:' + err));
    }
    useEffect(() => {
        getMoviews(counter);
    }, [])
    useEffect(() => {
        if (query.length == 0) {
            getMoviews(counter);
        } else {
            searchMovies(counter);
        }
    }, [page])
    useEffect(() => {
        setPage(1)
        searchMovies(counter)
    }, [query])
    function handleNext() {
        dispatch(increment())
        var page = store.getState().page_count
        if (query.length == 0) {
            if (`Page${page}` in store.getState().movie_list) {
                setlocalMovieList(store.getState().movie_list[`Page${page}`])
            } else {
                setPage(page)
            }
        }else{
            if (`Page${page}` in store.getState().search_list) {
                setlocalMovieList(store.getState().search_list[`Page${page}`])
            } else {
                setPage(page)
            }
        }
    }
    function handlePrev() {
        dispatch(decrement())
        var page = store.getState().page_count
        if (query.length == 0) {
            setlocalMovieList(store.getState().movie_list[`Page${page}`])
        }else{
            setlocalMovieList(store.getState().search_list[`Page${page}`])
        }
        
    }
    function getSearchQuery(result) {
        if (query != result){
            dispatch(resetSearch())
            dispatch(resetPageCount())
        }
        setQuery(result)
        if (query.length==0){
            if (`Page${counter}` in store.getState().movie_list){
                setlocalMovieList(store.getState().movie_list[`Page${counter}`])
            }
        }
        
    }
    return (
        <>
            <Navbar callback={getSearchQuery} />
            <div className='grid'>
                {localMovieList ? localMovieList.map((movie) => (
                    <MovieCard key={movie.id} movieConfigs={movie} />
                )) : null}
            </div>
            <div className="button-container">
                <p>Page: {counter}</p>
                {counter === 1 ? <button className="prev-button" disabled>Previous</button> : <button className="prev-button" onClick={() => handlePrev()}>Previous</button>}
                <button className="next-button" onClick={() => handleNext()}>Next</button>
            </div>
        </>
    );
};
export default Home;
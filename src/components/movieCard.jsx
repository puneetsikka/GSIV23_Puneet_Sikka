
import { Link } from 'react-router-dom';
import './staticFiles/movieCard.css'
import { useDispatch } from 'react-redux';
import { movie_details} from '../actions';
function MovieCard (props){
   const dispatch = useDispatch();
    return (
      <>
      <Link to="movie_details" style={{ textDecoration: 'none', color: 'black' }} onClick={()=>dispatch(movie_details(props.movieConfigs))}>
        <div className="card">
          <img src={props.movieConfigs.poster_path? "https://image.tmdb.org/t/p/original"+props.movieConfigs.poster_path:null} alt="Avatar"></img>
          <div className="container">
            <p className='movie-title'>{props.movieConfigs.original_title}</p>
            <p className='float-right'>{"["+props.movieConfigs.vote_average+"]"}</p>
          </div>
          <p className='movie-overview'>{props.movieConfigs.overview}</p> 
        </div>
      </Link>
      </>
    );
  };

export default (MovieCard);
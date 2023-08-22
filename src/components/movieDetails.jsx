import Navbar from '../components/navbar'
import './staticFiles/moviedetails.css'
import { useSelector } from 'react-redux';
import { movie_details} from '../actions';
function MovieDetails (){
    const movie_details_page = useSelector(state => state.movie_details_page);
    return (
      <>
      <Navbar />
      <div>
        <div className="image-container">
            <img src={"https://image.tmdb.org/t/p/original"+movie_details_page.poster_path} alt="Image"></img>
            <div className="text-container">
                <div className='title'>
                    <p className='movie_title'>{movie_details_page.title}</p>
                    <p>({movie_details_page.vote_average})</p>
                </div>
                <p>Description:{movie_details_page.overview}</p>
            </div>
        </div>
      </div>
      </>
    );
  };
export default MovieDetails;
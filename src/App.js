import './App.css';
import Home from './components/home'
import '../src/components/staticFiles/app.css'
import MovieDetails from './components/movieDetails';
import { Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/movie_details' element={<MovieDetails/>}/>
      </Routes>
    </>
  );
}

export default App;

import Hero from './Hero';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';


const MovieView = () => {
        const { id } = useParams()
        const [movieDetails, setMovieDetails] = useState({})
        const [ isloading, setIsloading ] = useState(true)

        useEffect(() => {
                console.log('make an api request', id)
                fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=1f5494bfb17748a8b536e64a097d0180`)
                    .then(response => response.json())
                    .then(data => {
                        setTimeout(() => {
                            setMovieDetails(data)
                            setIsloading(false)                       
                        }, 200)
                    })
        }, [id])

        function renderMovieDetails(){
            if(isloading) {
                return <Hero text="Loading..."/>
            }
            if(movieDetails) {
                const posterPath = `https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`
                const backdropUrl = `https://image.tmdb.org/t/p/original${movieDetails.backdrop_path}`
                return (
                    <>
                        <Hero text={movieDetails.original_title} backdrop={backdropUrl}/>
                        <div className="container my-3">
                            <div className="row">
                                <div className="col-md-3">
                                    <img src={posterPath} alt='...' className="img-fluid shadow rounded"
                                    />
                                </div>
                                <div className="col-md-9">
                                    <h2>{movieDetails.original_title}</h2>
                                    <p className="lead">
                                        {movieDetails.overview}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </>
                )
            }
        }
      

    return renderMovieDetails()
   
  };

  
export default MovieView;
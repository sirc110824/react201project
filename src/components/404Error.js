import Hero from './Hero';
import {Link} from "react-router-dom";


const ErrorPage = () => {
    return (

        <div className='text-center' p-5>
            <Hero text = "Page not Found" />
            <Link to="/"> Go Back To Home </Link>
        </div>
    )
}

export default ErrorPage;
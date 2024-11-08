import './App.css';
import { useState } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import AboutView from './components/AboutView';
import SearchView from './components/SearchView';
import MovieView from './components/MovieView';
import ErrorPage from './components/404Error';
import { Routes, Route} from 'react-router-dom';





function App() {

  const [searchResults, setSearchResults] = useState([])
  const [searchText, setSearchText] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  
  return (
    <div>
      <Navbar 
        searchText={searchText} 
        setSearchText={setSearchText}
        setSearchResults={setSearchResults}
        setErrorMsg={setErrorMsg}
        />

      <Routes>
        <Route path="/" element={<Home/>} exact />
        <Route path="/about" element={<AboutView/>} />
        <Route   
          path="/search"
          element={
            <SearchView 
              keyword={searchText} 
              searchResults={searchResults}
              errorMsg={errorMsg}
            />
          }
        />
       
        <Route path="/movies/:id" component={MovieView} />
        <Route path="*" element={<ErrorPage/>}/>
    
      </Routes>
    </div>
  );
}

export default App;

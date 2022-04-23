
import './App.css';
import React, { useState, useEffect} from 'react';
import Header from './components/header';
import CharacterContainer from './components/character_container';
import Navigation from './components/navigation';
import { DisneyCharacter } from './disney_character';
import getCharacter from './components/get_characters';
import Pagination from './components/pagination';
import FavoritedContainer from './components/Favorited_container';

export const FavoritesContext = React.createContext<Array<DisneyCharacter>>([]);


const App : React.FC = () => {

	const [currentPage, setCurrentPage] = useState<number>(1);
  //const [characterFavoritesPage, setCharacterFavoritesPage ] = useState<number>(1);
  // Some dummy state representing disney characters
  const [characters, setCharacters] = useState<Array<DisneyCharacter>>([]);
  const [characterFavorites, setCharacterFavorites] = useState<Array<DisneyCharacter>>([]);
  const [buttonText, setButtonText] = useState<string>("Show Favorites");


  useEffect(() => {
   const fetchCharacters = async() => {
    const loadedCharacters = await getCharacter(currentPage)
     setCharacters(loadedCharacters);
   }
   fetchCharacters();
   
}, [currentPage,]);

 
  return (
   <FavoritesContext.Provider value ={characterFavorites}>
    <div className="page">
      <Header currentPage={currentPage} />
      <Navigation currentPage={currentPage} setCurrentPage={setCurrentPage} updateFavorites ={setCharacterFavorites}
       buttonText ={buttonText}  setButtonText ={setButtonText}/>
      {buttonText ==="Show Favorites" &&
      <CharacterContainer characters={characters}  updateFavorites ={setCharacterFavorites}/>}
      {buttonText ==="Show All" &&
       <FavoritedContainer characters={characters}  updateFavorites ={setCharacterFavorites}/> }
      <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} />
    </div>
    </FavoritesContext.Provider>
  );
}

export default App;

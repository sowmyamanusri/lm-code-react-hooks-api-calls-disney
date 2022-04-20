
import './App.css';
import React, { useState, useEffect} from 'react';
import Header from './components/header';
import CharacterContainer from './components/character_container';
import Navigation from './components/navigation';
import { DisneyCharacter } from './disney_character';
import axios from 'axios';
import getCharacter from './components/get_characters';

const App : React.FC = () => {

	const [currentPage, setCurrentPage] = useState<number>(1);

  // Some dummy state representing disney characters
  const [characters, setCharacters] = useState<Array<DisneyCharacter>>([]);

  useEffect(() => {
   const fetchCharacters = async() => {
    const loadedCharacters = await getCharacter(1)
     setCharacters(loadedCharacters);
   }
   fetchCharacters();
}, []);

  return (
    <div className="page">
      <Header currentPage={currentPage} />
      <Navigation currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <CharacterContainer characters={characters} />
    </div>
  );
}

export default App;

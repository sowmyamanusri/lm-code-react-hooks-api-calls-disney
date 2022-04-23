import { DisneyCharacter } from "../disney_character";
import React,{useContext}  from 'react' ;
import {FavoritesContext} from '../App';                                                                                            

// for our props we can reuse the DisneyCharacter interface
// - defining an anonymous type that just has one property - a DisneyCharacter
interface  CharacterProps{
  character:DisneyCharacter;
  updateFavorites:(favorites:Array<DisneyCharacter>)=>void;
}


const Character : React.FC<CharacterProps> = ( { character,updateFavorites}) => {
 
  const characterFavorites =useContext(FavoritesContext);

function toggleFavoriteForCharacter(character:DisneyCharacter){
  if(!characterFavorites.includes(character)){
    updateFavorites([...characterFavorites,character]);
  }else{
    const updatedFavorites = characterFavorites.filter((id)=> id!== character);
    updateFavorites(updatedFavorites)
  }
}
let imageSrc = "https://picsum.photos/300/200/?blur";
if (character.imageUrl) {
 	imageSrc = character.imageUrl.substring(0, character.imageUrl.indexOf('/revision'));
}

 return(
  
    <article className="character-item">

      <h2>{character.name}</h2>

      <div className="character-item__actions" onClick={() => toggleFavoriteForCharacter(character)}>
      {!characterFavorites.includes(character) ? "Add to Favorites" : "Favorited"}
      </div>

      <img className="character-item__img" src={character.imageUrl} alt={character.name} />

    </article>
  )
}
  


export default Character;
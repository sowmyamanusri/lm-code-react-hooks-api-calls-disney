import { DisneyCharacter } from "../disney_character"

// for our props we can reuse the DisneyCharacter interface
// - defining an anonymous type that just has one property - a DisneyCharacter



const Character : React.FC<{ character: DisneyCharacter}> = ( { character }) => 


  
    <article className="character-item">

      <h2>{character.name}</h2>

      <div className="character-item__actions">
        Add to Favourites
      </div>

      <img className="character-item__img" src={character.imageUrl} alt={character.name} />

    </article>
  


export default Character
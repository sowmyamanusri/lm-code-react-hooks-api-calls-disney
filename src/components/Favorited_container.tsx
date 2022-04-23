import React,{useContext}  from 'react' ;
import {FavoritesContext} from '../App';                                                                                            
import { DisneyCharacter } from "../disney_character";
import Character from './character';

interface favoritedContainerProps{
    characters:Array<DisneyCharacter>;
    updateFavorites:(favorites:Array<DisneyCharacter>) => void;
}

  const FavoritedContainer:React.FC<favoritedContainerProps>  =({characters,updateFavorites}) =>{
    const characterFavorites =useContext(FavoritesContext);
        const buildRows = () => {
        
		// we'll need arrays to store the rows and cols in, and they will be of type JSX.Element
		let rows : Array<JSX.Element> = [], cols : Array<JSX.Element> = [];
        
		characterFavorites.forEach((character, index) => {
            cols.push(<Character key={character._id} character={character} 
                 updateFavorites ={updateFavorites}/>);
            if ((index + 1) % 5 === 0) {
                rows.push(
                    <div className="character-row" key={index}>
                        {cols}
                    </div>
                )
                cols = []
            }
        });

        // Final remaining columns
        if (cols.length > 0) {
            rows.push(
                <div className="character-row" key={characterFavorites.length}>
                    {cols}
                </div>
            )
        }

        return rows;
    }

    return (
        <div className="character-container">
            {buildRows()}
        </div>
    )
}

export default FavoritedContainer;
  

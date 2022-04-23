import React,{ useState,useContext}  from 'react' ;
import {FavoritesContext} from '../App';  
import {DisneyCharacter}  from '../disney_character';
import FavoritedContainer from './Favorited_container';
// our props have two properties - a number, and a function that takes a number and returns void
// we can define this as an interface, or anonymously like this:
 interface  NavigationProps{
    currentPage: number, 
    setCurrentPage: (page: number) => void,
    updateFavorites:(favorites:Array<DisneyCharacter>)=>void;
    buttonText: string;
    setButtonText:(buttonText:string) => void;
 }
const Navigation : React.FC<NavigationProps> = ({ currentPage, setCurrentPage,updateFavorites,buttonText, setButtonText}) => {
    const characterFavorites =useContext(FavoritesContext);
   

    const nextPage = () => {
        const newPageNumber = currentPage + 1;
        setCurrentPage(newPageNumber);
    }

    const prevPage = () => {
        if (currentPage > 1) {
            const newPageNumber = currentPage - 1;
            setCurrentPage(newPageNumber);
        }
    }

    const btnChange =()=>{
        (buttonText === "Show Favorites") ?setButtonText("Show All") :setButtonText("Show Favorites");
    }
    
    
    return (
        <div className="navigation">
            <div className="navigation__item">
                <button className="navigation__button" onClick={prevPage}>Prev Page</button>
            </div>
            <div className="navigation__item">
                
                <button className="navigation__button" id ="btn" onClick={btnChange}>
                    {buttonText}
                </button>
            </div>
            <div className="navigation__item">
                <button className="navigation__button" onClick={nextPage}>Next Page</button>
            </div>
        </div>

    )
}

export default Navigation;
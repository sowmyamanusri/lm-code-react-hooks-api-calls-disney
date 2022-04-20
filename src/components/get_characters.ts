import axios from 'axios';
import { DisneyCharacter} from '../disney_character';


const getCharacter = async (pageNumber:number) => {
    try{
        const apiResponse = await axios.get(`http://api.disneyapi.dev/characters?page=${pageNumber}`);
        const result = await apiResponse.data.data;
        console.log(result);
        return result;
    }catch(err){
        return'error';
    }
}

export default getCharacter;
import axios from 'axios';



const getCharacter = async (pageNumber:number) => {
    try{
        const apiResponse = await axios.get(`http://api.disneyapi.dev/characters?page=${pageNumber}`);
        const result = await apiResponse.data.data;
       
        return (result);
    }catch(err){
        return ('error ');
    }
}

export default getCharacter;

import axios from "axios";

 const rickYMortyApi = axios.create({
    baseURL:'rickandmortyapi.com/api/'
})

export default rickYMortyApi
import {maxHeroDescrp, offset} from "./constant";
import { useHttp } from "../hooks/http.hook";

const useMarvelService = () => {
    const {loading, error, request, clearError} = useHttp();

    const _apiKey = 'apikey=8cf516732f4d231b96381d57adc89233';
    const _apiBase = 'https://gateway.marvel.com:443/v1/public';


    const getAllCharacters = async (offset = 200) => {
       const res = await request(`${_apiBase}/characters?limit=9&offset=${offset}&${_apiKey}`)
       return res.data.results.map(_transformData);
    }

    const getCharacter = async (id) => {
        const res = await request(`${_apiBase}/characters/${id}?${_apiKey}`)
        return _transformData(res.data.results[0])
    }
    
    const _transformData = (res) => {
        return(
            {
                id: res.id,
                name: res.name,
                description: cutString(res.description, maxHeroDescrp),
                thumbnail: res.thumbnail.path +'.' + res.thumbnail.extension,
                wiki: res.urls[0].url,
                homepage: res.urls[1].url,
                comics: res.comics.items
            }
        )
    }

    //Comics

    const getAllComics = async (offset) => {
        const res = await request(`${_apiBase}/comics?limit=8&offset=${offset}&${_apiKey}`)
        return res.data.results.map(_transformDataComics);
    }

    const getComic = async (id) => {
        const res = await request(`${_apiBase}/comics/${id}?${_apiKey}`)
        return res.data.results.map(_transformDataComics);
    }

    const _transformDataComics = (res) => {
        return(
            {
                id: res.id,
                title: res.title,
                price: res.prices[0].price ? `${res.prices[0].price}$` : 'not available',
                image: res.thumbnail.path +'.' + res.thumbnail.extension,
                description: res.description,
                pageCount: res.pageCount
            }
        )
    }

    const cutString = (str, endIndex = 150) => {
        if(!str){
            return "Sorry no descriptions yet:("
        }else if(str.length > endIndex){
            return str.slice(0, endIndex) + '...'
        }
        else{
            return str;
        }
    }

    const test = ()=> {
        return test;
    }


    return {loading, error, clearError, getAllCharacters, getCharacter, getAllComics, getComic}
}

export default useMarvelService;